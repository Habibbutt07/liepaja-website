import React from 'react';
import ImageWithFallback from '../components/ImageWithFallback';
import { fallbackImages } from '../utils/imageLoader';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>About Liepaja</h1>
          <p>Discover our city's rich history and vibrant community</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our City</h2>
              <p>
                Liepaja is a beautiful coastal city located in western Latvia, on the Baltic Sea coast. 
                With a population of over 70,000 residents, it is the third-largest city in Latvia and 
                serves as an important cultural, economic, and administrative center in the region.
              </p>
              <p>
                The city is known for its rich history, dating back to the 13th century, and its unique 
                cultural heritage. Liepaja has been called "The City Where the Wind is Born" due to its 
                coastal location and constant sea breezes.
              </p>
              <h3>History</h3>
              <p>
                Liepaja was first mentioned in historical documents in 1253. Throughout its history, 
                the city has been influenced by various cultures and has played an important role in 
                the region's development. The city's architecture reflects its diverse history, with 
                buildings ranging from medieval structures to modern developments.
              </p>
              <h3>Culture & Heritage</h3>
              <p>
                Liepaja is renowned for its vibrant cultural scene. The city hosts numerous festivals, 
                concerts, and cultural events throughout the year. The Liepaja Symphony Orchestra is 
                one of the oldest orchestras in the Baltic states, and the city is home to several 
                museums, galleries, and cultural institutions.
              </p>
              <h3>Natural Beauty</h3>
              <p>
                The city's location on the Baltic Sea provides residents and visitors with beautiful 
                beaches, parks, and natural areas. The Liepaja Beach is one of the most popular 
                destinations in the region, offering pristine sand and clear waters.
              </p>
            </div>
            <div className="about-images">
              <div className="about-image">
                <ImageWithFallback 
                  src={fallbackImages.cityView1}
                  alt="Liepaja City"
                  fallback="/images/city-view-1.jpg"
                />
              </div>
              <div className="about-image">
                <ImageWithFallback 
                  src={fallbackImages.cityView2}
                  alt="Liepaja Architecture"
                  fallback="/images/city-view-2.jpg"
                />
              </div>
              <div className="about-image">
                <ImageWithFallback 
                  src={fallbackImages.cityView3}
                  alt="Liepaja Nature"
                  fallback="/images/city-view-3.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <h2 className="section-title">City Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">70,000+</div>
              <div className="stat-label">Residents</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1253</div>
              <div className="stat-label">Year Founded</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">60+</div>
              <div className="stat-label">Cultural Events/Year</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Parks & Gardens</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


