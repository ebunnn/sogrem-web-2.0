import React from "react";
import "../css/Navbar.css";
import {Link} from "react-router-dom";
import salogo from "../images/salogo.png";


export default function Navbar() {
    return (
        <div className="navbar--container">
            {/* <Link to="/"><img className="navbar--logo" src={salogo} alt="Website logo" /></Link> */}
            <ul className="navbar--links">
                    <li><a href="javascript:void(0);"><Link to="/">Home</Link></a></li>
                    <li><a href="javascript:void(0);"><Link to="/about-us">About Us</Link></a></li>
                    <li><a href="javascript:void(0);"><Link to="/taxes">Taxes</Link></a></li>
                    <li><a href="javascript:void(0);"><Link to="/itin">ITINs</Link></a></li>
                    <li><a href="javascript:void(0);"><Link to="/representation">Representation</Link></a></li>
                    <li><a href="javascript:void(0);"><Link to="/business-advisory">Business Advisory</Link></a></li>
                    <li><a href="javascript:void(0);"><Link to="/contact-us">Contact Us</Link></a></li>
            </ul>
        </div>
    )
}