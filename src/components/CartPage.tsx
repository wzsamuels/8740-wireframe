import React from 'react';
import type { CartItem } from '../../types';
import ProductImage from './ProductImage';

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onCheckout: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, onUpdateQuantity, onCheckout }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shippingFee;

  if (cartItems.length === 0) {
    return (
        <div className="text-center py-16 border border-gray-200 rounded-lg">
            <h1 className="text-3xl font-bold text-plum mb-2">Your Cart is Uselessly Empty</h1>
            <p className="text-gray-500">Go find some pointless things to buy.</p>
        </div>
    );
  }

  return (
    <div>
        <h1 className="text-3xl font-bold text-plum mb-6 pb-2 border-b border-gray-200">Your Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
                {cartItems.map(item => (
                    <div key={item.id} className="flex items-center p-4 border border-gray-200 rounded-lg">
                        <div className="w-24 h-24 bg-gray-200 rounded-md overflow-hidden flex-shrink-0 mr-4">
                           <ProductImage productName={item.name} productDescription={item.description} />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-lg font-bold text-plum">{item.name}</h2>
                            <p className="text-gray-500">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-3 mx-4">
                            <button aria-label={`Decrease quantity of ${item.name}`} onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 border border-gray-300 rounded-md w-8 h-8 flex items-center justify-center hover:bg-gray-100">-</button>
                            <span className="font-bold w-4 text-center" aria-live="polite">{item.quantity}</span>
                            <button aria-label={`Increase quantity of ${item.name}`} onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 border border-gray-300 rounded-md w-8 h-8 flex items-center justify-center hover:bg-gray-100">+</button>
                        </div>
                        <p className="font-semibold text-plum w-24 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}
            </div>

            <div className="border border-gray-200 rounded-lg p-6 h-fit sticky top-24">
                <h2 className="text-xl font-bold text-plum mb-4">Order Summary</h2>
                <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Carrier Pigeon Fee</span>
                        <span>${shippingFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg text-plum pt-2 border-t border-gray-200">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
                <button 
                    onClick={onCheckout}
                    className="w-full mt-6 text-center py-3 px-6 text-white font-bold bg-terracotta rounded-md hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    </div>
  );
};

export default CartPage;