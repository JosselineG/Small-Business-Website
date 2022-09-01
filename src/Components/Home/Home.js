import './Home.css';
import Grid from '@mui/material/Grid';
import React, { Component } from 'react';

function Home() {

    return (
        <div className='HomeMain'>
       
            <div className='conts'>

                <Grid
                    className='rows'
                    container spacing={3}
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="stretch"
                >

                    <div className='Service1' class="animate_animated animate__fadeInLeft">
                        <h3>Brakes</h3>
                        <p>we fix brakes etc</p>
                    </div>
                    <div className='Service2'>
                        <h3>Tune-ups</h3>
                        <p>we fix brakes etc</p>
                    </div>
                    <div className='Service3'>
                        <h3>Oil Changes</h3>
                        <p>we fix brakes etc</p>
                    </div>
                    <div className='Service4'>
                        <h3>General Service</h3>
                        <p>we fix brakes etc</p>
                    </div>
                    <div className='Service5'>
                        <h3>Import Specialist</h3>
                        <p>we fix brakes etc</p>
                    </div>
                    <div className='Service6'>
                        <h3>A/C Service</h3>
                    </div>
                    <div className='Service7'>
                        <h3>Inspection</h3>
                    </div>
                    <div className='Service7'>
                        <h3>Car Audio & Video Service</h3>
                    </div>
                    <div className='Service7'>
                        <h3>Towing Services</h3>
                    </div>

                </Grid>
            </div>
            <div className='Location'>
                {/* <p>Stop by and visit us we will be here to help you!</p> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3002.2360241855336!2d-73.8837658!3d41.1948276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2c7964c6a2ea7%3A0xebcb8a9ce52da5ef!2sCroton%20Auto%20Repair%20LLC%20and%20Towing%20Service!5e0!3m2!1sen!2sus!4v1658458107755!5m2!1sen!2sus"
                    width="100%"
                    height="350"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"

                ></iframe>

            </div>
        </div>

    )
}

export default Home;