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

  const SecondaryButton: React.FC<{onClick: () => void, children: React.ReactNode}> = ({ onClick, children }) => (
     <button 
        onClick={onClick} 
        className="text-center py-2 px-6 text-lavender font-bold border-2 border-lavender rounded-md hover:bg-lavender hover:text-white transition-colors"
    >
        {children}
    </button>
  );

  if (orderPlaced) {
    return (
      <div className="text-center py-16 border border-gray-200 rounded-lg">
        <h1 className="text-3xl font-bold text-plum mb-2">Order Placed!</h1>
        <p className="text-gray-600 mb-6">Your useless gadgets are on their way. Probably.</p>
        <SecondaryButton onClick={onBackToHome}>Back to Home</SecondaryButton>
      </div>
    );
  }
  
  if (cartItems.length === 0 && !orderPlaced) {
      return (
        <div className="text-center py-16 border border-gray-200 rounded-lg">
            <h1 className="text-3xl font-bold text-plum mb-2">Nothing to Checkout</h1>
            <p className="text-gray-500 mb-6">Your cart is empty. You can't buy nothing.</p>
            <SecondaryButton onClick={onBackToHome}>Go Shopping</SecondaryButton>
        </div>
      )
  }

  const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
      <input 
        {...props} 
        className={`w-full p-2 border border-gray-300 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-lavender focus:border-lavender transition ${props.className}`}
      />
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-plum mb-6 pb-2 border-b border-gray-200">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            {/* Shipping Details */}
            <div className="border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-plum mb-4">1. Shipping Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput type="text" placeholder="First Name" required/>
                    <FormInput type="text" placeholder="Last Name" required/>
                    <FormInput type="email" placeholder="Email" className="md:col-span-2" required/>
                    <FormInput type="text" placeholder="Address" className="md:col-span-2" required/>
                </div>
            </div>

            {/* Payment Information */}
            <div className="border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-plum mb-4">2. Payment Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormInput type="text" placeholder="Card Number" className="md:col-span-3" required/>
                    <FormInput type="text" placeholder="MM/YY" required/>
                    <FormInput type="text" placeholder="CVC" required/>
                </div>
            </div>
        </div>

        {/* Order Summary */}
        <div className="border border-gray-200 rounded-lg p-6 h-fit sticky top-24">
            <h2 className="text-xl font-bold text-plum mb-4">Order Summary</h2>
            <div className="space-y-2 mb-6 text-gray-600">
                {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.name} x{item.quantity}</span>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
                 <div className="flex justify-between text-sm pt-2 border-t border-gray-200">
                    <span>Shipping</span>
                    <span>$5.99</span>
                </div>
            </div>
            <div className="flex justify-between font-bold text-lg text-plum pt-2 border-t-2 border-gray-300">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>
            <button type="submit" className="w-full mt-6 text-center py-3 px-6 text-white font-bold bg-terracotta rounded-md hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md">
                Place Useless Order
            </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;