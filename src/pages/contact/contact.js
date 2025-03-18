import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../contact/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validatePhone = (phone) => {
    const dutchPhoneRegex = /^(06)[-\s]?\d{8}$/;
    return dutchPhoneRegex.test(phone);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.name) newErrors.name = true;
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = true;
    if (!formData.phone || !validatePhone(formData.phone)) newErrors.phone = true;
    if (!formData.message) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xdkekyvq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New contact from ${formData.name}`
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setErrors({});
        
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact-page">
      <Header />
      <div className="contact-banner">
        <img src="/images/AboutFiller.png" alt="Contact banner" />
      </div>

      {showSuccess && (
        <div className="success-popup">
          <p>Bedankt! Je bericht is succesvol verzonden.</p>
        </div>
      )}

      <div className="contact-content">
        <div className="contact-info-container">
          <div className="contact-info">
            <h1>Laten we samen jouw ruimte <br /> transformeren!</h1>
            <div className="spacer-50" />
            <p>
              Benieuwd wat GrootsDesign voor jou kan betekenen?
              Of je nu je woning, kantoorruimte of gastenverblijf een
              compleet nieuw karakter wilt geven, ik denk graag met
              je mee.
            </p>
            <div className="spacer-50" />
            <p>
              Neem contact op via e-mail, telefoon of stuur een
              WhatsApp-berichtje, en ik reageer zo snel mogelijk.
            </p>
            <div className="spacer-50" />
            <p>
              +31(0)61446327 <br />
              ilse@grootsdesign.com
            </p>
            <div className="spacer-50" />
            <p>
              KvK: 95130632 <br />
              Btw-id: NL005132315B56
            </p>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
             <div className="form-group">
              <label>NAAM *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={errors.name ? 'error' : ''}
                placeholder="Jouw naam"
              />
              {errors.name && <span className="error-message">Dit veld is verplicht</span>}
            </div>

            <div className="form-group">
              <label>E-MAIL ADRES *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={errors.email ? 'error' : ''}
                placeholder="voorbeeld@email.com"
              />
              {errors.email && <span className="error-message">Voer een geldig e-mailadres in</span>}
            </div>

            <div className="form-group">
              <label>TELEFOONNUMMER *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={errors.phone ? 'error' : ''}
                placeholder="06-12345678"
                pattern="(06)[-\s]?\d{8}"
              />
              {errors.phone && (
                <span className="error-message">
                  Voer een geldig Nederlands telefoonnummer in (06-12345678)
                </span>
              )}
            </div>
            <div className="spacer-50" />

            <div className="form-group">
              <label>BERICHT *</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={errors.message ? 'error' : ''}
                style={{ height: '300px' }}
              />
              {errors.message && <span className="error-message">Dit veld is verplicht</span>}
            </div>
            <div className="spacer-50" />

            <button type="submit" className="submit-button">
              VERSTUREN
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;