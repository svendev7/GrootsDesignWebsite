// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Privacy from './pages/privacy/privacy';
import Terms from './pages/terms/terms';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
function App() {
  return (
    <Router>
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