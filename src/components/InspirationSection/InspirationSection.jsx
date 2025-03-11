import React from 'react';
import { FiInstagram, FiExternalLink} from 'react-icons/fi';
import '../InspirationSection/InspirationSection.css';
import Footer from '../Footer/Footer';
const InspirationSection = () => {
  return (
    <div className="new-section">
      <div className="inspiration-section">
        <div className="inspiration-content">
          <h2 className="inspiration-title">VOEL JE DE INSPIRATIE AL BORRELEN?</h2>
          <p className="inspiration-subtitle">
            Het is groots tijd om jouw droominterieur waar te maken.
            <br />
            Laten we kennismaken!
          </p>
          
          <div className="contact-boxes">
            <div className="contact-box">
              +31(0)61446327
            </div>
            <a href="#contact" className="contact-box">
              CONTACTFORMULIER
            </a>
            <a href="mailto:ilse@grootsdesign.com" className="contact-box">
              ilse@grootsdesign.com
            </a>
          </div>
        </div>
      </div>
      <div className="instagram-section">
        <h2 className="instagram-title">
          KIJKJE ACHTER DE SCHERMEN?
          <br />
          VOLG ONS OP INSTAGRAM @GROOTSDESIGN
        </h2>
        
        <div className="instagram-grid">
          {['/images/1.jpg', '/images/2.jpg', '/images/3.jpg'].map((imgSrc, index) => (
              <a href="https://www.instagram.com/grootsdesign" className="instagram-image-container">
              <div className="instagram-icon-overlay">
                <FiExternalLink />
              </div>
              <img src={imgSrc} alt="Instagram post" />
            </a>
          ))}
        </div>
        
        <a href="https://www.instagram.com/grootsdesign">
          <button className="instagram-button">
            <FiInstagram className="instagram-icon" />
            VOLG ONS OP INSTAGRAM
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default InspirationSection;