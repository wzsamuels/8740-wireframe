import React, { useState, useCallback, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate
} from 'react-router-dom';
import { Page, type Product, type CartItem } from './types';
import { PRODUCTS } from './src/constants';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import HomePage from './src/components/HomePage';
import ProductDetailPage from './src/components/ProductDetailPage';
import CartPage from './src/components/CartPage';
import CheckoutPage from './src/components/CheckoutPage';
import SearchResultsPage from './src/components/SearchResultsPage';


interface ToastProps {
  id: number;
  message: string;
  onClose: (id: number) => void;
}

const Toast: React.FC<ToastProps> = ({ id, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 3000);

    return () => clearTimeout(timer);
  }, [id, onClose]);

  return (
    <div className="toast bg-plum text-white py-2 px-4 rounded-md shadow-lg flex items-center justify-between">
      <span>{message}</span>
      <button onClick={() => onClose(id)} className="ml-4 text-white opacity-70 hover:opacity-100">&times;</button>
    </div>
  );
};


interface ToastContainerProps {
  toasts: { id: number; message: string }[];
  removeToast: (id: number) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, removeToast }) => (
  <div className="toast-container" role="status" aria-live="polite">
    {toasts.map(toast => (
      <Toast key={toast.id} id={toast.id} message={toast.message} onClose={removeToast} />
    ))}
  </div>
);


const AppRoutes: React.FC<{
  cart: CartItem[];
  addToCart: (product: Product) => void;
  updateCartQuantity: (productId: number, newQuantity: number) => void;
  clearCart: () => void;
  searchResults: Product[];
  searchTerm: string;
  setSearchTerm: (s: string) => void;
  setSearchResults: (r: Product[]) => void;
  addToast: (msg: string) => void;
}> = ({ cart, addToCart, updateCartQuantity, clearCart, searchResults, searchTerm, setSearchTerm, setSearchResults, addToast }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // Get productId from URL if present
  const productId = location.pathname.startsWith('/product/') ? Number(location.pathname.split('/product/')[1]) : null;
  const product = productId ? PRODUCTS.find(p => p.id === productId) : null;

  return (
    <Routes>
      <Route path="/" element={<HomePage products={PRODUCTS} onViewProduct={p => navigate(`/product/${p.id}`)} />} />
      <Route path="/product/:id" element={product ? <ProductDetailPage product={product} onAddToCart={addToCart} /> : <Navigate to="/" />} />
      <Route path="/cart" element={<CartPage cartItems={cart} onUpdateQuantity={updateCartQuantity} onCheckout={() => navigate('/checkout')} />} />
      <Route path="/checkout" element={<CheckoutPage cartItems={cart} onOrderPlaced={clearCart} onBackToHome={() => navigate('/')} />} />
      <Route path="/search" element={<SearchResultsPage products={searchResults} searchTerm={searchTerm} onViewProduct={p => navigate(`/product/${p.id}`)} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);
  const toastIdRef = React.useRef(1);
  const addToast = useCallback((message: string) => {
    const id = toastIdRef.current++;
    setToasts(prevToasts => [...prevToasts, { id, message }]);
  }, []);
  const removeToast = useCallback((id: number) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);

  // Cart logic
  const addToCart = useCallback((productToAdd: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productToAdd.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...productToAdd, quantity: 1 }];
    });
    addToast(`${productToAdd.name} added to cart!`);
  }, [addToast]);
  const updateCartQuantity = useCallback((productId: number, newQuantity: number) => {
    setCart(prevCart => {
      if (newQuantity <= 0) {
        setTimeout(() => {
          setCart(currentCart => currentCart.filter(item => item.id !== productId));
        }, 500);
        return prevCart.map(item => item.id === productId ? { ...item, status: 'removing' } : item);
      }
      return prevCart.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item);
    });
  }, []);
  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  // Search logic
  const handleSearch = useCallback((term: string, navigate?: (url: string) => void) => {
    setSearchTerm(term);
    if (!term.trim()) {
      setSearchResults([]);
      if (navigate) navigate('/');
      return;
    }
    const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(term.toLowerCase()));
    setSearchResults(results);
    if (navigate) navigate('/search');
  }, []);

  // Demo user flow logic
  const runDemo = useCallback(async (navigate: (url: string) => void) => {
    navigate('/');
    addToast('Demo: Welcome! Starting user flow...');
    await new Promise(res => setTimeout(res, 2000));
    setSearchTerm('cube');
    handleSearch('cube', navigate);
    addToast('Demo: Searched for "cube"');
    await new Promise(res => setTimeout(res, 2000));
    const cubeProduct = PRODUCTS.find(p => p.name.toLowerCase().includes('cube'));
    if (cubeProduct) {
      navigate(`/product/${cubeProduct.id}`);
      addToast(`Demo: Viewing "${cubeProduct.name}"`);
      await new Promise(res => setTimeout(res, 2000));
      addToCart(cubeProduct);
      addToast(`Demo: Added "${cubeProduct.name}" to cart`);
      await new Promise(res => setTimeout(res, 2000));
    }
    navigate('/cart');
    addToast('Demo: Viewing cart');
    await new Promise(res => setTimeout(res, 2000));
    navigate('/checkout');
    addToast('Demo: Proceeding to checkout');
    await new Promise(res => setTimeout(res, 2000));
    addToast('Demo complete!');
  }, [addToast, handleSearch, setSearchTerm, addToCart]);

  // Header wrapper to inject navigation
  const HeaderWithRouter: React.FC = () => {
    const navigate = useNavigate();
    return (
      <Header
        cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onNavigateHome={() => navigate('/')}
        onNavigateCart={() => navigate('/cart')}
        onSearch={term => handleSearch(term, navigate)}
        onDemo={() => runDemo(navigate)}
      />
    );
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-inter text-plum bg-white">
        <ToastContainer toasts={toasts} removeToast={removeToast} />
        <HeaderWithRouter />
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
          <AppRoutes
            cart={cart}
            addToCart={addToCart}
            updateCartQuantity={updateCartQuantity}
            clearCart={clearCart}
            searchResults={searchResults}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setSearchResults={setSearchResults}
            addToast={addToast}
          />
        </main>
        <Footer />
      </div>
    </Router>
  );
};



export default App;