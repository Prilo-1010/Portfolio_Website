import React, { useEffect } from 'react';
import '../styles/About.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Skills from '../components/Skills';
import { Button } from '../components/Button';
import Axios from 'axios'
import FileDownload from 'js-file-download'

function About() {
    useEffect(() => {
        Aos.init({});
    }, []);

    const download =(e)=>{
     e.preventDefault()
     Axios({
        url:"/about",
        method: "GET",
        responseType: "blob",
     }).then((res)=>{
        FileDownload(res.data, "Prosper Resume.pdf")
     })
    }

    return (
        <>
            <div className='about' >
                <div className='about-container'>
                    <div className='about-text'>
                        <h1>About Me.</h1>
                    </div>
                    <div className='about-section'>
                        <div className='about-info'
                            data-aos="fade-right"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="800">
                            <h2>Software Developer</h2>
                            <p>I'm a Full-Stack Developer situated in South Africa.
                                I've forever been somebody who has both an innovative and a consistent side. At the point when I found website composition ,
                                I understood it would be the ideal fit. I could utilize my inventive side to plan and my consistent side to code.
                                As a little something extra, being both originator and designer permits me to ensure no detail is lost in interpretation.

                                Efficient individual, issue solver, autonomous worker with high scrupulousness and love to chipping away at aggressive activities with positive individuals.
                                Aficionado of Music, outside exercises and TV series.</p>
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
                            <h3><span>Email</span> : loloprosper17@gmail.com</h3>
                            <h3><span>Phone</span> : (+27) 659 444 353</h3>
                            <h3><span>Freelance</span> : Available</h3>
                            <Button
                                buttonStyle='btn-primary'
                                buttonSize='btn-medium'
                                onClick={(e)=>download(e)}
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
                                text="Angular"
                                skill="angular"
                                percent="60%"
                            />
                            <Skills
                                text="Node-Express Js"
                                skill="node"
                                percent="65%"
                            />
                             <Skills
                                text="Adobe Illustrator"
                                skill="illus"
                                percent="55%"
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