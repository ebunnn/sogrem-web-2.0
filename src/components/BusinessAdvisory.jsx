import {React, useEffect} from 'react';
import '../css/BusinessAdvisory.css';
import busadpic from '../images/businessadpic.jpg';
import { FaCheck } from 'react-icons/fa';
import AOS from "aos";
import 'aos/dist/aos.css';

export default function BusinessAdvisory() {

    useEffect(()=> {
        AOS.init({duration: 2000});
    }, []);

    return (
        <div data-aos="fade-zoom-in" className='businessad--container'>
            <div className='businessad--content'>
                <div className='businessad--titleImg'>
                    <h1>Business Advisory</h1>
                    <img className="businessad--img" src={busadpic} alt="Tax Documents" />
                    <br></br>
                    <br></br>
                    <hr></hr>
                </div>
                    <div className='businessad--text'>
                        <h1>Business Advisory</h1>
                        <p>We provide consulting assistance clients in areas of:
                            <br/><br/>
                            Business Registration in all 50 states and DC, 
                            <ul>
                                <li><FaCheck /> Sole Proprietor</li>
                                <li><FaCheck /> Partnership</li>
                                <li><FaCheck /> Limited Liability Companies</li>
                                <li><FaCheck /> Small Corporations</li>
                                <li><FaCheck /> C Corporations</li>
                            </ul>         
                            <br></br>
                            Business Permits and Licenses (with exceptions)<br></br>
                            <br></br>
                            IRS Employer Identification Number (EIN)  
                         </p>
                    </div>
                    <br></br>
                    <br></br>
            </div>
        </div>
    )
}