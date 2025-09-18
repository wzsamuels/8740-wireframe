import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface SearchResultsPageProps {
  products: Product[];
  searchTerm: string;
  onViewProduct: (product: Product) => void;
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ products, searchTerm, onViewProduct }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-plum mb-6 pb-2 border-b border-gray-200">
        Search Results for "{searchTerm}"
      </h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onViewProduct={onViewProduct} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-gray-200 rounded-lg">
            <p className="text-lg text-gray-500">No useless gadgets found. Try searching for something else pointless.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;