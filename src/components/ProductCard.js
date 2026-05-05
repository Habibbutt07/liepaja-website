import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import ImageWithFallback from './ImageWithFallback';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart, getAllCategories } = useStore();
  const categories = getAllCategories();
  const category = categories.find(cat => cat.id === product.category_id);
  const categoryName = category?.name || 'Unknown';

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="product-card">
      <Link to={`/store/product/${product.id}`} className="product-card-link">
        <div className="product-card-image">
          <ImageWithFallback 
            src={product.images[0]} 
            alt={product.name}
            fallback="https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          />
          {product.old_price && (
            <span className="product-discount-badge">
              {Math.round(((product.old_price - product.price) / product.old_price) * 100)}% OFF
            </span>
          )}
          {product.is_featured && (
            <span className="product-featured-badge">Featured</span>
          )}
        </div>
        <div className="product-card-content">
          <span className="product-category">{categoryName}</span>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description.substring(0, 80)}...</p>
          <div className="product-price-container">
            <span className="product-price">€{product.price.toFixed(2)}</span>
            {product.old_price && (
              <span className="product-old-price">€{product.old_price.toFixed(2)}</span>
            )}
          </div>
          <div className="product-stock">
            {product.stock > 0 ? (
              <span className="in-stock">In Stock ({product.stock} available)</span>
            ) : (
              <span className="out-of-stock">Out of Stock</span>
            )}
          </div>
        </div>
      </Link>
      <button
        className="product-add-to-cart"
        onClick={handleAddToCart}
        disabled={product.stock === 0}
      >
        {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  );
};

export default ProductCard;

