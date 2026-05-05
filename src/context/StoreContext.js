import React, { createContext, useContext, useState, useEffect } from 'react';
import { products, categories, getCategoryById } from '../data/storeProducts';

const StoreContext = createContext();

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return context;
};

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('liepaja_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error loading cart:', e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('liepaja_cart', JSON.stringify(cart));
  }, [cart]);

  // Add to cart
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Get cart total
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Get cart item count
  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Search products
  const searchProducts = (query) => {
    if (!query || query.trim() === '') return [];
    const lowerQuery = query.toLowerCase().trim();
    return products.filter(product =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      getCategoryById(product.category_id)?.name.toLowerCase().includes(lowerQuery)
    );
  };

  // Get products by category
  const getProductsByCategory = (categoryId) => {
    if (!categoryId) return products;
    return products.filter(product => product.category_id === categoryId);
  };

  // Get featured products
  const getFeaturedProducts = () => {
    return products.filter(product => product.is_featured);
  };

  // Get product by id
  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };

  // Create order
  const createOrder = (orderData) => {
    const order = {
      id: Date.now(),
      ...orderData,
      items: [...cart],
      total: getCartTotal(),
      status: 'pending',
      created_at: new Date().toISOString()
    };
    setOrders(prev => [...prev, order]);
    clearCart();
    return order;
  };

  // Get all products
  const getAllProducts = () => {
    return products;
  };

  // Get all categories
  const getAllCategories = () => {
    return categories;
  };

  const value = {
    products,
    categories,
    cart,
    orders,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
    searchProducts,
    getProductsByCategory,
    getFeaturedProducts,
    getProductById,
    createOrder,
    getAllProducts,
    getAllCategories
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};

