import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with the city administration</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <div className="info-card">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-text">
                    <h3>Address</h3>
                    <p>Rožu iela 6<br />Liepāja, LV-3401<br />Latvia</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-text">
                    <h3>Phone</h3>
                    <p>+371 12 345 678</p>
                    <p>+371 12 345 679 (Fax)</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-text">
                    <h3>Email</h3>
                    <p>info@liepaja.lv</p>
                    <p>services@liepaja.lv</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">🕒</div>
                  <div className="info-text">
                    <h3>Office Hours</h3>
                    <p>Monday - Friday: 8:00 - 17:00</p>
                    <p>Saturday: 9:00 - 13:00</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="map-section">
                <h2>Find Us</h2>
                <div className="map-placeholder">
                  <p>📍 Map Location</p>
                  <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '10px' }}>
                    Interactive map would be displayed here
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              {submitted ? (
                <div className="success-message">
                  <p>✓ Thank you! Your message has been sent successfully.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


