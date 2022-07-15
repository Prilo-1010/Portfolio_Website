import React, { useEffect } from 'react';
import '../styles/Services.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Cards from '../components/Cards';
import CardsFlow from '../components/CardsFlow';

import Designer from '../assets/web-designer.svg';
import Front from '../assets/react-logo.svg';
import Back from '../assets/brackets.svg';
import Marketing from '../assets/digital-marketing.svg';

import implement from '../assets/implement.svg'
import design from '../assets/work-design.svg'
import idea from '../assets/work-idea.svg'
import plan from '../assets/work-plan.svg'
import sketch from '../assets/work-sketch.svg'


function Services() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <div className='services'>
        <div className='service-container'
         data-aos="zoom-right"
         data-aos-offset="300"
         data-aos-easing="ease-in-sine"
         data-aos-duration="1000">
          <div className='service-head'>
            <h1>My Services</h1>
          </div>

          <div className='service-main'> 
            <Cards
              header="Designer"
              image={Designer}
              text1="I value simple content structure, clean design patterns, and thoughtful interactions."
              head1="Things I enjoy designing:"
              text2=" UX, UI, Web, Mobile, Apps."
              head2="Design Tools:"
              text3=" Adobe XD, Adobe Express, Sketch, Pen and paper."
            />
            <Cards
              header="Front-end Developer"
              image={Front}
              text1="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
              head1="Languages I speak:"
              text2="HTML, CSS, and JavaScript. "
              head2="Dev Tools:"
              text3="VScode, Github,Terminal."
            />

            <Cards
              header="Back-end Developer"
              image={Back}
              text1="Working as a backend developer, intergrating the client to the server. "
              head1="Languages I speak:"
              text2="JavaScript, PHP, and SQL. "
              head2="Dev Tools:"
              text3="Postman, MongoDB, XAMPP."
            />
            <Cards
              header="Graphic Designer"
              image={Marketing}
              text1="I identify and produce visual concepts to communicate ideas that inspire, inform and captivate consumers. "
              head1="Things I know:"
              text2="Logo Design, Resume Design."
              head2="Analytics Tools:"
              text3="Adobe Illustrator."
            />
          </div>
          <div className='service-head'>
            <h1>Work Flow</h1>
          </div>

          <div className='service-main-flow'
          >
            <CardsFlow
              image={idea}
              head="Discover"
              text="I conduct user research to identify the problem I want to solve."
            />
            <CardsFlow
              image={plan}
              head="Define"
              text="I brainstorm possible design solutions to the identified problem."
            />
            <CardsFlow
              image={sketch}
              head="Ideate"
              text="I create wireframes and sketches of the product I’m about to design."
            />
            <CardsFlow
              image={design}
              head="Prototype"
              text="I create high fidelity design and prototype the screens."
            />
            <CardsFlow
              image={implement}
              head="Implement"
              text="After designing, I deliver for implementation."
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default Services