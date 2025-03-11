import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PortretText from '../../components/PortretText/PortretText';
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
        <img src="/images/BannerAbout.png" />
        <div className="banner-title">GROOTS WONEN</div>
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
        <div className="about-portret-wrapper">
          <div className="portret-section-background">
            <PortretText
              title="SAMEN GROOTS CREËREN."
                imageSrc="/images/PortretAbout.png"
                  paragraphs={[
                    `Jouw huis moet voelen als een verlengstuk van wie jij bent. Daarom draait een ontwerp bij GrootsDesign niet om mijn stijl, maar om jouw wensen. Ik begeleid je stap voor stap in het proces, zodat we samen tot een interieur komen dat perfect bij je past.`,
                    ` Of je nu graag zelf aan de slag gaat met een volledig uitgewerkt plan of liever het hele traject uit handen geeft, ik zorg ervoor dat alles tot in de puntjes klopt. Wil je tussendoor sparren of heb je hulp nodig bij de uitvoering? Ik sta naast je om je te begeleiden.`,
                    `Geen standaardoplossingen, geen verrassingen achteraf alleen een interieur dat voelt als thuiskomen.Wat mij onderscheidt? Mijn persoonlijke aanpak. Voor mij begint een sterk ontwerp met het leren kennen van jou. Wie ben je? Wat zijn je wensen, dromen en uitdagingen? Alleen door echt te luisteren en een klik te creëren, kan ik een ontwerp maken dat niet alleen mooi is, maar ook perfect aansluit bij jouw leven.`,
                    ``
                  ]}
                  buttonText={null}
            />
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
      <div className="corners-section">
      <div className="corners-content">
        <h2 className="corners-main-title">HOE WE SAMEN AAN DE SLAG GAAN</h2>
      </div>
      <div className="corners-grid">
        <div className="corner-item">
          <div className="corner-image-container">
            <img src="/images/Koffie.png" alt="Corner 1" />
          </div>
          <h3 className="corner-title">Kennismaking</h3>
          <p className="corner-text">Tijdens een vrijblijvend gesprek bespreken 
            we jouw stijl, voorkeuren, en wat je graag wilt 
            bereiken met je interieur. Dit gesprek vormt de 
            basis voor een ontwerp dat helemaal bij je past.</p>
        </div>

        <div className="corner-item">
          <div className="corner-image-container">
            <img src="/images/Lamp.png" alt="Corner 2" />
          </div>
          <h3 className="corner-title">Het Concept</h3>
          <p className="corner-text">Ik werk een inspirerend en creatief concept 
            uit dat aansluit bij jouw wensen. Denk aan 
            moodboards, schetsen en een eerste indeling, 
            inclusief materiaal- en kleurvoorstellen.</p>
        </div>

        <div className="corner-item">
          <div className="corner-image-container">
            <img src="/images/Kaart.png" alt="Corner 3" />
          </div>
          <h3 className="corner-title">Ontwerp op Maat</h3>
          <p className="corner-text"> Het concept wordt verder uitgewerkt tot een 
            compleet interieurontwerp, inclusief details 
            zoals meubilair, verlichting en decoratie. Alles 
            wordt afgestemd op jouw budget en smaak.</p>
        </div>

        <div className="corner-item">
          <div className="corner-image-container">
            <img src="/images/Stoel.png" alt="Corner 4" />
          </div>
          <h3 className="corner-title">Realisatie</h3>
          <p className="corner-text">Samen brengen we het ontwerp tot leven. Ik 
            begeleid je bij het selecteren van de juiste 
            leveranciers en zorg ervoor dat alles soepel 
            verloopt tot aan de oplevering.</p>
        </div>
      </div>
    </div>

    <div className="full-width-bottom-image">
      <img src="/images/AboutFiller.png" alt="Bottom Image" />
    </div>
      <InspirationSection />
    </div>
  );
};

export default About;