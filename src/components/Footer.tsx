import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, Crown } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-brand-pink/20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-brand-gold mb-4 flex items-center gap-2">
              <Crown className="w-6 h-6" />
              MAMA DA
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Redefining luxury fashion for the modern Nigerian woman. Elegance, confidence, and class in every piece.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-brand-gold text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-brand-gold text-sm transition-colors">About Us</Link></li>
              <li><Link to="/vision" className="text-gray-600 hover:text-brand-gold text-sm transition-colors">Vision</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-brand-gold text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-gray-900 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 text-sm">
                <MapPin size={16} className="mr-2 text-brand-pink-dark flex-shrink-0" />
                <a href="https://maps.google.com/?q=Lagos,+Nigeria" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                  Lagos, Nigeria
                </a>
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <Phone size={16} className="mr-2 text-brand-pink-dark flex-shrink-0" />
                <a href="tel:+2348012345678" className="hover:text-brand-gold transition-colors">
                  +234 800 MAMA DA
                </a>
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <Mail size={16} className="mr-2 text-brand-pink-dark flex-shrink-0" />
                <a href="mailto:hello@madam.com.ng" className="hover:text-brand-gold transition-colors">
                  hello@madam.com.ng
                </a>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href="https://instagram.com/mamada" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors flex items-center gap-2 text-sm font-medium">
                <Instagram size={20} />
                <span>@mamada</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Mama Da. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

