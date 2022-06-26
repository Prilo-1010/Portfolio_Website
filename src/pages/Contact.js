import React from 'react';
import '../styles/Contact.css';
import { Button } from '../components/Button';;

function Contact() {
  return (
    <>
      <div className='contact'
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >

        <div className='contact-container'>
          <div className='contact-text'>
            <h1>Contact Me</h1>
            <div className='text-border'></div>
            <h2>Lets talk about your project</h2>
          </div>
          <div className='info-fill'>
            <div className='contact-info' 
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500">
              <h3>Get in Touch</h3>
              <p>Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est vel.</p>
              <div className='contact-icon'>
                <ul>
                  <li><i class="fa-solid fa-location-dot"></i>76 Albert Street</li>
                  <li><i class="fa-solid fa-envelope"></i>loloprosper17@gmail.com</li>
                  <li><i class="fa-solid fa-mobile-screen-button"></i>(+27) 659 444 353</li>
                </ul>
              </div>
            </div>
            <div className='contact-fill'
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500">
              <form>
                <div className='contact-fill1'>
                  <div className='fill'>
                    <h3 className='fill-text'>Full Name</h3>
                    <input class="app-form-control" type="text" name="name" placeholder='Prosper Lolo' />
                  </div>
                  <div className='filla'>
                    <h3 className='fill-text'>Your Email</h3>
                    <input class="app-form-control" type="email" name="email" placeholder='info@email.com' />
                  </div>
                </div>
                <h3 className='fill-text'>Subject</h3>
                <input class="app-form-control" type="text" name="subject" placeholder='Web Develop' />
                <h3 className='fill-text'>How can I help you?</h3>
                <textarea class="app-form-control" type="text" name="message" placeholder='Message' cols="20" rows="5"></textarea>
                <div className='contact-button'>
                <Button
                  buttonStyle='btn-primary'
                  buttonSize='btn-medium'
                  type='submit'
                  onClick={console.log('Form Submitted successfully')}
                >
                  Send
                </Button>
                </div>
                
              </form>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Contact