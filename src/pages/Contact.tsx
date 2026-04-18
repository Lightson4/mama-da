import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-gray-900 mb-6"
          >
            Get in Touch
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
            className="text-lg text-gray-600 font-light"
          >
            We would love to hear from you. Reach out for inquiries, bespoke requests, or styling advice.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-serif text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-brand-gold" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Our Boutique</h3>
                  <a 
                    href="https://maps.google.com/?q=12+Luxury+Avenue,+Victoria+Island,+Lagos,+Nigeria" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-1 text-gray-600 font-light hover:text-brand-gold transition-colors block"
                  >
                    12 Luxury Avenue<br />
                    Victoria Island, Lagos<br />
                    Nigeria
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-brand-gold" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <a href="tel:+2348012345678" className="mt-1 text-gray-600 font-light hover:text-brand-gold transition-colors block">+234 800 MAMA DA</a>
                  <a href="tel:+2348012345678" className="text-gray-600 font-light hover:text-brand-gold transition-colors block">+234 801 234 5678</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-brand-gold" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <a href="mailto:hello@madam.com.ng" className="mt-1 text-gray-600 font-light hover:text-brand-gold transition-colors block">hello@madam.com.ng</a>
                  <a href="mailto:support@madam.com.ng" className="text-gray-600 font-light hover:text-brand-gold transition-colors block">support@madam.com.ng</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-brand-crayon p-8 rounded-sm"
          >
            <h2 className="text-2xl font-serif text-gray-900 mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-brand-gold focus:border-brand-gold bg-white transition-colors outline-none"
                  placeholder="Jane Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-brand-gold focus:border-brand-gold bg-white transition-colors outline-none"
                  placeholder="jane@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-brand-gold focus:border-brand-gold bg-white transition-colors outline-none resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-brand-gold text-white px-8 py-3 rounded-sm hover:bg-brand-gold-light hover:text-gray-900 transition-colors uppercase tracking-wider text-sm font-medium flex items-center justify-center"
              >
                {isSubmitted ? 'Message Sent!' : (
                  <>
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
