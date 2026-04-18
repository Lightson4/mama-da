import React from 'react';
import { Product } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="group cursor-pointer" onClick={() => onClick && onClick(product)}>
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-6 py-2 uppercase tracking-wider text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            View Details
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 tracking-wider text-gray-800 uppercase">
            {product.category}
          </span>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-serif text-lg text-gray-900 mb-1">{product.name}</h3>
        <p className="text-brand-gold font-medium">₦{product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};
