import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import ImageWithFallback from './ImageWithFallback';
import './ShoppingCart.css';

const ShoppingCart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useStore();

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className="shopping-cart">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="cart-close" onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty</p>
            <Link to="/store" className="btn" onClick={onClose}>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <ImageWithFallback 
                    src={item.images[0]} 
                    alt={item.name}
                    fallback="https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">€{item.price.toFixed(2)}</p>
                    <div className="cart-item-quantity">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <strong>Total: €{getCartTotal().toFixed(2)}</strong>
              </div>
              <Link to="/store/checkout" className="btn btn-checkout" onClick={onClose}>
                Proceed to Checkout
              </Link>
              <button className="btn btn-secondary" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;

