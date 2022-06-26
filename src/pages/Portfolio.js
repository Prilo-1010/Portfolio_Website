import React, { useEffect} from 'react';
import '../styles/Portfolio.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Work from '../components/Work';
import pic from '../assets/cob.png'


function Portfolio() {
  useEffect(() => {
    Aos.init({});
}, []);
  return (
    <>
    <div className='portfolio'
    data-aos="fade-up"
    data-aos-anchor-placement="center-bottom"
    data-aos-easing="linear"
    data-aos-duration="2000"
    >
    <div className='portfolio-container' >
           <div className='about-text'>
            <h1>My Portfolio</h1>
            <div className='text-border'></div>
          </div>

          <div className='portfolio-main'
          data-aos="fade-up-right"   data-aos-duration="3000">
            <Work 
            title="CobWeb"
            image = {pic}
            />
            <Work title="LoloDev"/>
            <Work title="LoloDev"/>
            <Work title="LoloDev"/>
            <Work title="LoloDev"/>
            <Work title="LoloDev"/> 
          </div>
      </div>
    </div>

    </>
  )
}

export default Portfolio