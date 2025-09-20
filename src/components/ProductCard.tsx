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
        className="border border-gray-200 rounded-lg p-4 flex flex-col cursor-pointer group shadow-sm hover:shadow-lg transition-shadow duration-300"
        onClick={() => onViewProduct(product)}
    >
        <div className="w-full h-48 bg-gray-200 rounded-md overflow-hidden mb-4">
            <div className="w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out">
                <ProductImage productName={product.name} productDescription={product.description} productImage={product.image}   />
            </div>
        </div>
        <h3 className="text-lg font-bold text-plum group-hover:text-terracotta transition-colors">{product.name}</h3>
        <p className="text-gray-600 mt-1 mb-2 flex-grow text-sm">{product.description}</p>
        <p className="text-xl font-semibold text-plum mt-auto">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;