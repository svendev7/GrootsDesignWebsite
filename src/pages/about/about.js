import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { motion, useInView } from 'framer-motion';
import '../about/about.css';
import InspirationSection from '../../components/InspirationSection/InspirationSection';
const About = () => {
   const aboutTextSectionRef = React.useRef(null);

   const isAboutTextSectionInView = useInView(aboutTextSectionRef, {
       once: true,
       rootMargin: '-100px 0px', 
     });
  return (
    <div className="about">
        <Header />
        <div className="image-container">
        <img
          src="/images/banner image about.png" 
        />
      </div>
      <motion.div
        ref={aboutTextSectionRef}
        className="about-text-section"
        initial={{ opacity: 0, y: 100 }}
        animate={isAboutTextSectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.25, ease: "easeOut" }}
      >
      <div className="about-text-blocks">
        <div className="about-text-block">
            <p>Jouw huis is meer dan een plek om te wonen.<span className="about-span1"> Het is waar je thuiskomt na lange dagen, waar je dromen vorm krijgen, en waar je jezelf kunt zijn </span> 
            Het moet rust en inspiratie bieden, maar ook jouw unieke
            persoonlijkheid en levensstijl weerspiegelen. Bij GrootsDesign draait
            alles om het creëren van interieurs die niet alleen mooi zijn, maar
            ook voelen als een verlengstuk van wie jij bent.</p>
            </div>
          <div className="about-text-block">
            <p>waarin jouw visie centraal staat, terwijl ik alle details verzorg. Van
            het bedenken van een stijlvol ontwerp tot de realisatie ervan – jij
            hoeft alleen maar te genieten van het resultaat.</p>
            </div>
          </div>
          <div className="about-text-blocks second-row">
            <div className="about-text-block1">
            <p>Met een bewezen achtergrond in zowel de particuliere als de zakelijke
            markt, weet ik hoe ik wensen kan omzetten in ruimtes die naadloos
            aansluiten bij jouw behoeften. Ik neem je mee in een creatief proces</p>
            </div>
          <div className="about-text-block2">
            <p><span className="about-span1">Een thuis dat GROOTS is, </span>draait niet alleen om trends of
            standaardoplossingen. Het gaat om het ontwerpen van een ruimte
            die jouw verhaal vertelt, die tot in de kleinste details klopt en waar
            je trots op bent om mensen te ontvangen. Bij GrootsDesign werk ik
            vanuit jouw wensen en maak ik jouw droominterieur werkelijkheid,
            zonder dat je wordt belast met eindeloze keuze stress.</p> 
          </div>
        </div>
        </motion.div>

      <div className="portret-section">
        <div className="portret-content">
          <div className="portret-image">
            <img src="/images/PortretAbout.png" alt="Decorative" />
          </div>
          <div className="portret-text">
            <h2>samen groots creëren</h2>
            <div className="portret-text-content">
              <p>
                Jouw huis moet voelen als een verlengstuk van wie jij bent. Daarom draait een ontwerp bij GrootsDesign niet om mijn stijl, maar om jouw wensen. Ik begeleid je stap voor stap in het proces, zodat we samen tot een interieur komen dat perfect bij je past.
              </p>
              <p>
                Of je nu graag zelf aan de slag gaat met een volledig uitgewerkt plan of liever het hele traject uit handen geeft, ik zorg ervoor dat alles tot in de puntjes klopt.
              </p>
              <p>
                Wil je tussendoor sparren of heb je hulp nodig bij de uitvoering? Ik sta naast je om je te begeleiden.
              </p>
              <p>
                Geen standaardoplossingen, geen verrassingen achteraf – alleen een interieur dat voelt als thuiskomen.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="zakelijk-section">
        <div className="zakelijk-content">
          <h2>ZAKELIJK</h2>
          <p>
            Heb jij een kantoorruimte, gastenverblijf of een andere zakelijke omgeving die een doordacht en stijlvol ontwerp verdient?
            GrootsDesign helpt je bij het creëren van een interieur dat niet alleen mooi oogt, maar ook perfect functioneert. Of het nu gaat
            om een inspirerende werkplek voor je team, een gastvrije omgeving voor bezoekers of een ruimte waar productiviteit en sfeer
            hand in hand gaan – ik vertaal jouw wensen naar een doordacht ontwerp dat past bij de identiteit van jouw bedrijf.
          </p>
          <a className="contact-button" href="/contact">
            NEEM CONTACT OP
          </a>
        </div>
      </div>
      <InspirationSection />
    </div>
  );
};

export default About;