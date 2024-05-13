import {React, useEffect} from "react";
import "../css/Home.css"
import mainimage from "../images/main-image.jpg";
import salogo from "../images/salogo.png";
import efile from "../images/irsefile.png";
import irsea from '../images/irsea.png';
import caa from "../images/caa.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Home() {

    useEffect(()=> {
        AOS.init({duration: 2000});
    }, []);

    return (
        <div className="home--container">
            <div className="home--header">
                <div className="home--header-content">
                    <div data-aos="fade-zoom-in" className="home--text">
                        <div data-aos="fade-zoom-in" className="home--logo">
                            <img data-aos="fade-zoom-in" className="home--headerlogo" src={salogo} alt="logo" />
                            <h4 style={{letterSpacing:"2px", fontSize:"1.7rem", fontWeight:"300"}}>SOGREM ASSOCIATES</h4>
                        </div>
                        <h2 className="home--title">PROFESSIONAL TAX PREPARATION SERVICE<br></br>IRS + 50 STATES & DC</h2>
                        <h2 className="home--title2">PROFESSIONAL TAX PREPARATION SERVICE <br></br> IRS + 50 STATES & DC</h2>
                    </div>
                    <img data-aos="fade-zoom-in" className="home--headerimg" src={mainimage} alt="header image" />
                </div>

            </div>
            <div className="home--certifications-container" > 
                    <img className="home--certificationimg" src={efile} alt="IRS efile provider certification" />
                    <img className="home--certificationimg" src={caa} alt="Certifying acceptance agent certification" />
                    <img className="home--certificationimg" src={irsea} alt="IRS enrolled agent certification" />
            </div>
            <div className="home--info-container1">
                <div className="home--info-text1">
                    <h1 style={{fontSize:"3.5rem"}}>Welcome!</h1>
                    <p>You are heartily welcomed to our website. We see your visit as a privileged
                       opportunity to showcase the solutions we provide to our numerous clients in 
                       the Maryland, DC, Virginia and West Virginia areas. We believe you will be 
                       able to make up your mind about us within the possible shortest time – our 
                       target is 3 minutes.</p>
                </div>
                <div className="home--info-text2">
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <h1 style={{fontSize:"3.5rem"}}>What we do</h1>
                        <p style={{width:"70%"}}>We fix tax problems & tax obligations. SOGREM is wholesomely involved 
                        essentially in tax & tax related solutions.</p>
                </div>
                    
                    <div style={{width:"70%"}}>
                        <h3> Our professional services include</h3>
                        <hr style={{width:"95%", height:"1%", background:"white", border:"none"}}></hr>
                        <h5><FontAwesomeIcon icon={faCheck} /> IRS/State individual and business tax preparation</h5>
                        <hr style={{width:"95%", height:"1%", background:"white", border:"none"}}></hr>
                        <h5><FontAwesomeIcon icon={faCheck} /> IRS/State tax resolutions, etc.</h5>
                        <hr style={{width:"95%", height:"1%", background:"white", border:"none"}}></hr>
                        <h5><FontAwesomeIcon icon={faCheck} /> Business advisory services</h5>
                    </div>
                </div>

            </div>
            <div className="home--info-container2">
                <div style={{width:"70%"}}>
                    <h1 style={{fontSize:"3.5rem"}}>Our Service Delivery Platform</h1>
                    <p>SOGREM Associates tax professionals are US Treasury Circular 230 Practitioners and 
                       fully governed by the Office of Professional Responsibility (OPR). We offer our tax 
                       services within the confines of the rigorously regulated monitoring banner of the US 
                       Treasury(IRS). Hence your peace of mind is always assured.<br/><br/>
                       
                       With us, you only pay what you are legally obligated to pay and you receive all you are 
                       entitled to - deductions, credits, refunds or waivers, to the last penny! Again, you always 
                       have the assurance and peace of mind that you are in full compliance with the tax laws and 
                       no backdoor or aftermath negative surprises.</p>
                </div>
            </div>
            <div className="home--info-container3">
                <div style={{width:"70%"}}>
                    <h1 style={{fontSize:"3.5rem"}}>Fees Affordability Assurance</h1>
                    <p>Our charges are always the best you can receive within the industry and we are ready to match 
                        any price (on similar service) you get from other Enrolled Agents, Tax Attorneys and CPAs. 
                        Please feel free to go through our web pages to see what we have to offer you. We are extremely 
                        flexible and we always accommodate your peculiar or special situations.</p>
                </div>
            </div>
        </div>
    )
}