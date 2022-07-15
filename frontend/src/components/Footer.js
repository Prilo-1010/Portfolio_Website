import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
      <div className='footerItems1'>
        <a className='flinks' href="http://www.instagram.com/lolo_prilo">
          <li><i className="fa-brands fa-instagram"></i></li>
        </a>
        <a className='flinks' href="http://www.twitter.com/ProsperLolo">
          <li><i className="fa-brands fa-twitter"></i></li>
        </a>
        <a className='flinks' href="http://www.linkedin.com/in/prosperlolo">
          <li><i className="fa-brands fa-linkedin"></i></li>
        </a>
        <a className='flinks' href="https://github.com/Prilo-1010">
          <li><i className="fa-brands fa-github"></i></li>
        </a>
      </div>
      <div className='footerItems2'>
        <h3>&copy;2022 Prosper Lolo </h3>
      </div>
    </>
  )
}

export default Footer