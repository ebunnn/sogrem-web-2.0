import React, { Component } from 'react';
import '../css/Taxes.css';
import taxesimg from '../images/taxesimg.jpg';
import {Link} from "react-router-dom";
import taximg from "../images/taximg.jpg";



export default function Taxes() {
    return(
        <div className='taxes--container'>
            <div className='taxes--content'>
                <div className='taxes--titleImg'>
                    <h1>Taxes and Tax Resolution</h1>
                    <img className="taxes--taxImg" src={taximg} alt="Tax Documents" />
                </div>
                    <div className='taxes--text'>
                        <h3>Tax Planning</h3>
                        <p>Our commitment to our tax clients for both Federal & State tax returns are:</p>
                        <ul>
                            <li>Tax owed to Uncle Sam (and/or states) must be at the LEAST possible under the tax laws</li>
                            <li>Tax refunds, credits & deductions must be HIGHEST possible under the tax laws</li>
                        </ul>
                        <p>On no account should you pay more than you owe, and must legally rake in all your dues! - refunds, deductions, credits, etc.
                        This is our channel to proactive tax planning strategies for our business and individual clients. This includes being in touch 
                        with our clients throughout the year (via the preferred convenience of their choice) to fine tune and optimize tax benefits 
                        throughout the tax year.

                        We serve taxpayers of Maryland, DC, & Northern Virginia.  But we serve other states  without ADDITIONAL cost.  State returns – 
                        individual and businesses – are fully structured for your benefit. Pass through Entities (with Schedule K1) - LLCs, LLPs, S-CORPS, etc C-Corps
                        </p>
                    </div>
            </div>
            <br/>
            <br/>
        </div>
    )







            //     <div className="taxes-title">
            //         <h1>Taxes &amp; Tax Resolutions</h1>
            //     </div>
            //     <div className="taxes-image">
            //         <img src={taxesimg} alt=""/>
            //     </div>
            //     <div className="whole-taxes-body">
            //         <div className="taxes-body">
            //             <h1>Tax Planning</h1>
            //             <p>Our commitment to our tax clients for both Federal &amp; State tax returns are:
            //                 <ul>
            //                     <li>tax owed to Uncle Sam (and/or states) must be at the LEAST possible under the tax laws</li>
            //                     <li>tax refunds, credits &amp; deductions must be HIGHEST possible under the tax laws</li>
            //                 </ul>
            //                 On no account should you pay more than you owe, and must legally rake in all your dues! -
            //                 refunds, deductions, credits, etc.<br></br>
            //                 <br></br>
            //                 This is our channel to proactive tax planning strategies for our business and individual clients.
            //                 This includes being in touch with our clients throughout the year (via the preferred convenience
            //                 of their choice) to fine tune and optimize tax benefits throughout the tax year:
            //             </p>
            //             <h3>
            //             We serve taxpayers in all 50 states &amp; DC. <br/>State returns – individual and businesses – are fully
            //             structured for your benefit. Pass through Entities (with Schedule K1) - LLCs, LLPs, S-CORPS, etc
            //             C-Corps
            //             </h3>
            //         </div>
            //         <div className="taxes-uploads">
            //             <div className="taxes-upload-2020">
            //                 <h1>UPLOAD YOUR 2020 TAX DOCUMENT(S)</h1>
            //                 <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" className="previous-years-css" src="https://airtable.com/embed/shr7XCujr0Exk1C9t?backgroundColor=cyan" frameborder="0" onmousewheel="" style={iframeStyles}></iframe>

            //             </div>
            //             <div className="taxes-upload-years">
            //                 <h1>UPLOAD PREVIOUS YEARS DOCUMENT(S)</h1>
            //                 <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" className="previous-years-css" src="https://airtable.com/embed/shrgX39jKCojCA40N?backgroundColor=cyan" frameborder="0" onmousewheel="" style={iframeStyles}></iframe>

            //             </div>
            //         </div>
            //     </div>
            //     <div className="more-info">
            //         <p>Need more information? Please call the number: (240)-786-6267 or visit our <Link to="/Contact-us">Contact Us</Link> page.</p>
            //     </div>   
            // </div>
        
}

