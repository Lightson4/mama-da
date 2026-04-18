import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';
import { Product } from '../context/AppContext';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!product) return null;

  const whatsappMessage = `Hello Mama Da, I am interested in ordering the ${product.name} (₦${product.price.toLocaleString()}).`;
  const whatsappUrl = `https://wa.me/2348012345678?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl bg-white z-[70] shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur p-2 rounded-full text-gray-800 hover:text-brand-gold transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-100">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
              <span className="text-sm font-medium text-brand-gold tracking-wider uppercase mb-2">
                {product.category}
              </span>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">{product.name}</h2>
              <p className="text-2xl text-gray-700 mb-6 border-b border-gray-100 pb-6">
                ₦{product.price.toLocaleString()}
              </p>
              
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {product.description}
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white px-8 py-4 rounded-sm hover:bg-[#128C7E] transition-colors uppercase tracking-wider text-sm font-medium flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Order via WhatsApp
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
