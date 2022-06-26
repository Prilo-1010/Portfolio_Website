import React from 'react';
import '../styles/About.css'

function Skills(props) {
    return (
        <>
            <div className='skill-main'>
                <div className='skill-info'>
                    <p>{props.text}</p>
                    <p className='percent'>{props.percent}</p>
                </div>
                <div className='skill-bar'>
                    <span className={props.skill}></span>
                </div>
            </div>

        </>
    )
}

export default Skills