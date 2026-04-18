import React, { createContext, useContext, useState, useEffect } from 'react';

export type Category = 'Shoes' | 'Bags' | 'Clothes';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: Category;
  imageUrl: string;
}

interface AppContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  isAdminAuthenticated: boolean;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  aboutImage: string;
  updateAboutImage: (url: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Elegance Stiletto Heels',
    price: 125000,
    description: 'Premium leather stiletto heels with gold accents.',
    category: 'Shoes',
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Lagos Nights Clutch',
    price: 85000,
    description: 'A sophisticated evening clutch with a subtle pink-blue blend.',
    category: 'Bags',
    imageUrl: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Owanbe Silk Dress',
    price: 210000,
    description: 'Flowing silk dress perfect for high-end events.',
    category: 'Clothes',
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800',
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('mamada_products');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('mamada_admin') === 'true';
  });

  const [aboutImage, setAboutImage] = useState<string>(() => {
    return localStorage.getItem('mamada_about_image_url') || 'https://i.ibb.co/TDcgxkkG/download.jpg';
  });

  useEffect(() => {
    localStorage.setItem('mamada_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('mamada_admin', String(isAdminAuthenticated));
  }, [isAdminAuthenticated]);

  useEffect(() => {
    localStorage.setItem('mamada_about_image_url', aboutImage);
  }, [aboutImage]);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Date.now().toString() };
    setProducts(prev => [newProduct, ...prev]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const loginAdmin = (password: string) => {
    if (password === 'Mama123') {
      setIsAdminAuthenticated(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
  };

  const updateAboutImage = (url: string) => {
    setAboutImage(url);
  };

  return (
    <AppContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      isAdminAuthenticated,
      loginAdmin,
      logoutAdmin,
      aboutImage,
      updateAboutImage
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

