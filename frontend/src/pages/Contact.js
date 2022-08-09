import '../styles/Contact.css';
import { Button } from '../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Contact() {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true)
  const [emptyFields, setEmptyFields] = useState([]);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const client = { fullname, email, subject, message }

    const response = await fetch('/contact', {
      method: 'POST',
      body: JSON.stringify(client),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json();

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setFullName('')
      setMessage('')
      setSubject('')
      setEmail('')
      setError(null)
      setEmptyFields(json.emptyFields)
      navigate('/')
    }
  }
  // useEffect(()=>{
  //   setLoading(false)
  // })
  return (
    <>
      <div className='contact'>
        <div className='contact-container'>
          <div className='contact-text'>
            <h1>Contact Me</h1>
            <h2>Lets talk about your project</h2>
          </div>
          <div className='info-fill'>
            <div className='contact-info' 
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500">
              <h3>Get in Touch</h3>
              <p>I’m interested in freelance opportunities especially ambitious or large projects. <br></br> However, if you have other request or question, don’t hesitate to use the form.</p>
              <div className='contact-icon'>
                <ul>
                  {/* <li><i class="fa-solid fa-location-dot"></i>76 Albert Street</li> */}
                  <li><i class="fa-solid fa-envelope"></i>loloprosper17@gmail.com</li>
                  <li><i class="fa-solid fa-mobile-screen-button"></i>(+27) 659 444 353</li>
                </ul>
              </div>
            </div>
            <div className='contact-fill'
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500">
              <form onSubmit={handleSubmit}>
                <div className='contact-fill1'>
                  <div className='fill'>
                    <h3 className='fill-text'>Full Name</h3>
                    <input className="app-form-control"
                    type="text" value={fullname} placeholder='Prosper Lolo' onChange={(e) => setFullName(e.target.value)} />
                  </div>
                  <div className='filla'>
                    <h3 className='fill-text'>Your Email</h3>
                    <input class="app-form-control" type="email" value={email} placeholder='info@email.com' onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                </div>
                <h3 className='fill-text'>Subject</h3>
                <input class="app-form-control" type="text" value={subject} placeholder='Web Develop' onChange={(e) => setSubject(e.target.value)}/>
                <h3 className='fill-text'>How can I help you?</h3>
                <textarea class="app-form-control" type="text" value={message} placeholder='Message' cols="20" rows="5" onChange={(e) => setMessage(e.target.value)}></textarea>
                <div className='contact-button'>
                {error && <div className='error'>{error}</div>}
                <Button
                  buttonStyle='btn-primary'
                  buttonSize='btn-medium'
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