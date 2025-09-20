import React, { useState, useCallback, useEffect } from 'react';
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
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast bg-plum text-white py-2 px-4 rounded-md shadow-lg flex items-center justify-between">
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-white opacity-70 hover:opacity-100">&times;</button>
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
      <Toast key={toast.id} message={toast.message} onClose={() => removeToast(toast.id)} />
    ))}
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);

  const addToast = useCallback((message: string) => {
    const id = Date.now();
    setToasts(prevToasts => [...prevToasts, { id, message }]);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const viewProduct = useCallback((product: Product) => {
    setActiveProduct(product);
    navigateTo(Page.Product);
  }, [navigateTo]);

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
              // Mark for removal to trigger animation
              setTimeout(() => {
                  setCart(currentCart => currentCart.filter(item => item.id !== productId));
              }, 500); // CSS animation duration
              return prevCart.map(item => item.id === productId ? {...item, status: 'removing'} : item);
          }
          return prevCart.map(item => item.id === productId ? {...item, quantity: newQuantity} : item);
      })
  }, []);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    if (!term.trim()) {
      setSearchResults([]);
      navigateTo(Page.Home);
      return;
    }
    const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(term.toLowerCase()));
    setSearchResults(results);
    navigateTo(Page.SearchResults);
  }, [navigateTo]);
  
  const clearCart = useCallback(() => {
    setCart([]);
  }, []);


  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage products={PRODUCTS} onViewProduct={viewProduct} />;
      case Page.Product:
        return activeProduct ? <ProductDetailPage product={activeProduct} onAddToCart={addToCart} /> : <HomePage products={PRODUCTS} onViewProduct={viewProduct} />;
      case Page.Cart:
        return <CartPage cartItems={cart} onUpdateQuantity={updateCartQuantity} onCheckout={() => navigateTo(Page.Checkout)} />;
      case Page.Checkout:
        return <CheckoutPage cartItems={cart} onOrderPlaced={clearCart} onBackToHome={() => navigateTo(Page.Home)} />;
      case Page.SearchResults:
        return <SearchResultsPage products={searchResults} searchTerm={searchTerm} onViewProduct={viewProduct} />;
      default:
        return <HomePage products={PRODUCTS} onViewProduct={viewProduct} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-inter text-plum bg-white">
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      <Header 
        cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onNavigateHome={() => navigateTo(Page.Home)}
        onNavigateCart={() => navigateTo(Page.Cart)}
        onSearch={handleSearch}
      />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;