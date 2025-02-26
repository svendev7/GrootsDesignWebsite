import React from 'react';
import { motion, useInView } from 'framer-motion';
import '../home/home.css';
import ImageSlider from '../../components/ImageSlider/imageSlider';
import ReviewsCarousel from '../../components/ReviewsCarousel/ReviewsCarousel';
import InspirationSection from '../../components/InspirationSection/InspirationSection';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
function Home() {
  const textSectionRef = React.useRef(null);
  const reviewsBlockRef = React.useRef(null);

  const isTextSectionInView = useInView(textSectionRef, {
    once: true,
    rootMargin: '-100px 0px', 
  });

  const isReviewsBlockInView = useInView(reviewsBlockRef, {
    once: true,
    rootMargin: '-100px 0px', 
  });
  return (
    <div className="home">
      <Header />

      <div className="image-container">
        <div className="image-overlay"></div>
        <img
          src="/images/LOGO WIT .png" 
          alt="Overlay"
          className="overlay-image"
        />
      </div>

      <motion.div
        ref={textSectionRef}
        className="text-section"
        initial={{ opacity: 0, y: 100 }}
        animate={isTextSectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.25, ease: "easeOut" }}
      >
        <h2>S A M E N&nbsp;&nbsp;&nbsp;G R O O T S&nbsp;&nbsp;&nbsp;D R O M E N, <br />S A M E N&nbsp;&nbsp;&nbsp;G R O O T S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>C R E Ë R E N.</span></h2>
        <div className="text-blocks">
          <div className="text-block">
            <p><span className="span1">Bij GrootsDesign draait alles om het creëren van een interieur dat voelt als thuis - uniek, inspirerend en helemaal van jou.</span> je woning is meer dan een verzameling ruimtes; het is een plek waar je tot rust komt, oplaadt en geniet. Daarom geloven wij in ontwerpen die niet alleen mooi zijn, maar vooral perfect aansluiten bij jouw levenstijl en persoonlijkheid</p>
            </div>
            <div className="text-block">
              <p>Of het nu gaat om het kiezen van kleuren, materialen of het realiseren van maatwerkoplossingen, bij GrootsDesign gaat het altijd om een harmonieus totaalplaatje.</p>
            </div>
          </div>
          <div className="text-blocks-second-row">
            <div className="text-block1">
              <p>We vertalen jouw wensen naar een interieur waarin stijl en comfort hand in hand gaan. Met aandacht voor de kleinste details en een passie voor kwaliteit ontwerpen we ruimtes die verrassen en blijven inspireren.</p>
            </div>
            <div className="text-block2">
              <p>Samen pakken we groots uit en zorgen we voor een interieur dat jouw verhaal vertelt. Van het eerste idee tot de laatste afwerking ben je verzekerd van een persoonlijke aanpak, zodat het eindresultaat niet alleen aansluit bij je verwachtingen, maar deze overtreft. 
              <span className="span2">Dit is jouw ruimte, groots gemaakt.</span></p>
            </div>
          </div>
        </motion.div>
        <div className="homepage-content">
          <div className="projecten-block">
            <h2 className="projecten-title">P R O J E C T E N</h2>
            <ImageSlider />
          </div>
            <motion.div
              ref={reviewsBlockRef}
              className="reviews-block"
              initial={{ opacity: 0, x: 100 }}
              animate={isReviewsBlockInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.25, ease: "easeOut" }}
            >
            <h2 className="reviews-title">R E V I E W S</h2>
            <ReviewsCarousel />
          </motion.div>
        <div className="watwedoen-block">
          <div className="watwedoen-image">
            <img src="/images/ilse.png" alt="Wat We Doen" />
          </div>
          <div className="watwedoen-content">
            <h2 className="watwedoen-title">
              "W A A R O M&nbsp;&nbsp; I K&nbsp;&nbsp; G E L O O F&nbsp;&nbsp; I N <br /> G R O O T S&nbsp;&nbsp; W O N E N"
            </h2>
            <p className="watwedoen-text">
              Ik ben Ilse Groot, het gezicht achter GrootsDesign. Al van jongs af aan ben ik gefascineerd door de impact
              die een goed doordacht interieur kan hebben op hoe je je voelt en functioneert. Voor mij is een interieur
              veel meer dan alleen een verzameling meubels en kleuren; het is een vertaling van wie je bent en hoe je
              wilt leven. 
              <span className="span1"> Dat is de filosofie die ik met GrootsDesign nastreef – het creëren van ruimtes die jouw verhaal vertellen en waarin jij je helemaal thuis voelt.</span>
            </p>
            <p className="watwedoen-text">
              Met een achtergrond in interieurontwerp en jarenlange ervaring in de zakelijke en particuliere markt, weet
              ik precies hoe ik jouw wensen kan omzetten in een interieur dat niet alleen esthetisch prachtig is, maar
              ook praktisch en toekomstbestendig. Mijn kracht ligt in het combineren van jouw unieke stijl met slimme,
              verrassende oplossingen die het maximale uit jouw ruimte halen.
            </p>
            <p className="watwedoen-text">
              Wat mij onderscheidt? Mijn persoonlijke aanpak. Voor mij begint een sterk ontwerp met het leren kennen van
              jou. Wie ben je? Wat zijn je wensen, dromen en uitdagingen? Alleen door echt te luisteren en een klik te
              creëren, kan ik een ontwerp maken dat niet alleen mooi is, maar ook perfect aansluit bij jouw leven.
            </p>
            <p className="watwedoen-text">
              Klaar om samen groots uit te pakken? <span className="span1">Laat me je inspireren en begeleiden naar een interieur dat echt bij jou past.</span>
            </p>
            <Link to="/about" className="watwedoen-button">WAT WE DOEN</Link>
          </div>
        </div>
        <InspirationSection />
      </div>
    </div>
  );
}
export default Home;
