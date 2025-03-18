import React from 'react';
import { FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <img 
          src="/images/LOGO ZWART.png" 
          alt="GrootsDesign Logo" 
          className="footer-logo"
        />
        
        <div className="social-icons">
          <div className="icon-wrapper">
            <FiFacebook className="social-icon" />
          </div>
          <div className="icon-wrapper">
            <FiLinkedin className="social-icon" />
          </div>
          <div className="icon-wrapper">
            <FiInstagram className="social-icon" />
          </div>
        </div>

        <div className="info-section">
          <div className="info-top">
            <span>+31(0)61446327</span>
            <span>ilse@grootsdesign.com</span>
            <span>KvK: 95130632</span>
            <span>BTW: NL005132315B56</span>
          </div>
          
          <div className="info-bottom">
            <a href="/privacybeleid" className="legal-text">PRIVACYBELEID</a>
            <a href="/algemene-voorwaarden" className="legal-text">ALGEMENE VOORWAARDEN</a>
            <span className="copyright">© 2024 GROOTSDESIGN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;