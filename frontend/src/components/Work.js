import '../styles/Portfolio.css';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


function Work({ project }) {
    const navigate = useNavigate()
    const [click, setClick] = useState(true);

    const handleClick = () => setClick(false);
    return (
        <>
            {/* {projects && projects.map(project => ( */}
                <div className="work-container height-100vh center-aligned" key={project.id}>
                    <img className="background-image" alt='pic' src={project.image1} />

                    {click &&  <div id={`${project.type}`} className="overlay-work">
                        <div className="details-con  popup" >
                            <i className="close" onClick={handleClick}>&times;</i>
                            <div className="image-con" >
                                <img alt='pic' src={project.image2} />
                            </div>
                            <div className="info-con">
                                <h1>{project.title}</h1>
                                <h3>{project.type}</h3>
                                <p>{project.details}</p>
                                <Button
                                    buttonStyle='btn-other'
                                    buttonSize='btn-medium'
                                onClick={() => { navigate('/portfolio/') }}
                                >
                                    Visit
                                </Button>
                            </div>
                        </div>
                    </div>}

                    <div className="text">
                        <a href={`#${project.type}`}>
                            <Button
                                buttonStyle='btn-other'
                                buttonSize='btn-large'
                            // onClick={() => { navigate(`/portfolio/${project.id}`) }}
                            >
                                View Project
                            </Button>
                        </a>


                    </div>
                </div>
                {/* ))} */}
        </>
    )
}

export default Work

