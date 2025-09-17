import React from 'react';
import type { Product, Review } from '../types';
import StarRating from './StarRating';

interface ProductDetailPageProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="border-t-2 border-dashed border-gray-200 py-4">
        <div className="flex items-center mb-2">
            <StarRating rating={review.rating} />
            <p className="ml-4 font-bold text-gray-700">{review.author}</p>
        </div>
        <p className="text-gray-600">{review.comment}</p>
    </div>
);

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onAddToCart }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="w-full h-96 bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300">
            <span className="text-gray-400">Large Image Placeholder</span>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{product.name}</h1>
          <p className="text-3xl font-semibold text-gray-700 mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 text-lg mb-6">{product.longDescription}</p>
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full text-center py-3 px-6 text-gray-700 font-bold border-2 border-dashed border-gray-400 hover:border-gray-600 hover:bg-gray-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 pb-2 border-b-2 border-dashed border-gray-300">Customer Reviews</h2>
        <div className="space-y-4">
            {product.reviews.length > 0 ? (
                product.reviews.map(review => <ReviewCard key={review.id} review={review} />)
            ) : (
                <p className="text-gray-500">No reviews yet. Be the first to be confused by this product!</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
