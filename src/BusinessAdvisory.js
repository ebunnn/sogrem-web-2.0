import React, { Component } from 'react';
import './css/BusinessAdvisory.css';
import busadpic from './images/businessadpic.jpg';
import {Link} from "react-router-dom";    
import { FaCheck } from 'react-icons/fa';

class BusinessAdvisory extends Component {
    // constructor() {
    //     super()
    // }
    render() {
        return(
            <div>
                <div className="businessad-title">
                    <h1>Business Advisory Services</h1>
                </div>
                <div className="businessad-title2">
                    <h1>Business Advisory<br/>Services</h1>
                </div>
                <div className="businessad-image">
                    <img src={busadpic} alt="business advisory picture" />
                </div>
                
                <div className="whole-businessad-body">
                    <div className="businessad-body">
                        <h1>Business Advisory</h1>
                        <p>We provide consulting assistance clients in arears of:<br></br>
                        <br></br>
                        Business Registration in all 50 states &amp; DC, viz <br></br><br></br>

                        &emsp;<FaCheck /> Sole Proprietor<br></br>
                        &emsp;<FaCheck /> Partnership<br></br>
                        &emsp;<FaCheck /> Limited Liability Companies<br></br>
                        &emsp;<FaCheck /> Small Corporations<br></br>
                        &emsp;<FaCheck /> C Corporations<br></br>
                        <br></br>
                        Business Permits &amp; Licenses (with exceptions)<br></br>
                        <br></br>
                        IRS Employer Identification Number (EIN)  
                        </p>
                    </div>
                </div>
                <div className="more-info">
                    <p>Need more information? Please call the Hot Line: (240)-786-6267 or visit our <Link to="/Contact-us">Contact Us</Link> page.</p>
                </div>          
            </div>
        )
    }
}
export default BusinessAdvisory;