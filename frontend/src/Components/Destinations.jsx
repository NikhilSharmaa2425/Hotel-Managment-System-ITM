import React from 'react';
import '../styles/Destinations.css';
import mountain from "../assets/mountain.jpg"
const Destinations = () => {
  return (
    <section className="trending-destinations">
      <h2>Explore stays in trending destinations</h2>
      <div className="destinations">
        <div className="destination-card">
          <img src={mountain} alt="Sawai Madhopur" />
          <div className="destination-info">
            <h3>Sawai Madhopur</h3>
            <p>India</p>
          </div>
        </div>
        <div className="destination-card">
          <img src={mountain} alt="Mumbai" />
          <div className="destination-info">
            <h3>Mumbai</h3>
            <p>India</p>
          </div>
        </div>
        <div className="destination-card">
          <img src={mountain} alt="Greater Noida" />
          <div className="destination-info">
            <h3>Greater Noida</h3>
            <p>India</p>
          </div>
        </div>
        <div className="destination-card">
          <img src={mountain} alt="Las Vegas" />
          <div className="destination-info">
            <h3>Las Vegas</h3>
            <p>United States of America</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
