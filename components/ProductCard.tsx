
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewProduct: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewProduct }) => {
  return (
    <div 
        className="border-2 border-dashed border-gray-300 p-4 flex flex-col cursor-pointer group"
        onClick={() => onViewProduct(product)}
    >
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-4">
            <span className="text-gray-400">Image Placeholder</span>
        </div>
        <h3 className="text-lg font-bold text-gray-700 group-hover:text-blue-600">{product.name}</h3>
        <p className="text-gray-500 mt-1 mb-2 flex-grow">{product.description}</p>
        <p className="text-xl font-semibold text-gray-800">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
