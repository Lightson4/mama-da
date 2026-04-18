import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useAppContext } from '../context/AppContext';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { Product } from '../context/AppContext';

export const Home = () => {
  const { products } = useAppContext();
  const featuredProducts = products.slice(0, 3);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Fashion" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-crayon/50 to-brand-crayon/90" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-gray-900 mb-6"
          >
            Elegance Redefined
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-10 font-light"
          >
            Discover the finest collection of luxury shoes, bags, and clothing curated for the modern Nigerian woman.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#collection" className="bg-brand-gold text-white px-8 py-3 rounded-sm hover:bg-brand-gold-light hover:text-gray-900 transition-colors uppercase tracking-wider text-sm font-medium">
              Shop Now
            </a>
            <Link to="/about" className="bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-sm hover:border-brand-gold hover:text-brand-gold transition-colors uppercase tracking-wider text-sm font-medium">
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Shop by Category</h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Shoes', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800' },
              { name: 'Bags', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800' },
              { name: 'Clothes', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800' }
            ].map((category) => (
              <div key={category.name} className="relative group cursor-pointer overflow-hidden aspect-[3/4]">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-serif tracking-wider">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="collection" className="py-20 bg-brand-crayon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">Featured Collection</h2>
              <div className="w-16 h-0.5 bg-brand-gold" />
            </div>
            <a href="#" className="hidden md:block text-brand-gold hover:text-brand-gold-light transition-colors uppercase tracking-wider text-sm font-medium">
              View All
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} onClick={handleProductClick} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-block border border-brand-gold text-brand-gold px-8 py-3 rounded-sm hover:bg-brand-gold hover:text-white transition-colors uppercase tracking-wider text-sm font-medium">
              View All Collection
            </a>
          </div>
        </div>
      </section>

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={closeProductModal} 
      />
    </div>
  );
};

