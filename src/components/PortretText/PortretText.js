import React from 'react';
import { Link } from 'react-router-dom';
import './PortretText.css';

const PortretText = ({ title, paragraphs, buttonText, imageSrc }) => {
    return (
      <div className="portret-text-block">
        <div className="portret-text-image">
          <img src={imageSrc} alt="Portret" />
        </div>
        <div className="portret-text-content">
          <h2 className="portret-text-title" dangerouslySetInnerHTML={{ __html: title }} />
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="portret-text-paragraph" dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
          {buttonText && (
            <Link to="/about" className="portret-text-button">{buttonText}</Link>
          )}
        </div>
      </div>
    );
  };
  
  export default PortretText;