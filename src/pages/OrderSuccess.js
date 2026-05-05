import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import ImageWithFallback from '../components/ImageWithFallback';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const { orderId } = useParams();
  const { orders } = useStore();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Try to find order from state or orders list
    const foundOrder = orders.find(o => o.id === parseInt(orderId));
    if (foundOrder) {
      setOrder(foundOrder);
    } else {
      // If not found, create a mock order for display
      setOrder({
        id: orderId,
        total: 0,
        items: [],
        customer: { name: 'Customer', email: 'customer@example.com' },
        created_at: new Date().toISOString()
      });
    }
  }, [orderId, orders]);

  if (!order) {
    return (
      <div className="order-loading">
        <p>Loading order details...</p>
      </div>
    );
  }

  return (
    <div className="order-success-page">
      <section className="page-hero">
        <div className="container">
          <h1>Order Confirmed!</h1>
          <p>Thank you for your purchase</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="success-content">
            <div className="success-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2>Your order has been placed successfully!</h2>
            <p className="order-number">Order # {order.id}</p>
            <p className="order-message">
              We've sent a confirmation email to <strong>{order.customer?.email || 'your email'}</strong>.
              You will receive an update when your order ships.
            </p>

            <div className="order-details">
              <h3>Order Summary</h3>
              <div className="order-items-list">
                {order.items && order.items.length > 0 ? (
                  order.items.map(item => (
                    <div key={item.id} className="order-item-summary">
                      <ImageWithFallback 
                        src={item.images[0]} 
                        alt={item.name}
                        fallback="https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      />
                      <div className="order-item-details">
                        <h4>{item.name}</h4>
                        <p>Quantity: {item.quantity} × €{item.price.toFixed(2)}</p>
                      </div>
                      <span className="order-item-total">
                        €{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))
                ) : (
                  <p>No items in this order.</p>
                )}
              </div>
              <div className="order-total-summary">
                <div className="total-row">
                  <span>Total:</span>
                  <strong>€{order.total?.toFixed(2) || '0.00'}</strong>
                </div>
              </div>
            </div>

            <div className="success-actions">
              <Link to="/store" className="btn btn-primary">
                Continue Shopping
              </Link>
              <Link to="/" className="btn btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderSuccess;

