import React from 'react';
import { FiInstagram } from 'react-icons/fi';
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
          K I J K J E&nbsp;&nbsp; A C H T E R&nbsp;&nbsp; D E&nbsp;&nbsp; S C H E R M E N?
          <br />
          V O L G&nbsp;&nbsp; O N S&nbsp;&nbsp; O P I N S T A G R A M&nbsp;&nbsp; @ G R O O T S D E S I G N
        </h2>
        
        <div className="instagram-grid">
          <img src="/images/1.jpg" alt="Instagram post" />
          <img src="/images/2.jpg" alt="Instagram post" />
          <img src="/images/3.jpg" alt="Instagram post" />
        </div>
        
        <button className="instagram-button">
          <FiInstagram className="instagram-icon" />
          VOLG ONS OP INSTAGRAM
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default InspirationSection;