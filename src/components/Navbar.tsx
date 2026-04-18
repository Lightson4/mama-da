import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Settings, Crown } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAppContext } from '../context/AppContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAdminAuthenticated } = useAppContext();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Vision', path: '/vision' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-brand-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <Crown className="w-8 h-8 text-brand-gold" />
              <span className="font-serif text-2xl font-bold text-brand-gold tracking-wider">MAMA DA</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-gold",
                  isActive(link.path) ? "text-brand-gold border-b-2 border-brand-gold" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              to={isAdminAuthenticated ? "/admin/dashboard" : "/admin/login"}
              className="text-gray-400 hover:text-brand-gold transition-colors"
              title="Admin Access"
            >
              <Settings size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-gold focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-brand-pink/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  isActive(link.path)
                    ? "text-brand-gold bg-brand-pink/10"
                    : "text-gray-600 hover:text-brand-gold hover:bg-brand-pink/5"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={isAdminAuthenticated ? "/admin/dashboard" : "/admin/login"}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-brand-gold hover:bg-brand-pink/5"
            >
              Admin Access
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

