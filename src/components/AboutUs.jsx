import {React, useEffect} from 'react';
import '../css/AboutUs.css';
import aboutUsImg from '../images/sampleAboutUs.jpg';
import aboutsogrem from "../images/aboutsogrem.jpg";
import {Link} from "react-router-dom";
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
                <h1 style={{fontSize:"3.5rem"}}>About Sogrem Associates</h1>
                <img className="aboutus--mainimg" src={aboutsogrem} alt="Handshake Image" />
            </div>
            <div className='aboutus--text'>
                <h1 style={{fontSize:"3.5rem"}}>IRS ENABLING CREDENTIALS</h1>
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
        // <div>
        //     <div className="about-title">
        //         <h1>About Us</h1>
        //     </div>
        //     <div className="about-us-img">
        //         {<img src={aboutUsImg} alt="aboutUsimg" />}
        //     </div>
        //     <div>
        //     <div>
        //     </div>
        //         <div className="whole-aboutus-body">
        //             <div className="aboutus-body">
        //                 <h1>IRS Enabling Credentials</h1>
        //                 <p>SOGREM Associates tax professionals are <a href="https://irs.treasury.gov/rpo/rpo.jsf" target="_blank" rel="noopener noreferrer"> Enrolled Agents. </a>
        //                     Enrolled Agents, as with tax attorneys and CPAs, have unlimited rights to practice at all levels of the IRS and are the only federally 
        //                     licensed tax professionals - by the US Treasury. CPAs and Attorneys are state licensed. SOGREM is also an authorized IRS Certified Acceptance Agents (CAA) 
        //                     and <a href="https://www.irs.gov/efile-index-taxpayer-search?zip=20724&state=23&page=1" target="_blank" rel="noopener noreferrer"> Authorized efile Provider</a> aka 
        //                     Electronic Return Originator (ERO).<br/>
        //                     <br/>
        //                     We have been serving our numerous satisfied clients since 2010. Our core skills for individuals and businesses--tax planning, tax preperation
        //                     and IRS/state representations.
                            
        //                     </p>
        //             </div>    
        //         </div> 
        //             <div className="founders-div">
        //                 <h1>Meet the Founders of Sogrem Associates</h1>
        //                 <div className="founder-cards">
        //                     <div className="founder1">
        //                         <h3>Olusoga Oludemi</h3>
        //                         <h5 style={{color: "gray"}}>EA &amp; FCA</h5>
        //                         <h5>Principal</h5>
        //                         <p></p>
        //                     </div> 
        //                     <div className="founder2">
        //                         <h3>Oluremi Oludemi</h3>
        //                         <h5 style={{color: "gray"}}>BA &amp; FCA</h5>
        //                         <h5>Senior Associate</h5>
        //                         <p></p>        
        //                     </div>  
        //                 </div>
        //             </div>
        //     </div>
        //     <div className="more-info">
        //         <p>Need more information? Please call the number: (240)-786-6267 or visit our <Link to="/Contact-us">Contact Us</Link> page.</p>
        //     </div>  
        // </div>
    )
}
