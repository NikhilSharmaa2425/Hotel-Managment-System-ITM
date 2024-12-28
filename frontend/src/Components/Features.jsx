import React from 'react';
import '../styles/Features.css';
const Features = () => {
  return (
    <section className="highlight-section">
      <div className="highlight-container">
        <div className="highlight-text">
          <h2>Find and book your perfect stay</h2>
        </div>
        <div className="highlight-cards">
          <div className="highlight-card">
            <p>Earn rewards on every night you stay</p>
          </div>
          <div className="highlight-card">
            <p>Save more with affordable Prices</p>
          </div>
          <div className="highlight-card">
            <p>Free cancellation options if plans change</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
