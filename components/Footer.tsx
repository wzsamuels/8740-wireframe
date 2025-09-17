
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t-2 border-dashed border-gray-300 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Useless Gadgets Inc. All rights reserved, for some reason.</p>
        <div className="flex justify-center space-x-6 mt-2">
            <a href="#" className="hover:text-gray-800">About Us</a>
            <a href="#" className="hover:text-gray-800">Contact</a>
            <a href="#" className="hover:text-gray-800">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
