import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'

function Footer() {
  return (
    <>
      <div className='footerItems1'>
          <Link className='flinks' to="http://www.instagram.com/lolo_prilo">
            <li><i class="fa-brands fa-instagram"></i></li>
          </Link>
          <Link className='flinks' to="/portfolio">
            <li><i class="fa-brands fa-twitter"></i></li>
          </Link>
          <Link className='flinks' to="/portfolio">
            <li><i class="fa-brands fa-linkedin"></i></li>
          </Link>
          <Link className='flinks' to="/portfolio">
            <li><i class="fa-brands fa-github"></i></li>
          </Link>
      </div>
      <div className='footerItems2'>
         <h3>2022 &copy; ProsperLolo</h3>
         <h3>All Rights Reserved.</h3>
      </div>
    </>
  )
}

export default Footer