
import React, { useState, useCallback } from 'react';
import { Page, type Product, type CartItem } from './types';
import { PRODUCTS } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductDetailPage from './components/ProductDetailPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import SearchResultsPage from './components/SearchResultsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

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
  }, []);
  
  const updateCartQuantity = useCallback((productId: number, newQuantity: number) => {
      setCart(prevCart => {
          if (newQuantity <= 0) {
              return prevCart.filter(item => item.id !== productId);
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
    <div className="flex flex-col min-h-screen font-sans text-gray-700 bg-white">
      <Header 
        cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onNavigateHome={() => navigateTo(Page.Home)}
        onNavigateCart={() => navigateTo(Page.Cart)}
        onSearch={handleSearch}
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
