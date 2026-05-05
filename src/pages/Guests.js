import React from 'react';
import './Guests.css';

const Guests = () => {
  return (
    <div className="guests-page">
      <section className="page-hero">
        <div className="container">
          <h1>For Guests</h1>
          <p>Welcome to Liepaja - Information for visitors and tourists</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            <div className="card">
              <div className="card-icon">🗺️</div>
              <h3>Tourist Information</h3>
              <p>Discover the best attractions, landmarks, and activities in Liepaja.</p>
              <ul>
                <li>Tourist attractions</li>
                <li>City maps and guides</li>
                <li>Walking tours</li>
                <li>Cultural sites</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-icon">🏖️</div>
              <h3>Beaches & Nature</h3>
              <p>Explore Liepaja's beautiful beaches and natural areas.</p>
              <ul>
                <li>Beach information</li>
                <li>Parks and gardens</li>
                <li>Nature trails</li>
                <li>Outdoor activities</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-icon">🎭</div>
              <h3>Culture & Events</h3>
              <p>Experience Liepaja's vibrant cultural scene and events.</p>
              <ul>
                <li>Museums and galleries</li>
                <li>Concerts and festivals</li>
                <li>Theater performances</li>
                <li>Cultural events calendar</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-icon">🍽️</div>
              <h3>Dining & Accommodation</h3>
              <p>Find the best restaurants, cafes, and places to stay.</p>
              <ul>
                <li>Restaurant guide</li>
                <li>Hotels and accommodations</li>
                <li>Local cuisine</li>
                <li>Nightlife</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-icon">🚗</div>
              <h3>Transportation</h3>
              <p>Getting around Liepaja and travel information.</p>
              <ul>
                <li>Public transportation</li>
                <li>Car rental</li>
                <li>Parking information</li>
                <li>Airport connections</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-icon">ℹ️</div>
              <h3>Visitor Services</h3>
              <p>Additional services and information for visitors.</p>
              <ul>
                <li>Tourist information center</li>
                <li>Emergency services</li>
                <li>Currency exchange</li>
                <li>Language assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guests;


