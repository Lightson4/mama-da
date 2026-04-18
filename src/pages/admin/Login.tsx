import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

export const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { loginAdmin } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="min-h-screen bg-brand-crayon flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-sm shadow-sm border border-brand-pink/20"
      >
        <div>
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-brand-pink/20">
            <Lock className="h-6 w-6 text-brand-gold" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-serif text-gray-900">
            Admin Access
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter your password to continue
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className="appearance-none rounded-sm relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-brand-gold focus:border-brand-gold focus:z-10 sm:text-sm transition-colors"
              placeholder="Password"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-brand-gold hover:bg-brand-gold-light hover:text-gray-900 focus:outline-none transition-colors uppercase tracking-wider"
            >
              Sign in
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
