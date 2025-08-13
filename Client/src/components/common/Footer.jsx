import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <h5 className="text-xl font-bold">AveoStore</h5>
            </div>
            <p className="text-gray-400 mb-4">
              Premium eco-friendly products for conscious living. Sustainable, stylish, and built to last.
            </p>
          </div>

          <div>
            <h6 className="font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold mb-4">Categories</h6>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/pets" className="hover:text-white transition-colors">Pet Care</Link></li>
              <li><Link to="/eco" className="hover:text-white transition-colors">Eco Living</Link></li>
              <li><Link to="/fitness" className="hover:text-white transition-colors">Fitness</Link></li>
              <li><Link to="/new" className="hover:text-white transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold mb-4">Support</h6>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/track" className="hover:text-white transition-colors">Track Order</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AveoEarth. All rights reserved. Made with 💚 for a sustainable future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;