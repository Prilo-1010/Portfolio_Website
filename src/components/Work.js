import React from 'react';
import '../styles/Portfolio.css';
import { Button } from '../components/Button';

function Work(props) {
    return (
        <>
            <div class="work-container" style={{backgroundImage: `url(${props.image})` }}>
                
                <div class="overlay-work">
                    <div class="items"></div>
                    <div class="items header">
                        <p>{props.title}</p>
                    </div>
                    <div class="items header">
                        <Button
                            buttonStyle='btn-primary'
                            buttonSize='btn-medium'
                            type='submit'
                            onClick={console.log('Form Submitted successfully')}
                        >
                            View Project
                        </Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Work