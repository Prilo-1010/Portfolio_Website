import React from 'react';
import '../styles/Services.css';

function Cards(props) {
  return (
    <>
      <div className='service-option'>
        <div className='text-serve'>
          <h3 className='service-text'>{props.header}</h3>
          <img src={props.image} alt="pic"/>
            <div className='head'>
              <p className='service-text' id='active-service'>{props.text1} </p>
              <h3>{props.head1}</h3>
              <p className='service-text' id='active-service'>{props.text2} </p>
              <h3>{props.head2}</h3>
              <p className='service-text' id='active-service'>{props.text3} </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Cards

