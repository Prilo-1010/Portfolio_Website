import React, { useEffect } from 'react';
import '../styles/Home.css';
import Typed from '../components/Typed'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <div className='home' >
        <div className="home-container" >
          <div className='home-text' 
           data-aos="zoom-in"
           data-aos-duration="1000">
            <h1>Prosper <span className='homespan'>Lolo</span></h1>
            <p>I am  a <Typed /> </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home