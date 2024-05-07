import React, {Component} from "react";
import "../css/Footer.css";
import efile from '../images/efile-img.png';
import caa from '../images/caa.png';
import irsea from '../images/irsea.png';
import {Link} from "react-router-dom";
  
export default function Footer() {
    return (
        <div className="footer--container">
            <p className="footer--copyright">© Sogrem Associates</p>
            <div className="footer--links">
                <Link to="/About-us">About Us</Link>
                <Link to="/Contact-us">Contact Us</Link>
             </div>    
        </div>
    )
    
}
    