import React, {useEffect} from 'react';
import '../styles/Home.css';
import video from '../assets/background.mp4'
import Typed from '../components/Typed'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        Aos.init({});
    }, []);
  return (
    <>
    <div className='home' 
    data-aos="fade-up"
    data-aos-anchor-placement="center-bottom"
    data-aos-easing="linear"
    data-aos-duration="2000" >
    <div className="home-container" >
      {/* <video src={video} autoPlay loop muted /> */}
      <div className='home-text' >
      <h1>Prosper <span className='homespan'>Lolo</span></h1>
      <p>I am  a <Typed/> </p>
      </div>
    </div>
    </div>
     
    </>
  )
}

export default Home