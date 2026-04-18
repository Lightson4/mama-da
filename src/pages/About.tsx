import React from 'react';
import { motion } from 'motion/react';
import { useAppContext } from '../context/AppContext';

export const About = () => {
  const { aboutImage } = useAppContext();

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square max-w-2xl mx-auto overflow-hidden rounded-sm mb-12 shadow-lg"
        >
          <img 
            src={aboutImage} 
            alt="Mama Da Founder" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-pink/10 mix-blend-overlay" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Mama Da</h1>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-8" />
          
          <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg text-justify md:text-center">
            <p>
              Mama Da was born out of a deep appreciation for luxury, elegance, and the vibrant spirit of the Nigerian woman. We believe that fashion is more than just clothing; it is a statement of confidence, a reflection of inner beauty, and a celebration of class.
            </p>
            <p>
              Our journey began with a simple vision: to provide high-quality, meticulously crafted fashion items—shoes, bags, and clothes—that resonate with the sophisticated tastes of our clientele. Every piece in our collection is selected with an uncompromising commitment to quality and style.
            </p>
            <p>
              We draw inspiration from the rich cultural heritage of Nigeria, blending it seamlessly with contemporary global fashion trends. The result is a unique aesthetic that is both timeless and modern, soft yet powerful.
            </p>
            <p>
              At Mama Da, we are dedicated to delivering excellence. When you wear our pieces, you are not just wearing fashion; you are wearing a legacy of elegance.
            </p>
          </div>
          
          <div className="mt-12 p-8 bg-brand-crayon border-t border-b border-brand-gold/30">
            <p className="font-serif text-2xl text-gray-900 italic">
              "Elegance is not about being noticed, it's about being remembered."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

