import {React, useEffect} from 'react';
import '../css/Representation.css';
import reppic from '../images/representationpic.jpg';
import AOS from "aos";
import 'aos/dist/aos.css';


export default function Representation() {

    useEffect(()=> {
        AOS.init({duration: 2000});
    }, []);

    return (
        <div data-aos="fade-zoom-in" className='rep--container'>
            <div className='rep--content'>
                <div className='rep--titleImg'>
                    <h1>Representation</h1>
                    <img className="rep--img" src={reppic} alt="Tax Documents" />
                    <br></br>
                    <br></br>
                    <hr></hr>
                </div>
                    <div className='rep--text'>
                        <h1>Representation</h1>
                        <p>Sogrem Associates has extensive experience and skills in representing individuals and businesses at all levels of IRS situations. We manage the whole process from addressing documentation requests to carefully reviewing IRS inquiries for proper response.

                        Our professional staff fully understands IRS questions to rid you of the hassle of an IRS audit and ultimately provide you with the best possible solution. Aside from the aggravation, IRS audits can pretty costly, too. We can alleviate that burden as we guide 
                        you through the IRS audit process.</p>
                        
                    </div>
                    <br></br>
                    <br></br>
            </div>
        </div>
    )
}
