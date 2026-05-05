import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import ImageWithFallback from '../components/ImageWithFallback';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById, getAllCategories, addToCart } = useStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = getProductById(id);
  const categories = getAllCategories();

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/store" className="btn">Back to Store</Link>
      </div>
    );
  }

  const category = categories.find(cat => cat.id === product.category_id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Show notification or redirect
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/store">Store</Link>
          {category && (
            <>
              <span>/</span>
              <Link to={`/store?category=${category.slug}`}>{category.name}</Link>
            </>
          )}
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="product-detail-content">
          <div className="product-images">
            <div className="product-main-image">
              <ImageWithFallback 
                src={product.images[selectedImage]} 
                alt={product.name}
                fallback="https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              />
              {product.old_price && (
                <span className="product-discount-badge">
                  {Math.round(((product.old_price - product.price) / product.old_price) * 100)}% OFF
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="product-thumbnails">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <ImageWithFallback 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      fallback="https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="product-info">
            <span className="product-category">{category?.name || 'Uncategorized'}</span>
            <h1>{product.name}</h1>
            <div className="product-price-container">
              <span className="product-price">€{product.price.toFixed(2)}</span>
              {product.old_price && (
                <span className="product-old-price">€{product.old_price.toFixed(2)}</span>
              )}
            </div>
            <div className="product-stock-info">
              {product.stock > 0 ? (
                <span className="in-stock">✓ In Stock ({product.stock} available)</span>
              ) : (
                <span className="out-of-stock">✗ Out of Stock</span>
              )}
            </div>
            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            {product.stock > 0 && (
              <div className="product-actions">
                <div className="quantity-selector">
                  <label>Quantity:</label>
                  <div className="quantity-controls">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="1"
                      max={product.stock}
                      value={quantity}
                      onChange={handleQuantityChange}
                    />
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      disabled={quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className="btn btn-add-to-cart" onClick={handleAddToCart}>
                  Add to Cart
                </button>
                <button className="btn btn-buy-now" onClick={() => {
                  addToCart(product, quantity);
                  navigate('/store/checkout');
                }}>
                  Buy Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

