import React, { useEffect } from 'react';
import '../styles/About.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Skills from '../components/Skills';
import { Button } from '../components/Button';

function About() {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <>
            <div className='about' 
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-easing="linear"
            data-aos-duration="2000"
            >
                <div className='about-container'>
                    <div className='about-text'>
                        <h1>About Me.</h1>
                        <div className='text-border'></div>
                    </div>
                    <div className='about-section'>
                        <div className='about-info'
                        data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="800">
                            <h2>Software Developer</h2>
                            <p>Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat placeat quas consequatur? Obcaecati natus rerum</p>
                        </div>
                        <div className='about-personal'
                         data-aos="fade-left"
                         data-aos-anchor="#example-anchor"
                         data-aos-offset="500"
                         data-aos-duration="800">
                            <h2>Personal Information</h2>
                            <h3><span>Name</span> : Prosper Lolo</h3>
                            <h3><span>Age</span> : 21 Years</h3>
                            <h3><span>Residence</span> : Johannesburg, South Africa</h3>
                            <h3><span>Address</span> : 76 Albert Street</h3>
                            <h3><span>Email</span> : loloprosper17@gmail.com</h3>
                            <h3><span>Phone</span> : (+27) 659 444 353</h3>
                            <h3><span>Freelance</span> : Available</h3>
                            <Button
                                buttonStyle='btn-primary'
                                buttonSize='btn-medium'
                                type='submit'
                                // onClick={console.log('Prosper')}
                                >
                                Download Resume
                            </Button>
                        </div>
                    </div>
                    <div className='skills'>
                        <div className='skills-text'>
                            <h1>My Skills</h1>
                            <div className='text-border'></div>
                        </div>

                        <div className='skills-set'>
                            <Skills
                                text="HTML"
                                skill="html"
                                percent="90%"
                            />
                            <Skills
                                text="CSS"
                                skill="css"
                                percent="82%"
                            />
                            <Skills
                                text="Javascript"
                                skill="javascript"
                                percent="77%"
                            />
                            <Skills
                                text="React Js"
                                skill="react"
                                percent="70%"
                            />
                            <Skills
                                text="Node Js"
                                skill="node"
                                percent="60%"
                            />
                            <Skills
                                text="Adobe XD"
                                skill="xd"
                                percent="75%"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About