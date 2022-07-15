import React, { useEffect } from 'react';
import '../styles/Portfolio.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Work from '../components/Work';
import useFetch from '../hooks/useFecth';

export const Portfolio = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const { data: projects, loading, error } = useFetch('/portfolio');
  return (
    <>
      <div className='portfolio'>
        <div className="work"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000">
          {error && <div>{error}</div>}
          {loading && <div className='btext'><h2>Loading..</h2></div>}
          {projects && projects.map(projects => (<Work project={projects} />))}
        </div>
      </div>
    </>
  )
}

