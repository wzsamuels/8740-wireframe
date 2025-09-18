import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Useless Gadgets Inc. All rights reserved, for some reason.</p>
        <div className="flex justify-center space-x-6 mt-2">
            <a href="#" className="hover:text-terracotta transition-colors">About Us</a>
            <a href="#" className="hover:text-terracotta transition-colors">Contact</a>
            <a href="#" className="hover:text-terracotta transition-colors">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;