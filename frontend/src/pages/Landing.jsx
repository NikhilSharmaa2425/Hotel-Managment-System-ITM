import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Destinations from '../Components/Destinations';
import Footer from '../Components/Footer';
import Features from '../Components/Features';

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Destinations />
      <Footer />
    </>
  );
}



export default Landing;