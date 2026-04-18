import React from 'react';
import { motion } from 'motion/react';
import { Target, Star, Heart } from 'lucide-react';

export const Vision = () => {
  return (
    <div className="min-h-screen bg-brand-crayon py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-gray-900 mb-6"
          >
            Our Vision
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-0.5 bg-brand-gold mx-auto mb-8" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 font-light leading-relaxed"
          >
            To become the premier luxury fashion destination for women in Nigeria and beyond, setting the standard for elegance, quality, and style innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Target className="w-8 h-8 text-brand-gold" />,
              title: "Excellence",
              description: "We strive for perfection in every detail, ensuring that our products meet the highest global standards of luxury fashion."
            },
            {
              icon: <Star className="w-8 h-8 text-brand-gold" />,
              title: "Empowerment",
              description: "We believe in empowering women through fashion, giving them the confidence to conquer their world with grace."
            },
            {
              icon: <Heart className="w-8 h-8 text-brand-gold" />,
              title: "Innovation",
              description: "While we respect timeless elegance, we continuously innovate our styles to keep our clientele at the forefront of fashion."
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 3) }}
              className="bg-white p-10 text-center rounded-sm shadow-sm border border-brand-pink/10 hover:border-brand-gold/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-crayon mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
