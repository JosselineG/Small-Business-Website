/* 
import logo from "../Logo2.1.3.png"; */
import './NavBar.css';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
/* import {Link} from 'react-scroll'; */
import {Link} from "react-router-dom";

function NavBar() {

    return (

        <nav className='NavBar'>

            <div className='NavBar-Content' >

                <div className='NavBar-Logo' >

                 <Link className='nav-Logo' to="/">
                        <img /* src={logo} */ alt="Logo" style={{ width: '100%', height: 'auto', maxWidth: '60px', margin: '0px', padding: '3px' }} />
                    </Link>

                </div>

                        <div className='Menu'>
                            <Button endIcon={<MenuIcon />}> </Button>
                        </div>

                <div className='NavBar-Links' >

                    <ul>

                        <li>
                            <Link style={{ textDecoration: 'none' }} to='/'>
                                <Button style={{ backgroundColor: '2e85b7' }} size="small" variant="contained">Home</Button></Link>
                        </li>
                        <li>
                            <Link style={{ textDecoration: 'none' }}  to='/AboutUs'>
                                <Button style={{ backgroundColor: '2e85b7' }} size="small" variant="contained">About Us</Button></Link>
                        </li>
                        <li>
                            <Link style={{ textDecoration: 'none' }}to='/Services' /* activateClass= 'active'  spy={true} smooth={true}  */>
                                <Button style={{ backgroundColor: '2e85b7' }} size="small" variant="contained">Services</Button></Link>
                        </li>
                        <li>
                            <Link style={{ textDecoration: 'none' }} to='/ContactUs'>
                                <Button style={{ backgroundColor: '2e85b7' }} size="small" variant="contained">Contact Us</Button></Link>
                        </li>
                 
                    </ul>

                </div>

            </div>

        </nav>
    )
}

export default NavBar;