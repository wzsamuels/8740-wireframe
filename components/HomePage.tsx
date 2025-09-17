import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface HomePageProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ products, onViewProduct }) => {
  const featuredProduct = products[0];
  const newArrivals = products.slice(1, 5);
  const otherProducts = products.slice(5);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="bg-gray-100 border-2 border-dashed border-gray-300 p-8 md:p-16 text-center">
        <h1 className="text-4xl font-extrabold text-gray-700 mb-2">Welcome to Ultimate Uselessness</h1>
        <p className="text-lg text-gray-500">Find the perfect gadget you never knew you didn't need.</p>
      </div>

      {/* Featured Product Section */}
      {featuredProduct && (
        <div>
          <h2 className="text-2xl font-bold text-gray-700 mb-6 pb-2 border-b-2 border-dashed border-gray-300">Useless Gadget of the Week</h2>
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-2 border-dashed border-gray-300 p-8 cursor-pointer group"
            onClick={() => onViewProduct(featuredProduct)}
          >
            <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Large Image Placeholder</span>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-700 group-hover:text-blue-600 mb-3">{featuredProduct.name}</h3>
              <p className="text-gray-500 text-lg mb-4 line-clamp-4">{featuredProduct.longDescription}</p>
              <p className="text-2xl font-semibold text-gray-800 mb-4">${featuredProduct.price.toFixed(2)}</p>
              <span className="text-blue-600 font-semibold">View Details &rarr;</span>
            </div>
          </div>
        </div>
      )}

      {/* New Arrivals - Horizontal Scroll */}
      {newArrivals.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-700 mb-6 pb-2 border-b-2 border-dashed border-gray-300">New Pointless Arrivals</h2>
          <div className="flex overflow-x-auto space-x-6 pb-4 -ml-4 pl-4">
            {newArrivals.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-80">
                <ProductCard product={product} onViewProduct={onViewProduct} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Products Grid */}
      {otherProducts.length > 0 && (
        <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-6 pb-2 border-b-2 border-dashed border-gray-300">More Useless Gadgets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProducts.map((product) => (
                <ProductCard key={product.id} product={product} onViewProduct={onViewProduct} />
                ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
