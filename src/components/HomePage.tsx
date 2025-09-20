import React from 'react';
import type { Product } from '../../types';
import ProductCard from './ProductCard';
import ProductImage from './ProductImage';
import BannerImage from './BannerImage';

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
      <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
        <div className="w-full h-56 md:h-80">
            <BannerImage />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 shadow-lg">Welcome to Ultimate Uselessness</h1>
            <p className="text-lg text-gray-200 shadow-md">Find the perfect gadget you never knew you didn't need.</p>
        </div>
      </div>

      {/* Featured Product Section */}
      {featuredProduct && (
        <div>
          <h2 className="text-3xl font-bold text-plum mb-6 pb-2 border-b border-gray-200">Useless Gadget of the Week</h2>
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-gray-200 rounded-lg p-8 cursor-pointer group transition-shadow hover:shadow-lg"
            onClick={() => onViewProduct(featuredProduct)}
          >
            <div className="w-full h-80 bg-gray-200 rounded-md overflow-hidden">
               <div className="w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out">
                <ProductImage productName={featuredProduct.name} productDescription={featuredProduct.longDescription} />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-plum group-hover:text-terracotta transition-colors mb-3">{featuredProduct.name}</h3>
              <p className="text-gray-600 text-lg mb-4 line-clamp-4">{featuredProduct.longDescription}</p>
              <p className="text-2xl font-semibold text-plum mb-4">${featuredProduct.price.toFixed(2)}</p>
              <span className="text-terracotta font-semibold group-hover:underline">View Details &rarr;</span>
            </div>
          </div>
        </div>
      )}

      {/* New Arrivals - Horizontal Scroll */}
      {newArrivals.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-plum mb-6 pb-2 border-b border-gray-200">New Pointless Arrivals</h2>
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
            <h2 className="text-3xl font-bold text-plum mb-6 pb-2 border-b border-gray-200">More Useless Gadgets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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