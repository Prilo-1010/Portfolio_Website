import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/portfolio' element={<Portfolio />} />
           <Route path='/services' element={<Services />} />
           <Route path='/contact' element={<Contact />} />
        </Routes>
    </Router>   
    </>
  );
}

export default App;