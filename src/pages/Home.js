import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';
import { fallbackImages } from '../utils/imageLoader';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Liepaja</h1>
          <p>The City Where the Wind is Born</p>
          <Link to="/about" className="btn">Learn More</Link>
        </div>
        <div className="hero-image">
          <ImageWithFallback 
            src={fallbackImages.hero}
            alt="Liepaja City"
            fallback="/images/hero-liepaja.jpg"
          />
        </div>
      </section>

      {/* Quick Services */}
      <section className="section quick-services">
        <div className="container">
          <h2 className="section-title">Quick Services</h2>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Document Services</h3>
              <p>Get official documents, certificates, and permits quickly and efficiently.</p>
              <Link to="/services" className="btn btn-secondary">View Services</Link>
            </div>
            <div className="card">
              <div className="card-icon">🏛️</div>
              <h3>City Information</h3>
              <p>Learn about our city's history, culture, and current initiatives.</p>
              <Link to="/about" className="btn btn-secondary">Learn More</Link>
            </div>
            <div className="card">
              <div className="card-icon">📰</div>
              <h3>Latest News</h3>
              <p>Stay updated with the latest news and announcements from the city.</p>
              <Link to="/news" className="btn btn-secondary">Read News</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-preview-content">
            <div className="about-preview-text">
              <h2>About Liepaja</h2>
              <p>
                Liepaja is a beautiful coastal city located in western Latvia, known for its rich history, 
                cultural heritage, and stunning natural beauty. The city is famous for its beautiful beaches, 
                historic architecture, and vibrant cultural scene.
              </p>
              <p>
                With a population of over 70,000 residents, Liepaja offers a perfect blend of urban amenities 
                and natural landscapes. The city is committed to sustainable development and providing excellent 
                services to its citizens.
              </p>
              <Link to="/about" className="btn">Read More About Us</Link>
            </div>
            <div className="about-preview-image">
              <ImageWithFallback 
                src={fallbackImages.architecture}
                alt="Liepaja Architecture"
                fallback="/images/architecture-1.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="section news-preview">
        <div className="container">
          <h2 className="section-title">Latest News</h2>
          <div className="grid grid-3">
            <article className="card">
              <div className="news-image">
                <ImageWithFallback 
                  src={fallbackImages.news1}
                  alt="News"
                  fallback="/images/news-1.jpg"
                />
              </div>
              <div className="news-content">
                <span className="news-date">December 10, 2024</span>
                <h3>New Community Center Opens</h3>
                <p>The city has opened a new state-of-the-art community center in the heart of downtown...</p>
                <Link to="/news" className="btn btn-secondary">Read More</Link>
              </div>
            </article>
            <article className="card">
              <div className="news-image">
                <ImageWithFallback 
                  src={fallbackImages.news2}
                  alt="News"
                  fallback="/images/news-2.jpg"
                />
              </div>
              <div className="news-content">
                <span className="news-date">December 8, 2024</span>
                <h3>Winter Festival Announcement</h3>
                <p>Join us for the annual Winter Festival featuring local artists, food vendors, and live music...</p>
                <Link to="/news" className="btn btn-secondary">Read More</Link>
              </div>
            </article>
            <article className="card">
              <div className="news-image">
                <ImageWithFallback 
                  src={fallbackImages.news3}
                  alt="News"
                  fallback="/images/news-3.jpg"
                />
              </div>
              <div className="news-content">
                <span className="news-date">December 5, 2024</span>
                <h3>Infrastructure Improvements</h3>
                <p>Major road improvements and infrastructure upgrades are planned for the coming year...</p>
                <Link to="/news" className="btn btn-secondary">Read More</Link>
              </div>
            </article>
          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link to="/news" className="btn">View All News</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


