import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import Home from './pages/home/home';
import Privacy from './pages/privacy/privacy';
import Terms from './pages/terms/terms';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
function ScrollHandler() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }, [location]);
  
  return null;
}
function App() {
  return (
      <Router>
        <ScrollHandler />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacybeleid" element={<Privacy />} />
          <Route path="/algemene-voorwaarden" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
  );
}

export default App;