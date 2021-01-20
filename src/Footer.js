import React, {Component} from "react";
import "./css/Footer.css";
import efile from './images/efile-img.png';
import caa from './images/caa.png';
import irsea from './images/irsea.png';
import {Link} from "react-router-dom";
  

class Footer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <div className="footer-parent-div">
                    <div className="footer-base-div">
                    <div className="footer-links">
                        <Link to="/About-us">About Us</Link>
                        <br></br><br></br>
                        <Link to="/Contact-us">Contact Us</Link>
                    </div>    
                    </div>
                    <div className="footer-certifications">
                        <div className="footer-img1">
                        <img src={efile} alt=""/>
                        </div>
                        <div className="footer-img2">
                        <img src={caa} alt=""/>
                        </div>
                        <div className="footer-img3">
                        <img src={irsea} alt=""/>
                        </div>                   
                </div>
                </div>
            </div>
        )
    }    
}
export default Footer;