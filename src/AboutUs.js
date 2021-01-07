import React, { Component } from 'react';
import './css/AboutUs.css';
import aboutUsImg from './images/sampleAboutUs.jpg';

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
                  <h1 className="body-title">Sogrem Associates is...</h1>
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
                </div>
            </div>
        )
    }
}
export default AboutUs;