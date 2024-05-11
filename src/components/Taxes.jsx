import {React, useEffect} from 'react';
import '../css/Taxes.css';
import taximg from "../images/taximg.jpg";
import AOS from "aos";
import 'aos/dist/aos.css';


export default function Taxes() {

    useEffect(()=> {
        AOS.init({duration: 2000});
    }, []);

    return(
        <div data-aos="fade-zoom-in" className='taxes--container'>
            <div className='taxes--content'>
                <div className='taxes--titleImg'>
                    <h1>Taxes and Tax Resolution</h1>
                    <img className="taxes--taxImg" src={taximg} alt="Tax Documents" />
                    <br></br>
                    <br></br>
                    <hr></hr>
                </div>
                    <div className='taxes--text'>
                        <h1>Tax Planning</h1>
                        <p>Our commitment to our tax clients for both Federal & State tax returns are:</p>
                        <ul>
                            <li>Tax owed to Uncle Sam (and/or states) must be at the least possible under the tax laws</li>
                            <li>Tax refunds, credits & deductions must be highest possible under the tax laws</li>
                        </ul>
                        <p>On no account should you pay more than you owe, and must legally rake in all your dues! - refunds, deductions, credits, etc.
                        This is our channel to proactive tax planning strategies for our business and individual clients. This includes being in touch 
                        with our clients throughout the year (via the preferred convenience of their choice) to fine tune and optimize tax benefits 
                        throughout the tax year.
                        <br></br>
                        <br></br>
                        We serve taxpayers of Maryland, DC, & Northern Virginia.  But we serve other states  without additional cost.  State returns – 
                        individual and businesses – are fully structured for your benefit. Pass through Entities (with Schedule K1) - LLCs, LLPs, S-CORPS, etc C-Corps
                        </p>
                    </div>
                    <br></br>
                    <br></br>
            </div>
            <br/>
            <br/>
        </div>
    )   
}

