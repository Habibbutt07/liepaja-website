import React from 'react';
import './Entrepreneurs.css';

const Entrepreneurs = () => {
  return (
    <div className="entrepreneurs-page">
      <section className="page-hero">
        <div className="container">
          <h1>For Entrepreneurs</h1>
          <p>Business services and support for entrepreneurs and businesses</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            <div className="card">
              <div className="card-icon">💼</div>
              <h3>Business Registration</h3>
              <p>Start your business in Liepaja with our comprehensive registration services.</p>
              <ul>
                <li>Company registration</li>
                <li>Business license applications</li>
                <li>Tax registration</li>
                <li>Legal entity setup</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-icon">📄</div>
              <h3>Licenses & Permits</h3>
              <p>Obtain necessary licenses and permits for your business operations.</p>
              <ul>
                <li>Trade licenses</li>
                <li>Construction permits</li>
                <li>Environmental permits</li>
                <li>Food service licenses</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-icon">💰</div>
              <h3>Financial Support</h3>
              <p>Access grants, loans, and financial assistance programs for businesses.</p>
              <ul>
                <li>Startup grants</li>
                <li>Business loans</li>
                <li>Tax incentives</li>
                <li>Investment programs</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-icon">🏗️</div>
              <h3>Economic Development</h3>
              <p>Resources and programs to help your business grow and succeed.</p>
              <ul>
                <li>Business development programs</li>
                <li>Networking events</li>
                <li>Training and workshops</li>
                <li>Market research support</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-icon">📊</div>
              <h3>Tax Information</h3>
              <p>Comprehensive tax information and support for businesses.</p>
              <ul>
                <li>Tax filing assistance</li>
                <li>Tax regulations</li>
                <li>VAT information</li>
                <li>Tax consultation</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>Business Support</h3>
              <p>Consultation and support services for entrepreneurs.</p>
              <ul>
                <li>Business consultation</li>
                <li>Legal advice</li>
                <li>Marketing support</li>
                <li>Export assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Entrepreneurs;


