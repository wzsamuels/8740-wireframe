import React from 'react';
import type { Product } from '../../types';
import ProductImage from './ProductImage';

interface ProductCardProps {
  product: Product;
  onViewProduct: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewProduct }) => {
  return (
    <div 
        className="border border-gray-200 rounded-lg p-4 flex flex-col group shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
        <button onClick={() => onViewProduct(product)} className="text-left focus:outline-none focus:ring-2 focus:ring-lavender rounded-md">
            <div className="w-full h-48 bg-gray-200 rounded-md overflow-hidden mb-4">
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out">
                    <ProductImage productName={product.name} productDescription={product.description} productImage={product.image}   />
                </div>
            </div>
            <h3 className="text-lg font-bold text-plum group-hover:text-terracotta transition-colors">{product.name}</h3>
        </button>
        <p className="text-gray-600 mt-1 mb-2 flex-grow text-sm">{product.description}</p>
        <p className="text-xl font-semibold text-plum mt-auto">${product.price.toFixed(2)}</p>
    </div>
  );
};

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${filled ? 'text-yellow-500' : 'text-gray-300'}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .587l3.668 7.431 8.209 1.188-5.934 5.768 1.403 8.184L12 18.896l-7.346 3.866 1.403-8.184-5.934-5.768 8.209-1.188z" />
    </svg>
  );
};

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center" role="img" aria-label={`Rating: ${rating} out of ${maxRating} stars.`}>
      {[...Array(maxRating)].map((_, index) => (
        <StarIcon key={index} filled={index < rating} />
      ))}
    </div>
  );
};

export default ProductCard;