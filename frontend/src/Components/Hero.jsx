import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="search">
      <div className="hero-content">
        <h1>Where To?</h1>
        <form className="search-bar">
          <div className="search-field">
            <input type="text" placeholder="Search by city, hotel, or neighborhood" required />
            <button type="button" className="near-me-btn">Near Me</button>
          </div>
          <div className="date-room-field">
            <input type="text" placeholder="3rd December 2024" readOnly />
            <input type="text" placeholder="1 Guest" readOnly />
          </div>
          <button type="submit" className="btn-search">Search</button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
