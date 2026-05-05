import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import ImageWithFallback from './ImageWithFallback';
import './StoreSearchBar.css';

const StoreSearchBar = () => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const { searchProducts } = useStore();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/store?search=${encodeURIComponent(query)}`);
      setShowResults(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowResults(value.trim().length > 0);
  };

  const handleResultClick = (productId) => {
    navigate(`/store/product/${productId}`);
    setQuery('');
    setShowResults(false);
  };

  const results = query.trim() ? searchProducts(query).slice(0, 5) : [];

  return (
    <div className="store-search-bar">
      <form onSubmit={handleSearch} className="store-search-form">
        <input
          type="text"
          className="store-search-input"
          placeholder="Search products..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => setShowResults(query.trim().length > 0)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
        />
        <button type="submit" className="store-search-button" aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
        {showResults && results.length > 0 && (
          <div className="store-search-results">
            {results.map(product => (
              <div
                key={product.id}
                className="store-search-result-item"
                onClick={() => handleResultClick(product.id)}
              >
                <ImageWithFallback 
                  src={product.images[0]} 
                  alt={product.name}
                  fallback="https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                />
                <div className="store-search-result-info">
                  <strong>{product.name}</strong>
                  <span>€{product.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
            {results.length >= 5 && (
              <div className="store-search-result-more" onClick={handleSearch}>
                View all results for "{query}"
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default StoreSearchBar;

