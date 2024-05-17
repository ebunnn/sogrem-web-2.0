import {React, useEffect} from 'react';
import '../css/AboutUs.css';
import aboutsogrem from "../images/aboutsogrem.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faChartPie, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import 'aos/dist/aos.css';


export default function AboutUs() {

    useEffect(()=> {
        AOS.init({duration: 2000});
    }, []);

    return(
        <div data-aos="fade-zoom-in" className='aboutus--container'>
            <div>
                <h1>About Sogrem Associates</h1>
                <img className="aboutus--mainimg" src={aboutsogrem} alt="Handshake Image" />
            </div>
            <div className='aboutus--text'>
                <h1>IRS ENABLING CREDENTIALS</h1>
                <p style={{color:"#717171"}} className="aboutus--irsEnablingText">SOGREM Associates tax professionals are Enrolled Agents. Enrolled Agents, as 
                    with tax attorneys and CPAs, have unlimited rights to practice at all levels 
                    of the IRS and are the only federally licensed tax professionals - by the US 
                    Treasury. CPAs and Attorneys are state licensed. SOGREM is also an authorized 
                    IRS Certified Acceptance Agents (CAA) and Authorized efile Provider aka Electronic 
                    Return Originator (ERO).</p>
            </div>
            <div className='aboutus--ourservices-container'>
                <h1>Our Services</h1>
                    <div className='aboutus--service-container'>
                        <div className='aboutus--service'>
                            <FontAwesomeIcon icon={faCalculator} style={{fontSize:"4rem"}}/>
                            <h4>Tax Preparation</h4>
                            <p>We prepare everything you need for your tax return</p>       
                        </div>
                        <div className='aboutus--service'>
                            <FontAwesomeIcon icon={faMoneyCheckAlt} style={{fontSize:"4rem"}}/>
                            <h4>Wealth Management</h4>
                            <p>We prepare everything you need for your tax return</p>       
                        </div>
                        <div className='aboutus--service'>
                            <FontAwesomeIcon icon={faChartPie} style={{fontSize:"4rem"}}/>
                            <h4>Tax Preparation</h4>
                            <p>We prepare everything you need for your tax return</p> 
                        </div>
                    </div>
                    
                


            </div>
        

        </div>
    )
}
