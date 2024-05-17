import {React, useState, useEffect} from "react";
import "../css/Navbar.css";
import {NavLink} from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';


export default function Navbar({showDropdown, setShowDropdown}) {

    const [isBarsShowing, setIsBarsShowing] = useState(true);
    
    const handleBars = () => {
        setIsBarsShowing((prev) => !prev);
        setShowDropdown((prev) => !prev);
    }

    useEffect(()=> {
        AOS.init({duration: 2000});
    }, []);

    return (
        <div className="navbar--container">
            {/* <Link to="/"><img className="navbar--logo" src={salogo} alt="Website logo" /></Link> */}
            <div className="navbar--contents">
                <ul className="navbar--links">
                        <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
                        <li><NavLink to="/about-us" activeClassName="active-link">About Us</NavLink></li>
                        <li><NavLink to="/taxes" activeClassName="active-link">Taxes</NavLink></li>
                        <li><NavLink to="/itin" activeClassName="active-link">ITINs</NavLink></li>
                        <li><NavLink to="/representation" activeClassName="active-link">Representation</NavLink></li>
                        <li><NavLink to="/business-advisory" activeClassName="active-link">Business Advisory</NavLink></li>
                        <li><NavLink to="/contact-us" activeClassName="active-link">Contact Us</NavLink></li>
                </ul>
                <i className="material-symbols-outlined navbar--bars" onClick={handleBars}>{isBarsShowing ? "menu_open" : "close"}</i> 
            </div>
            {showDropdown && 
                <div data-aos="fade-down" className="navbar--bars-dropdown">
                    <ul className="navbar--bars-dropdown-links">
                            <li><NavLink to="/" activeClassName="active-link" onClick={() => {setShowDropdown(false); setIsBarsShowing(true)}}>Home</NavLink></li>
                            <li><NavLink to="/about-us" activeClassName="active-link" onClick={() => {setShowDropdown(false); setIsBarsShowing(true)}}>About Us</NavLink></li>
                            <li><NavLink to="/taxes" activeClassName="active-link" onClick={() => {setShowDropdown(false); setIsBarsShowing(true)}}>Taxes</NavLink></li>
                            <li><NavLink to="/itin" activeClassName="active-link" onClick={() => {setShowDropdown(false); setIsBarsShowing(true)}}>ITIN</NavLink></li>
                            <li><NavLink to="/representation" activeClassName="active-link" onClick={() => {setShowDropdown(false); setIsBarsShowing(true)}}>Representation</NavLink></li>
                            <li><NavLink to="/business-advisory" activeClassName="active-link" onClick={() => {setShowDropdown(false); setIsBarsShowing(true)}}>Business Advisory</NavLink></li>
                            <li><NavLink to="/contact-us" activeClassName="active-link" onClick={() => {setShowDropdown(false); setIsBarsShowing(true)}}>Contact Us</NavLink></li>

                    </ul>
                </div>
                } 
        </div>
    )
}