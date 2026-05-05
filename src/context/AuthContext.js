import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is logged in on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('liepaja_admin_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Error loading user:', e);
      }
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    // Demo credentials - In production, this would call an API
    const validCredentials = {
      email: 'admin@liepaja.lv',
      password: 'admin123'
    };

    if (email === validCredentials.email && password === validCredentials.password) {
      const userData = {
        id: 1,
        email: email,
        name: 'Store Administrator',
        role: 'admin',
        loginTime: new Date().toISOString()
      };
      setUser(userData);
      localStorage.setItem('liepaja_admin_user', JSON.stringify(userData));
      return { success: true, user: userData };
    } else {
      return { success: false, error: 'Invalid email or password' };
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('liepaja_admin_user');
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return user !== null;
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

