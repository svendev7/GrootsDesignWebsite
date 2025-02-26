import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { motion, useInView } from 'framer-motion';
import '../about/about.css';
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
        
      <Footer />
    </div>
  );
};

export default About;