import React from 'react'
import '../styles/Services.css';

function CardsFlow(props) {
  return (
    <>
    <div className='service-flow'>
      <img src={props.image} alt="pic"/>
        <div className='flow'>
          <h3>{props.head}</h3>
          <p className='service-text' id='active-service'>{props.text} </p>
      </div>
    </div>
</>
  )
}

export default CardsFlow