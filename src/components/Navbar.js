import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import main from '../assets/main.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showNavbar = () => {
        if (window.innerWidth <= 800) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        showNavbar();
    });

    window.addEventListener('resize', showNavbar);

    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        <>
            {navbar && <div className='navbar-active' onClick={handleClick}>
                <i className={click ? 'fas fa-bars' : 'fas fa-bars'} style={click ? { color: '#868383' } : { color: '#8d7908' }} />
            </div>}

            <div className='navbar' style={click ? { display: 'none'  } : { display: 'table' }}  >
                <div className="image" style={{ backgroundImage: `url(${main})`, backgroundSize: 'cover', height: '200px' }} onClick={closeMobileMenu}>
                    <h1>P. Lolo</h1>
                </div>
                <div className="navLinks">
                    <ul>
                        <li><Link className='links' to='/' onClick={closeMobileMenu}>HOME</Link></li>
                        <div className='border'></div>
                        <li><Link className='links' to='/about' onClick={closeMobileMenu}>ABOUT ME</Link></li>
                        <div className='border'></div>
                        <li><Link className='links' to='/portfolio' onClick={closeMobileMenu}>PORTFOLIO</Link></li>
                        <div className='border'></div>
                        <li><Link className='links' to='/services' onClick={closeMobileMenu}>SERVICES</Link></li>
                        <div className='border'></div>
                        <li><Link className='links' to='/contact' onClick={closeMobileMenu}>CONTACT</Link></li>
                        <div className='border'></div>
                    </ul>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Navbar