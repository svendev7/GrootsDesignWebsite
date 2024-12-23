import React from 'react';
import '../home/home.css'; 
import ImageSlider from '../components/imageSlider';
function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img
          src="/images/LOGO GD.png" 
          alt="Logo"
          className="logo"
        />
        <nav className="header-nav">
          <a href="#home" className="nav-button">HOME</a>
          <a href="#projecten" className="nav-button">PROJECTEN</a>
          <a href="#watwedoen" className="nav-button">WAT WE DOEN</a>
          <a href="#contact" className="nav-button">CONTACT</a>
        </nav>
      </header>

      <div className="image-container">
        <div className="image-overlay"></div>
        <img
          src="/images/LOGO WIT .png" 
          alt="Overlay"
          className="overlay-image"
        />
      </div>

      <div className="text-section">
      <h2>S A M E N&nbsp;&nbsp;&nbsp;G R O O T S&nbsp;&nbsp;&nbsp;D R O M E N, <br />S A M E N&nbsp;&nbsp;&nbsp;G R O O T S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>C R E Ë R E N.</span></h2>
      <div className="text-blocks">
        <div className="text-block">
          <p><span className="span1">Bij GrootsDesign draait alles om het creëren van een interieur dat voelt als thuis - uniek, inspirerend en helemaal van jou.</span> je woning is meer dan een verzameling ruimtes; het is een plek waar je tot rust komt, oplaadt en geniet. Daarom geloven wij in ontwerpen die niet alleen mooi zijn, maar vooral perfect aansluiten bij jouw levenstijl en persoonlijkheid</p>
          </div>
          <div className="text-block">
            <p>Of het nu gaat om het kiezen van kleuren, materialen of het realiseren van maatwerkoplossingen, bij GrootsDesign gaat het altijd om een harmonieus totaalplaatje.</p>
          </div>
        </div>
        <div className="text-blocks second-row">
          <div className="text-block1">
            <p>We vertalen jouw wensen naar een interieur waarin stijl en comfort hand in hand gaan. Met aandacht voor de kleinste details en een passie voor kwaliteit ontwerpen we ruimtes die verrassen en blijven inspireren.</p>
          </div>
          <div className="text-block2">
            <p>Samen pakken we groots uit en zorgen we voor een interieur dat jouw verhaal vertelt. Van het eerste idee tot de laatste afwerking ben je verzekerd van een persoonlijke aanpak, zodat het eindresultaat niet alleen aansluit bij je verwachtingen, maar deze overtreft. 
            <span className="span2">Dit is jouw ruimte, groots gemaakt.</span></p>
          </div>
        </div>
      </div>
      <div className="homepage-content">
        <div className="projecten-block">
          <h2 className="projecten-title">P R O J E C T E N</h2>
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}

export default Home;