import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import {Portfolio} from './pages/Portfolio';
import ProjectInfo from './components/ProjectInfo';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { PulseLoader } from 'react-spinners';
import AdminPanel from './pages/AdminPanel';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {loading ?
        <div className='loader'>
          <PulseLoader
            color="#8d7908"
            loading
            speedMultiplier={1}
            size={27}
          />
        </div>
        :
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/portfolio/:id' element={<ProjectInfo />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/admin/*' element={<AdminPanel />} />
          </Routes>
        </Router>
        
        }
    </>
  );
}

export default App;
