import {React, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ITIN from './components/ITIN';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Taxes from './components/Taxes';
import Representation from './components/Representation';
import BusinessAdvisory from './components/BusinessAdvisory';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


export default function App() {

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

    return (
      <div className='App'>
        <Router>
          <ScrollToTop>
            <header className='App-header'>
                <Navbar showDropdown={showDropdown} toggleDropdown={toggleDropdown} setShowDropdown={setShowDropdown}/>
                <Routes>
                  <Route path="/" element={<Home />} /> 
                  <Route path="/about-us" element={<AboutUs />} />    
                  <Route path="/taxes" element={<Taxes />} />
                  <Route path='/itin' element={<ITIN />} />  
                  <Route path='/representation' element={<Representation />} />                   
                  <Route path='/business-advisory' element={<BusinessAdvisory />} />                   
                  <Route path='/contact-us' element={<ContactUs />} />                                    
                </Routes>
            </header>
            <Footer />
          </ScrollToTop>
        </Router>
      </div>
    );
}

