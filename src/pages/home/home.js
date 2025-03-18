import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import '../home/home.css';
import ImageSlider from '../../components/ImageSlider/imageSlider';
import ReviewsCarousel from '../../components/ReviewsCarousel/ReviewsCarousel';
import InspirationSection from '../../components/InspirationSection/InspirationSection';
import PortretText from '../../components/PortretText/PortretText';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const textSectionRef = React.useRef(null);
  const reviewsBlockRef = React.useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



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
      <div className="video-wrapper">
        {!isVideoLoaded && (
          <div className="video-placeholder">
            <img
              src="/images/BannerImageHome.png" 
              alt="Loading image"
              className="placeholder-image"
            />
            <div className="loader"></div>
          </div>
        )}
        <video 
          className="video-bg" 
          autoPlay 
          muted 
          loop 
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/images/MainVidRev.mp4" type="video/mp4" />
        </video>
        <div className="image-overlay">
          {isVideoLoaded ? (
            <img
              src="/images/LOGO WIT .png" 
              alt="Overlay"
              className="overlay-image"
            />
          ) : (
            <div className="loader"></div>
          )}
          {isVideoLoaded && (
            <a className="scroll-indicator">
              <FiChevronDown className="chevron-icon" />
            </a>
          )}
        </div>
      </div>
      <motion.div
        ref={textSectionRef}
        className="text-section"
        initial={{ opacity: 0, y: 100 }}
        animate={isTextSectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.25, ease: "easeOut" }}
      >
        <h2>SAMEN GROOTS DROMEN, <br />SAMEN GROOTS CREËREN.</h2>
        <div className="text-blocks">
          <div className="text-block">
            <p><span className="span1">Bij GrootsDesign draait alles om het creëren van een interieur dat voelt als thuis - uniek, inspirerend en helemaal van jou.</span> je woning is meer dan een verzameling ruimtes; het is een plek waar je tot rust komt, oplaadt en geniet. Daarom geloven wij in ontwerpen die niet alleen mooi zijn, maar vooral perfect aansluiten bij jouw levenstijl en persoonlijkheid</p>
            </div>
            <div className="text-block">
              <p>Of het nu gaat om het kiezen van kleuren, materialen of het realiseren van maatwerk oplossingen, bij GrootsDesign gaat het altijd om een harmonieus totaalplaatje.</p>
            </div>
          </div>
          <div className="text-blocks-second-row">
            <div className="text-block1">
              <p>We vertalen jouw wensen naar een interieur waarin stijl en comfort hand in hand gaan. Met aandacht voor de kleinste details en een passie voor kwaliteit ontwerpen we ruimtes die verrassen en blijven inspireren.</p>
            </div>
            <div className="text-block2">
              <p>Samen pakken we groots uit en zorgen we voor een interieur dat jouw verhaal vertelt. Van het eerste idee tot de laatste afwerking ben je verzekerd van een persoonlijke aanpak, zodat het eindresultaat niet alleen aansluit bij je verwachtingen, maar deze overtreft. 
              <span className="span1"> Dit is jouw ruimte, groots gemaakt.</span></p>
            </div>
          </div>
        </motion.div>
        <div className="homepage-content">
        <ImageSlider />

            <motion.div
              ref={reviewsBlockRef}
              className="reviews-block"
              initial={{ opacity: 0, x: 100 }}
              animate={isReviewsBlockInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.25, ease: "easeOut" }}
            >
            <h2 className="reviews-title">REVIEWS</h2>
            <ReviewsCarousel />
          </motion.div>
          <PortretText
            title="WAAROM IK GELOOF IN <br /> GROOTS WONEN"
            imageSrc="/images/PortretHome.png"
            buttonText="WAT WE DOEN"
            paragraphs={[
              `Ik ben Ilse Groot, het gezicht achter GrootsDesign. Al van jongs af aan ben ik gefascineerd door de impact die een goed doordacht interieur kan hebben op hoe je je voelt en functioneert. Voor mij is een interieur veel meer dan alleen een verzameling meubels en kleuren; het is een vertaling van wie je bent en hoe je wilt leven. <span class="highlight-text">Dat is de filosofie die ik met GrootsDesign nastreef – het creëren van ruimtes die jouw verhaal vertellen en waarin jij je helemaal thuis voelt.</span>`,
              `Met een achtergrond in interieurontwerp en jarenlange ervaring in de zakelijke en particuliere markt, weet ik precies hoe ik jouw wensen kan omzetten in een interieur dat niet alleen esthetisch prachtig is, maar ook praktisch en toekomstbestendig. Mijn kracht ligt in het combineren van jouw unieke stijl met slimme, verrassende oplossingen die het maximale uit jouw ruimte halen.`,
              `Wat mij onderscheidt? Mijn persoonlijke aanpak. Voor mij begint een sterk ontwerp met het leren kennen van jou. Wie ben je? Wat zijn je wensen, dromen en uitdagingen? Alleen door echt te luisteren en een klik te creëren, kan ik een ontwerp maken dat niet alleen mooi is, maar ook perfect aansluit bij jouw leven.`,
              `Klaar om samen groots uit te pakken? <span class="highlight-text">Laat me je inspireren en begeleiden naar een interieur dat echt bij jou past.</span>`
            ]}
          />
        <InspirationSection />
      </div>
    </div>
  );
}
export default Home;
