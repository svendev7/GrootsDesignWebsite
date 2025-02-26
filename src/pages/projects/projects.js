import React from 'react';
import Header from '../../components/Header/Header';
import './projects.css';
import InspirationSection from '../../components/InspirationSection/InspirationSection';

const Projects = () => {
  return (
    <div className="projects">
      <Header />
      <div className="projects-content">

        <div className="top-row">
          <div className="large-image">
            <img src="/images/Laag 2.png" alt="Project 1" />
          </div>
          <div className="small-image">
            <img src="/images/Laag 3.png" alt="Project 2" />
          </div>
        </div>

        <div className="middle-section">
          <div className="tall-image">
            <img src="/images/Laag 5.png" alt="Project 3" />
          </div>
          <div className="right-column">
            <div className="top-right-image">
              <img src="/images/Laag 4.png" alt="Project 4" />
            </div>
            <div className="bottom-right-images">
              <img src="/images/Laag 6.png" alt="Project 5" />
              <img src="/images/Laag 7.png" alt="Project 6" />
            </div>
          </div>
        </div>

        <div className="full-width-image">
          <img src="/images/Laag 8.png" alt="Project 7" />
        </div>

        <div className="three-column">
          <img src="/images/Laag 11.png" alt="Project 8" />
          <img src="/images/Laag 9.png" alt="Project 9" />
          <img src="/images/Laag 10.png" alt="Project 10" />
        </div>

        <div className="full-width-image">
          <img src="/images/Laag 12.png" alt="Project 11" />
        </div>
      </div>
      <InspirationSection />
    </div>
  );
};

export default Projects;