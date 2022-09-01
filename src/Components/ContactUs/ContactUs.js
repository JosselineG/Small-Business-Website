import { TextField } from '@mui/material';
import React, { useState } from 'react';
import './ContactUs.css'
import { Button } from '@mui/material';


function ContactUs() {

    /* contactData works as this.state and setContactData as this.setState */

    const [contactData, setContactData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = e => {

        setContactData({ ...contactData, [e.target.name]: e.target.value })
    }


    const handleSubmit = e => {

        console.log(contactData)
        setContactData({ firstName: "", lastName: "", email: "", message: "", })
        /* This will clear the input after the form has been submitted*/

        e.preventDefault();
    }

   

    return (

        
        <div className='Contact-form'>
            <h1>Contact Us</h1>


            <div className='cont'>
                <div className='cont-form'>

                    <form onSubmit={handleSubmit}>
                        <div className='Info'>

                            <TextField
                                type="text"
                                name="firstName"
                                id="standard-basic"
                                label="FirstName"
                                variant='filled'
                                required onChange={handleChange}
                                value={contactData.firstName}

                                fullWidth
                                size='small'
                            />

                            <TextField
                                type="text"
                                name="lastName"
                                id="standard-basic"
                                label="LastName"
                                variant='filled'
                                required onChange={handleChange}
                                value={contactData.lastName}

                                fullWidth
                                size='small'
                            />
                            <TextField
                                type="email"
                                name="email"
                                id="standard-basic"
                                label="Email"
                                variant='filled'
                                required onChange={handleChange}
                                value={contactData.email}

                                fullWidth
                                size='small'
                            />
                            <TextField
                                type="text"
                                name="message"
                                id="standard-multiline-static"
                                label="Message"
                                variant='filled'
                                multiline
                                rows={4}
                                required onChange={handleChange}
                                value={contactData.message}

                                fullWidth
                                size='small'
                            />

                            <Button
                                className='buttonSub'
                                type="submit"
                                variant="contained"
                                size='small'
                                value="submit"
                            >Submit</Button>


                        </div>

                    </form>

                </div>


                <div className='ContactInfo'>
                    
                        <h2>We are here to help!</h2>
                        <h3>If you have any questions contact us.</h3>
                        <p >Email:</p>
                        <a style={{ color: "black", textDecoration: "none" }} href="mailto: crotonautorepair@gmail.com">
                            crotonautorepair@gmail.com
                        </a>
                        <p>Phone:</p>
                        <a style={{ color: "black", textDecoration: "none" }} href="tel: (914)862-2376">
                            (914) 862-2376
                        </a>
                        <p>Address:</p>
                        <a style={{ color: "black", textDecoration: "none" }}
                            href="https://www.google.com/maps/place/Croton+Auto+Repair+LLC+and+Towing+Service/@41.1946705,-73.8837658,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x89c2c718ea0593cb:0x2674c68aa0ad3977!2s380+S+Riverside+Ave,+Croton-On-Hudson,+NY+10520!3b1!8m2!3d41.1948236!4d-73.8815771!3m4!1s0x89c2c7964c6a2ea7:0xebcb8a9ce52da5ef!8m2!3d41.1946705!4d-73.8815771">
                            380 S Riverside Ave, Croton-On-Hudson, NY 10520
                        </a>
                   
                </div>

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

export default ContactUs;