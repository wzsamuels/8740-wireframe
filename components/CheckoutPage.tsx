import React, { useState } from 'react';
import type { CartItem } from '../types';

interface CheckoutPageProps {
    cartItems: CartItem[];
    onOrderPlaced: () => void;
    onBackToHome: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, onOrderPlaced, onBackToHome }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) + (cartItems.length > 0 ? 5.99 : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    onOrderPlaced();
  };

  if (orderPlaced) {
    return (
      <div className="text-center py-16 border-2 border-dashed border-gray-300">
        <h1 className="text-3xl font-bold text-gray-700 mb-2">Order Placed!</h1>
        <p className="text-gray-600 mb-6">Your useless gadgets are on their way. Probably.</p>
        <button 
            onClick={onBackToHome} 
            className="text-center py-2 px-6 text-gray-700 font-bold border-2 border-dashed border-gray-400 hover:border-gray-600 hover:bg-gray-100"
        >
            Back to Home
        </button>
      </div>
    );
  }
  
  if (cartItems.length === 0 && !orderPlaced) {
      return (
        <div className="text-center py-16 border-2 border-dashed border-gray-300">
            <h1 className="text-3xl font-bold text-gray-700 mb-2">Nothing to Checkout</h1>
            <p className="text-gray-500 mb-6">Your cart is empty. You can't buy nothing.</p>
            <button 
                onClick={onBackToHome} 
                className="text-center py-2 px-6 text-gray-700 font-bold border-2 border-dashed border-gray-400 hover:border-gray-600 hover:bg-gray-100"
            >
                Go Shopping
            </button>
        </div>
      )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-700 mb-6 pb-2 border-b-2 border-dashed border-gray-300">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            {/* Shipping Details */}
            <div className="border-2 border-dashed border-gray-300 p-6">
                <h2 className="text-xl font-bold mb-4">1. Shipping Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full p-2 border-2 border-dashed border-gray-300 bg-gray-50" required/>
                    <input type="text" placeholder="Last Name" className="w-full p-2 border-2 border-dashed border-gray-300 bg-gray-50" required/>
                    <input type="email" placeholder="Email" className="md:col-span-2 w-full p-2 border-2 border-dashed border-gray-300 bg-gray-50" required/>
                    <input type="text" placeholder="Address" className="md:col-span-2 w-full p-2 border-2 border-dashed border-gray-300 bg-gray-50" required/>
                </div>
            </div>

            {/* Payment Information */}
            <div className="border-2 border-dashed border-gray-300 p-6">
                <h2 className="text-xl font-bold mb-4">2. Payment Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" placeholder="Card Number" className="md:col-span-3 w-full p-2 border-2 border-dashed border-gray-300 bg-gray-50" required/>
                    <input type="text" placeholder="MM/YY" className="w-full p-2 border-2 border-dashed border-gray-300 bg-gray-50" required/>
                    <input type="text" placeholder="CVC" className="w-full p-2 border-2 border-dashed border-gray-300 bg-gray-50" required/>
                </div>
            </div>
        </div>

        {/* Order Summary */}
        <div className="border-2 border-dashed border-gray-300 p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-6">
                {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.name} x{item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
                 <div className="flex justify-between text-sm pt-2 border-t border-dashed border-gray-200">
                    <span>Shipping</span>
                    <span>$5.99</span>
                </div>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t-2 border-dashed border-gray-200">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>
            <button type="submit" className="w-full mt-6 text-center py-3 px-6 text-gray-700 font-bold border-2 border-dashed border-gray-400 hover:border-gray-600 hover:bg-gray-100">
                Place Useless Order
            </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
