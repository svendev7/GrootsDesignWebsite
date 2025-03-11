import React, { useState } from 'react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.phone) newErrors.phone = true;
    if (!formData.message) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Submit logic here
  };

  return (
    <div className="contact-page">
      <Header />
      <div className="contact-banner">
        <img src="/images/AboutFiller.png" alt="Contact banner" />
      </div>
      
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
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">Dit veld is verplicht</span>}
            </div>
            <div className="spacer-50" />

            <div className="form-group">
              <label>E-MAIL ADRES *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">Dit veld is verplicht</span>}
            </div>
            <div className="spacer-50" />

            <div className="form-group">
              <label>TELEFOONNUMMER *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">Dit veld is verplicht</span>}
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