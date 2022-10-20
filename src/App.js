import {Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Services from "./Components/Services/Services";
/* import logo from "./headerLogo1.3.4.png"; */
import 'animate.css';


function App() {
  return (
    <div className="App">
     <header className="App-header">
      <h1 class="animate__animated animate__lightSpeedInRight">NAME OF COMPANY</h1>
    {/*  <img src={logo} class="animate__animated animate__lightSpeedInRight"  alt="LOGO" style={{width: '100%',height:'auto', maxWidth: '430px'}}/> */}
     </header>
     
     <NavBar/>
     <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "AboutUs" element={<AboutUs/>} />
        <Route path = "Services" element={<Services/>} />
        <Route path = "ContactUs" element={<ContactUs/>} />
    </Routes>
 
     <Footer/>
    </div>
  );
}

export default App;
