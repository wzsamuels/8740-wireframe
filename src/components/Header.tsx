import React, { useState } from 'react';
import Logo from './Logo';

interface HeaderProps {
  cartItemCount: number;
  onNavigateHome: () => void;
  onNavigateCart: () => void;
  onSearch: (searchTerm: string) => void;
}

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const CartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);



interface DemoButtonProps {
  onDemo: () => void;
}

const DemoButton: React.FC<DemoButtonProps> = ({ onDemo }) => (
  <button
    onClick={onDemo}
    className="ml-4 px-4 py-2 bg-lavender text-white font-bold rounded-md shadow hover:bg-terracotta transition-all"
    aria-label="Run demo user flow"
    type="button"
  >
    Demo
  </button>
);

const Header: React.FC<HeaderProps & { onDemo: () => void }> = ({ cartItemCount, onNavigateHome, onNavigateCart, onSearch, onDemo }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchTerm);
    };
    
  return (
    <header className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="cursor-pointer" onClick={onNavigateHome}>
          <Logo className="h-8 w-auto"/>
        </div>
        
        <div className="flex-1 max-w-md mx-4">
            <form onSubmit={handleSearchSubmit} className="relative">
                <input 
                    type="text" 
                    placeholder="Search for uselessness..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-4 pr-10 py-2 bg-white border border-gray-300 text-plum rounded-md focus:outline-none focus:ring-2 focus:ring-lavender focus:border-lavender transition"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-plum transition">
                    <SearchIcon className="h-5 w-5" />
                </button>
            </form>
        </div>

        <DemoButton onDemo={onDemo} />

        <div className="relative cursor-pointer group" onClick={onNavigateCart}>
          <CartIcon className="h-8 w-8 text-plum group-hover:text-terracotta transition"/>
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-terracotta text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-gray-50">
              {cartItemCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;