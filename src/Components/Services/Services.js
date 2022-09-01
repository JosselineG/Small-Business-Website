import React from 'react';
import './Services.css'


function Services() {
    return (
        <div className='body'>
        
            <div className='body-heading'>
                <h1>Our Sevices:</h1>
            </div>

            <div className='listOfServices'>


                <span class="animate__animated animate__zoomInLeft">

                    <li>Brakes</li>
                    <li>Tune-ups</li>
                    <li>Oil Changes</li>
                    <li>Gerneral Service</li>
                    <li>Import Specialist</li>
                    <li>A/C Service</li>
                    <li>Inspection</li>
                    <li>Car Audio & Video Service</li>
                    <li>Towing Services</li>
                </span>

                {/*  <div className='serImg'>
                    <img  src={logo} alt="logo" style={{ objectFit:'cover', objectPosition:'right',  width: '100%', height: '100%', maxWidth: '100%', margin: '0px', padding: '0px' }} />
                </div> */}
              
            </div>
           
        </div>
    )
}

export default Services;