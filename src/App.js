import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import { StoreProvider } from './context/StoreContext';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ServiceAccess from './pages/ServiceAccess';
import Parking from './pages/Parking';
import News from './pages/News';
import Contact from './pages/Contact';
import Residents from './pages/Residents';
import Entrepreneurs from './pages/Entrepreneurs';
import Guests from './pages/Guests';
import Procurement from './pages/Procurement';
import Documents from './pages/Documents';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import StoreAdmin from './pages/StoreAdmin';
import AdminLogin from './pages/AdminLogin';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <SearchProvider>
        <StoreProvider>
          <AuthProvider>
            <Router>
              <div className="App">
                <Header />
                <main>
                  <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/access" element={<ServiceAccess />} />
                  <Route path="/services/:serviceId" element={<ServiceDetail />} />
                  <Route path="/parking" element={<Parking />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/residents" element={<Residents />} />
                  <Route path="/entrepreneurs" element={<Entrepreneurs />} />
                  <Route path="/guests" element={<Guests />} />
                  <Route path="/procurement" element={<Procurement />} />
                  <Route path="/documents" element={<Documents />} />
                  <Route path="/store" element={<Store />} />
                  <Route path="/store/product/:id" element={<ProductDetail />} />
                  <Route path="/store/checkout" element={<Checkout />} />
                  <Route path="/store/order-success/:orderId" element={<OrderSuccess />} />
                  <Route path="/store/admin/login" element={<AdminLogin />} />
                  <Route 
                    path="/store/admin" 
                    element={
                      <ProtectedRoute>
                        <StoreAdmin />
                      </ProtectedRoute>
                    } 
                  />
                  </Routes>
                </main>
                <Footer />
                <Chatbot />
              </div>
            </Router>
          </AuthProvider>
        </StoreProvider>
      </SearchProvider>
    </LanguageProvider>
  );
}

export default App;

