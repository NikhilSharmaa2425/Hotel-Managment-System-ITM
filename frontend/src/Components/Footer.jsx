import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer-links">
      <h3>HMS Hotels</h3>
      <div class="footer-columns">
        <ul>
          <li><a href="#">Hotels near me</a></li>
          <li><a href="#">Hotels in Manali</a></li>
          <li><a href="#">Hotels in Nainital</a></li>
          <li><a href="#">Hotels in Mount Abu</a></li>
          <li><a href="#">Hotels in Agra</a></li>
          <li><a href="#">Hotels in Haridwar</a></li>
        </ul>
        <ul>
          <li><a href="#">Hotels in Goa</a></li>
          <li><a href="#">Hotels in Udaipur</a></li>
          <li><a href="#">Hotels in Lonavala</a></li>
          <li><a href="#">Hotels in Kodaikanal</a></li>
          <li><a href="#">Hotels in Gangtok</a></li>
          <li><a href="#">Hotels in Kolkata</a></li>
        </ul>
        <ul>
          <li><a href="#">Hotels in Puri</a></li>
          <li><a href="#">Hotels in Mussoorie</a></li>
          <li><a href="#">Hotels in Munnar</a></li>
          <li><a href="#">Hotels in Hyderabad</a></li>
          <li><a href="#">Hotels in Coorg</a></li>
          <li><a href="#">Hotels in Ahmedabad</a></li>
        </ul>
        <ul>
          <li><a href="#">Hotels in Mahabaleshwar</a></li>
          <li><a href="#">Hotels in Pondicherry</a></li>
          <li><a href="#">Hotels in Bangalore</a></li>
          <li><a href="#">Hotels in Pune</a></li>
          <li><a href="#">Hotels in Chennai</a></li>
          <li><a href="#">Hotels in Shillong</a></li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="footer-columns footer-social">
      <a href="#" class="social-icon"><FaFacebookF /></a>
      <a href="#" class="social-icon"><CiTwitter /></a>
      <a href="#" class="social-icon"><FaInstagram /></a>
      <a href="#" class="social-icon"><FaYoutube /></a>
      <a href="#" class="social-icon"><FaPinterestP /></a>
      <button type="submit" class="btn-search">List Your Property</button>
    </div>
  </footer>
  );
};

export default Footer;
