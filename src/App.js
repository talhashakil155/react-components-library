import './App.css';
import HeroSection1 from './components/HeroSection1/HeroSection1.js';
import HeroSection2 from './components/HeroSection2/HeroSection2.js';
import HomePage from './pages/HomePage';
import DetailHeroSection1 from './pages/DetailHeroSection1'
import DetailHeroSection2 from './pages/DetailHeroSection2.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hero-section-1" element={<HeroSection1 />} exact />
      <Route path="/hero-section-2" element={<HeroSection2 />} exact />
      <Route path="/detail/hero-section-1" element={<DetailHeroSection1 />} exact />
      <Route path="/detail/hero-section-2" element={<DetailHeroSection2 />} exact />
    </Routes>
  </Router>
  );
}

export default App;
