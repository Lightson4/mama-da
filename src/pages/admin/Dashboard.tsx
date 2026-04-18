import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit2, Trash2, LogOut, Image as ImageIcon, Settings as SettingsIcon } from 'lucide-react';
import { useAppContext, Product, Category } from '../../context/AppContext';

export const AdminDashboard = () => {
  const { 
    products, 
    addProduct, 
    updateProduct, 
    deleteProduct, 
    isAdminAuthenticated, 
    logoutAdmin,
    aboutImage,
    updateAboutImage
  } = useAppContext();
  const navigate = useNavigate();
  
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Partial<Product>>({});
  const [showForm, setShowForm] = useState(false);
  
  const [activeTab, setActiveTab] = useState<'products' | 'settings'>('products');
  const [newAboutImage, setNewAboutImage] = useState(aboutImage);

  useEffect(() => {
    if (!isAdminAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAdminAuthenticated, navigate]);

  const handleLogout = () => {
    logoutAdmin();
    navigate('/');
  };

  const handleEdit = (product: Product) => {
    setCurrentProduct(product);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && currentProduct.id) {
      updateProduct(currentProduct.id, currentProduct);
    } else {
      addProduct(currentProduct as Omit<Product, 'id'>);
    }
    setShowForm(false);
    setIsEditing(false);
    setCurrentProduct({});
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateAboutImage(newAboutImage);
    alert('Settings saved successfully!');
  };

  if (!isAdminAuthenticated) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-sm shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl font-serif text-gray-900">Admin Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">Manage your store</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-sm hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              <LogOut size={16} className="mr-2" />
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('products')}
            className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'products' 
                ? 'border-brand-gold text-brand-gold' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors flex items-center ${
              activeTab === 'settings' 
                ? 'border-brand-gold text-brand-gold' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <SettingsIcon size={16} className="mr-2" />
            Store Settings
          </button>
        </div>

        {activeTab === 'products' && (
          <>
            <div className="mb-6 flex justify-end">
              <button
                onClick={() => {
                  setIsEditing(false);
                  setCurrentProduct({ category: 'Shoes' });
                  setShowForm(true);
                }}
                className="flex items-center px-4 py-2 bg-brand-gold text-white rounded-sm hover:bg-brand-gold-light hover:text-gray-900 transition-colors text-sm font-medium"
              >
                <Plus size={16} className="mr-2" />
                Add Product
              </button>
            </div>

            {showForm && (
              <div className="mb-8 bg-white p-6 rounded-sm shadow-sm border border-brand-pink/20">
                <h2 className="text-xl font-serif mb-6">{isEditing ? 'Edit Product' : 'Add New Product'}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        required
                        value={currentProduct.name || ''}
                        onChange={e => setCurrentProduct({...currentProduct, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-brand-gold focus:border-brand-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Price (₦)</label>
                      <input
                        type="number"
                        required
                        min="0"
                        value={currentProduct.price || ''}
                        onChange={e => setCurrentProduct({...currentProduct, price: Number(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-brand-gold focus:border-brand-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <select
                        required
                        value={currentProduct.category || 'Shoes'}
                        onChange={e => setCurrentProduct({...currentProduct, category: e.target.value as Category})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-brand-gold focus:border-brand-gold outline-none"
                      >
                        <option value="Shoes">Shoes</option>
                        <option value="Bags">Bags</option>
                        <option value="Clothes">Clothes</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                      <div className="flex gap-2">
                        <input
                          type="url"
                          required
                          value={currentProduct.imageUrl || ''}
                          onChange={e => setCurrentProduct({...currentProduct, imageUrl: e.target.value})}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-sm focus:ring-brand-gold focus:border-brand-gold outline-none"
                          placeholder="https://..."
                        />
                        <div className="w-10 h-10 border border-gray-300 rounded-sm flex items-center justify-center bg-gray-50 overflow-hidden">
                          {currentProduct.imageUrl ? (
                            <img src={currentProduct.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon size={20} className="text-gray-400" />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        required
                        rows={3}
                        value={currentProduct.description || ''}
                        onChange={e => setCurrentProduct({...currentProduct, description: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-brand-gold focus:border-brand-gold outline-none resize-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setCurrentProduct({});
                      }}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-sm hover:bg-gray-50 transition-colors text-sm font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-brand-gold text-white rounded-sm hover:bg-brand-gold-light hover:text-gray-900 transition-colors text-sm font-medium"
                    >
                      {isEditing ? 'Save Changes' : 'Add Product'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product) => (
                      <tr key={product.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img className="h-10 w-10 rounded-sm object-cover" src={product.imageUrl} alt="" referrerPolicy="no-referrer" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{product.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-brand-pink/20 text-gray-800">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ₦{product.price.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleEdit(product)}
                            className="text-brand-gold hover:text-brand-gold-light mr-4"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {products.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                          No products found. Add some products to get started.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 max-w-2xl">
            <h2 className="text-xl font-serif mb-6">About Us Page Settings</h2>
            <form onSubmit={handleSaveSettings} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Founder / Owner Image URL
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="url"
                      required
                      value={newAboutImage}
                      onChange={e => setNewAboutImage(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-brand-gold focus:border-brand-gold outline-none"
                      placeholder="https://..."
                    />
                    <p className="mt-2 text-xs text-gray-500">
                      This image will be displayed prominently on the "About Us" page.
                    </p>
                  </div>
                  <div className="w-32 h-32 border border-gray-300 rounded-sm flex items-center justify-center bg-gray-50 overflow-hidden flex-shrink-0">
                    {newAboutImage ? (
                      <img src={newAboutImage} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <ImageIcon size={32} className="text-gray-400" />
                    )}
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <button
                  type="submit"
                  className="px-6 py-2 bg-brand-gold text-white rounded-sm hover:bg-brand-gold-light hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  Save Settings
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

