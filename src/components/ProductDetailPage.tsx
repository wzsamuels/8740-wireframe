import React from 'react';
import type { Product, Review } from '../../types';
import StarRating from './StarRating';
import ProductImage from './ProductImage';

interface ProductDetailPageProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="border-t border-gray-200 py-4">
        <div className="flex items-center mb-2">
            <StarRating rating={review.rating} />
            <p className="ml-4 font-bold text-plum">{review.author}</p>
        </div>
        <p className="text-gray-600">{review.comment}</p>
    </div>
);

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onAddToCart }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
          <ProductImage productImage={product.image} productName={product.name} productDescription={product.longDescription} />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-plum mb-2">{product.name}</h1>
          <p className="text-3xl font-semibold text-gray-800 mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 text-lg mb-6">{product.longDescription}</p>
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full text-center py-3 px-6 text-white font-bold bg-terracotta rounded-md hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-plum mb-4 pb-2 border-b border-gray-200">Customer Reviews</h2>
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