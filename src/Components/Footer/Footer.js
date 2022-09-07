import React from "react";
import Button from '@mui/material/Button'
/* import logo from "../Logo2.1.3.png"; */
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import './Footer.css';

function Footer() {

    return (
        <footer className="Footer">
            <div className="Footer-Content">
                <div className='Main-Logo' >

                {/*     <img className="logo" src={logo} alt="logo" style={{ width: '140px', height: '100', margin: '0px', padding: '10px' }} /> */}

                </div>

                <div className="footer-fbLogo">

                    <div className="fb-Box">
                        <h3>Social</h3>

                        <a className="fb-Logo" >
                            <Button endIcon={<FacebookOutlinedIcon style={{ display: 'flex', alignItems: "center", flexWrap: 'wrap' }} />} />
                        </a>
                    </div>
                </div>

                <div className="BoxCon">

                    <div className="Contact-Box" >
                        <h3>Contact Us</h3>
                        <ul>
                            <li> <div className="i">Phone Number:</div>  <div className="info"></div></li>
                            <li> <div className="i">Email:</div>  <div className="info"></div></li>
                            <li> <div className="i">Address:</div>  <div className="info">&nbsp;&nbsp;</div></li>
                        </ul>
                    </div>

                </div>

                <div className="BoxTim">

                    <div className="Time-Box">
                        <h3>Business Hours</h3>
                        <ul>
                            <li> <div className="Day">Monday</div> <div className="Time">8:30AM-6PM</div> </li>
                            <li> <div className="Day">Tuesday</div> <div className="Time">8:30AM-6PM</div> </li>
                            <li> <div className="Day">Wednesday</div> <div className="Time">&nbsp;&nbsp;8:30AM-6PM</div> </li>
                            <li> <div className="Day">Thursday</div> <div className="Time">8:30AM-6PM</div> </li>
                            <li> <div className="Day">Friday</div> <div className="Time">8:30AM-6PM</div> </li>
                            <li> <div className="Day">Saturday (By Appointment Only)</div> <br/><div className="Time">9AM-1PM </div> </li>
                            <li> <div className="Day">Sunday</div> <div className="Time">Closed</div> </li>
                        </ul>
                    </div>

                </div>

                <div className="CopyR">
                    <div className="Footer-copyR">

                        Copyrights&nbsp; <CopyrightIcon style={{ fontSize: 25, color: 'white' }} />
                        &nbsp; All Rights Reserved.

                    </div>

                </div>

            </div>

        </footer>

    );
}

export default Footer