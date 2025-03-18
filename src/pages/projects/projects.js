import React from 'react';
import Header from '../../components/Header/Header';
import './projects.css';
import InspirationSection from '../../components/InspirationSection/InspirationSection';

const Projects = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isStackedLayout = windowWidth < 1920;
  return (
    <div className="projects">
      <Header />
      <div className="projects-content">
      {isStackedLayout ? (
          <>
            <div className="stacked-image">
              <img src="/images/1.jpg" alt="Project 1" />
            </div>
            <div className="stacked-image">
              <img src="/images/10.jpg" alt="Project 2" />
            </div>
            <div className="stacked-image">
              <img src="/images/2.jpg" alt="Project 3" />
            </div>
            <div className="stacked-image">
              <img src="/images/3.jpg" alt="Project 4" />
            </div>
            <div className="stacked-image">
              <img src="/images/2.jpg" alt="Project 5" />
            </div>
            <div className="stacked-image">
              <img src="/images/6.jpg" alt="Project 6" />
            </div>
            <div className="stacked-image">
              <img src="/images/5.jpg" alt="Project 7" />
            </div>
            <div className="stacked-image">
              <img src="/images/7.jpg" alt="Project 8" />
            </div>
            <div className="stacked-image">
              <img src="/images/8.jpg" alt="Project 9" />
            </div>
            <div className="stacked-image">
              <img src="/images/4.jpg" alt="Project 10" />
            </div>
            <div className="stacked-image">
              <img src="/images/9.jpg" alt="Project 11" />
            </div>
          </>
        ) : (
          <>
        <div className="top-row">
          <div className="large-image">
            <img src="/images/1.jpg" alt="Project 1" />
          </div>
          <div className="small-image">
            <img src="/images/10.jpg" alt="Project 2" />
          </div>
        </div>

        <div className="middle-section">
          <div className="tall-image">
            <img src="/images/2.jpg" alt="Project 3" />
          </div>
          <div className="right-column">
            <div className="top-right-image">
              <img src="/images/3.jpg" alt="Project 4" />
            </div>
            <div className="bottom-right-images">
              <img src="/images/2.jpg" alt="Project 5" />
              <img src="/images/6.jpg" alt="Project 6" />
            </div>
          </div>
        </div>

        <div className="full-width-image">
          <img src="/images/5.jpg" alt="Project 7" />
        </div>

        <div className="three-column">
          <img src="/images/7.jpg" alt="Project 8" />
          <img src="/images/8.jpg" alt="Project 9" />
          <img src="/images/4.jpg" alt="Project 10" />
        </div>

        <div className="full-width-image">
          <img src="/images/9.jpg" alt="Project 11" />
          </div>
          </>
        )}
      </div>
      <InspirationSection />
    </div>
  );
};

export default Projects;