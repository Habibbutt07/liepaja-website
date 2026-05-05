import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import { useStore } from '../context/StoreContext';
import { useLanguage } from '../context/LanguageContext';
import ShoppingCart from './ShoppingCart';
import './Header.css';

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { search, searchResults, clearSearch } = useSearch();
  const { getCartItemCount } = useStore();
  const { language, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const translations = {
    home: { lv: 'Sākums', en: 'Home' },
    about: { lv: 'Par mums', en: 'About' },
    services: { lv: 'Pakalpojumi', en: 'Services' },
    news: { lv: 'Jaunumi', en: 'News' },
    contact: { lv: 'Kontakti', en: 'Contact' },
    search: { lv: 'Meklēt...', en: 'Search...' }
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    search(query);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      navigate(searchResults[0].page);
      setSearchQuery('');
      clearSearch();
    }
  };

  const handleSearchResultClick = (page) => {
    navigate(page);
    setSearchQuery('');
    clearSearch();
    closeSideMenu();
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="header-logo">
              <NavLink to="/">
                <h1>Liepāja</h1>
              </NavLink>
            </div>
            <div className="header-actions">
              <button 
                className="language-switcher"
                onClick={toggleLanguage}
                aria-label="Change language"
                title={language === 'lv' ? 'Switch to English' : 'Pārslēgt uz latviešu'}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span>{language === 'lv' ? 'EN' : 'LV'}</span>
              </button>
              <a href="tel:+37112345678" className="header-phone">
                +371 12 345 678
              </a>
              <a href="mailto:info@liepaja.lv" className="header-email">
                info@liepaja.lv
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <button 
              className="menu-toggle" 
              onClick={toggleSideMenu}
              aria-label="Toggle side menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <form className="search-bar" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder={t(translations.search)}
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
              />
              <button type="submit" className="search-button" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
              {searchQuery && searchResults.length > 0 && (
                <div className="search-results">
                  {searchResults.slice(0, 5).map((result) => (
                    <div
                      key={result.id}
                      className="search-result-item"
                      onClick={() => handleSearchResultClick(result.page)}
                    >
                      <strong>{result.title}</strong>
                      <p>{result.content.substring(0, 60)}...</p>
                    </div>
                  ))}
                </div>
              )}
            </form>
            <ul className="nav-menu">
              <li><NavLink to="/" end>{t(translations.home)}</NavLink></li>
              <li><NavLink to="/about">{t(translations.about)}</NavLink></li>
              <li><NavLink to="/services">{t(translations.services)}</NavLink></li>
              <li><NavLink to="/news">{t(translations.news)}</NavLink></li>
              <li><NavLink to="/contact">{t(translations.contact)}</NavLink></li>
            </ul>
            <button
              className="cart-icon-button"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open shopping cart"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {getCartItemCount() > 0 && (
                <span className="cart-badge">{getCartItemCount()}</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Side Menu Drawer */}
      <div className={`side-menu-overlay ${isSideMenuOpen ? 'active' : ''}`} onClick={closeSideMenu}></div>
      <div className={`side-menu ${isSideMenuOpen ? 'active' : ''}`}>
        <div className="side-menu-header">
          <h2>Liepāja</h2>
          <button className="side-menu-close" onClick={closeSideMenu} aria-label="Close menu">
            ✕
          </button>
        </div>
        <div className="side-menu-content">
          <div className="side-menu-section">
            <NavLink to="/residents" onClick={closeSideMenu} className="side-menu-link">
              For Liepaja residents
            </NavLink>
            <NavLink to="/entrepreneurs" onClick={closeSideMenu} className="side-menu-link">
              For entrepreneurs
            </NavLink>
            <NavLink to="/guests" onClick={closeSideMenu} className="side-menu-link">
              For guests
            </NavLink>
          </div>
          <div className="side-menu-divider"></div>
          <div className="side-menu-section">
            <NavLink to="/store" onClick={closeSideMenu} className="side-menu-link">
              Liepāja Store
            </NavLink>
            <NavLink to="/news" onClick={closeSideMenu} className="side-menu-link">
              News
            </NavLink>
            <NavLink to="/procurement" onClick={closeSideMenu} className="side-menu-link">
              Procurement
            </NavLink>
            <NavLink to="/services" onClick={closeSideMenu} className="side-menu-link">
              Services A-Z
            </NavLink>
            <NavLink to="/parking" onClick={closeSideMenu} className="side-menu-link">
              🅿️ Parking
            </NavLink>
            <NavLink to="/documents" onClick={closeSideMenu} className="side-menu-link">
              Documents
            </NavLink>
            <NavLink to="/contact" onClick={closeSideMenu} className="side-menu-link">
              Contacts
            </NavLink>
            <div className="side-menu-divider"></div>
            <NavLink to="/store/admin/login" onClick={closeSideMenu} className="side-menu-link admin-link">
              🔐 Store Admin Login
            </NavLink>
          </div>
        </div>
      </div>
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;

