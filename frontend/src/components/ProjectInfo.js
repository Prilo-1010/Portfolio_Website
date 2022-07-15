import { VscChromeClose } from 'react-icons/vsc';
import { Button } from './Button';
import useFetch from '../hooks/useFecth';
import { useParams } from 'react-router-dom'

function ProjectInfo () {
    const { id } = useParams()
    const { data: project, loading, error } = useFetch(`/portfolio/${id}`)
  
    return (
        <>
            <div className='con' >
            {error && <div>{error}</div>}
        {loading && <div className='btext'><h2>Loading..</h2></div>}
                {project &&
                    <div className="details-con" key={project.id} >
                       <div className="image-con" >
                        <img alt='pic' src={project.image} />
                        </div>
                        <div className="info-con">
                            <h1>{project.title}</h1>
                            <h3>{project.type}</h3>
                            <p>{project.details}</p>
                            <Button
                                buttonStyle='btn-other'
                                buttonSize='btn-medium'>
                                Visit Website
                            </Button>
                        </div>
                    </div>
                }
                <a className='wlink' href='/portfolio'>
                    <VscChromeClose />
                </a>
            </div>
        </>

    );
}

export default ProjectInfo;
