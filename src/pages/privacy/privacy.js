import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <Header />
      <div className="privacy-container">
        <h1>Privacybeleid GrootsDesign</h1>
        
        <div className="section-spacer" />
        <p> GrootsDesign, gevestigd in Zeist, respecteert jouw privacy en gaat zorgvuldig om met persoonsgegevens die je aan 
            ons verstrekt. Dit privacybeleid legt uit welke gegevens we verzamelen, waarom we dat doen, en hoe we je gegevens 
            beschermen.</p>
        <div className="section-spacer" />
        <h2>1. Persoonsgegevens die we verwerken</h2>
        <p>GrootsDesign verwerkt persoonsgegevens die je zelf verstrekt via onze website of bij contact met ons. Dit kunnen de 
        volgende gegevens zijn:</p>
        <div className="section-spacer" />
        <p>
        • Voor- en achternaam <br />
        • Adresgegevens <br />
        • E-mailadres <br />
        • Telefoonnummer <br />
        • Locatiegegevens (indien van toepassing) <br />
        • Gegevens over je communicatie met ons <br />
        </p>

        <div className="section-spacer" />
        <h2 className="brown-title">2. Doelen van de verwerking</h2>
        <p>
        We gebruiken je gegevens voor de volgende doeleinden: 
        <div className="section-spacer" />
        • Communicatie over onze diensten en projecten <br />
        • Het verwerken van aanvragen of afspraken <br />
        • Je te informeren over onze diensten of wijzigingen <br />
        • Het uitvoeren van onze dienstverlening en administratie <br />
        </p>
        <div className="section-spacer" />
        <h2 className="brown-title">3.  Bewaartermijn van persoonsgegevens</h2>
        <p>
        We bewaren je gegevens niet langer dan noodzakelijk is voor de doeleinden waarvoor ze zijn verzameld, of totdat je 
        aangeeft dat je geen contact meer wilt.
        </p>
        <div className="section-spacer" />
        <h2 className="brown-title">4. Delen van gegevens met derden</h2>
        <p>
        Wij delen je gegevens alleen met derden als dat nodig is voor onze dienstverlening of als wij daartoe wettelijk verplicht 
        zijn. We verkopen je gegevens nooit aan derden.
        </p>
        <div className="section-spacer" />
        <h2 className="brown-title">5. Cookies</h2>
        <p>
        GrootsDesign gebruikt functionele en analytische cookies om de website te verbeteren en jouw gebruiksgemak te 
        verhogen. Cookies kunnen eenvoudig via je browserinstellingen worden uitgeschakeld.
        </p>
        <div className="section-spacer" />
        <h2 className="brown-title">6. Jouw rechten</h2>
        <p>
        Je hebt het recht om jouw gegevens in te zien, te corrigeren of te verwijderen. Dit kun je doen door contact met ons 
        op te nemen via het e-mailadres info@grootsdesign.nl. We reageren zo snel mogelijk, uiterlijk binnen vier weken.
        </p>
        <div className="section-spacer" />
        <h2 className="brown-title">7. Beveiliging van gegevens</h2>
        <p>
        We nemen passende maatregelen om je gegevens te beschermen tegen verlies, misbruik of onbevoegde toegang. Als 
        je denkt dat je gegevens niet goed zijn beveiligd, neem dan contact met ons op.
        </p>
        <div className="section-spacer" />
        <h2 className="brown-title">8. Wijzigingen in het privacybeleid</h2>
        <p>
        GrootsDesign behoudt zich het recht voor dit privacybeleid te wijzigen. De meest actuele versie is altijd te vinden op 
        onze website.
        </p>
        <div className="section-spacer" />
        <h2 className="brown-title">Contactgegevens</h2>
        <p>
        Voor vragen of opmerkingen over dit privacybeleid kun je contact opnemen met GrootsDesign via ilse@grootsdesign.
        nl.
        </p>
        <div className="section-spacer" />
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;