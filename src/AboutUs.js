import React, { Component } from 'react';
import './css/AboutUs.css';
import aboutUsImg from './images/sampleAboutUs.jpg';
import {Link} from "react-router-dom";

class AboutUs extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return(
            <div>
                <div className="about-title">
                    <h1>About Us</h1>
                </div>
                <div className="about-us-img">
                    {<img src={aboutUsImg} alt="aboutUsimg" />}
                </div>
                <div>
                  <div>
                  </div>
                    <div className="whole-aboutus-body">
                        <div className="aboutus-body">
                            <h1>IRS Enabling Credentials</h1>
                            <p>SOGREM Associates tax professionals are <a href="https://irs.treasury.gov/rpo/rpo.jsf" target="_blank" rel="noopener noreferrer"> Enrolled Agents. </a>
                                Enrolled Agents, as with tax attorneys and CPAs, have unlimited rights to practice at all levels of the IRS and are the only federally 
                                licensed tax professionals - by the US Treasury. CPAs and Attorneys are state licensed.<br></br>
                                <br></br>
                                SOGREM is also an authorized IRS Certified Acceptance Agents (CAA) and <a href="https://www.irs.gov/efile-index-taxpayer-search?zip=20724&state=23&page=1" target="_blank" rel="noopener noreferrer"> Authorized efile Provider</a> aka 
                                Electronic Return Originator (ERO).</p>
                        </div>    
                    </div> 
                        <div className="founders-div">
                            <h1>Meet the Founders of Sogrem Associates</h1>
                            <div className="founder-cards">
                                <div className="founder1">
                                    <h3>Olusoga Oludemi</h3>
                                    <h5>Principal</h5>
                                    <p></p>
                                </div> 
                                <div className="founder2">
                                    <h3>Oluremi Oludemi</h3>
                                    <h5>Senior Associate</h5>
                                    <p></p>        
                                </div>  
                            </div>
                        </div>
                </div>
                <div className="more-info">
                    <p>Need more information? Please call the Hot Line: (240)-786-6267 or visit our <Link to="/Contact-us">Contact Us</Link> page.</p>
                </div>  
            </div>
        )
    }
}
export default AboutUs;