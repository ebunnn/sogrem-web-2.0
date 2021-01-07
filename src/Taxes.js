import React, { Component } from 'react';
import './css/Taxes.css';
import taxesimg from './images/taxesimg.jpg';
//import { render } from '@testing-library/react';


class Taxes extends Component {
    //constructor(props) {
        //super(props)
    //}
    render() {
        return(
            <div>
                <div className="taxes-title">
                    <h1>Taxes &amp; Tax Resolutions</h1>
                </div>
                <div className="taxes-image">
                    <img src={taxesimg} alt=""/>
                </div>
                <div className="whole-taxes-body">
                    <div className="taxes-body">
                        <h1>Tax Planning</h1>
                        <p>Our commitment to our tax clients for both Federal &amp; State tax returns are:
                            <ul>
                                <li>tax owed to Uncle Sam (and/or states) must be at the LEAST possible under the tax laws</li>
                                <li>tax refunds, credits &amp; deductions must be HIGHEST possible under the tax laws</li>
                            </ul>
                            On no account should you pay more than you owe, and must legally rake in all your dues! -
                            refunds, deductions, credits, etc.<br></br>
                            <br></br>
                            This is our channel to proactive tax planning strategies for our business and individual clients.
                            This includes being in touch with our clients throughout the year (via the preferred convenience
                            of their choice) to fine tune and optimize tax benefits throughout the tax year:
                        </p>
                        <h3>
                        We serve taxpayers of Maryland, DC, &amp; Northern Virginia.  But we serve other
                        states  without ADDITIONAL cost.  State returns – individual and businesses – are fully
                        structured for your benefit. Pass through Entities (with Schedule K1) - LLCs, LLPs, S-CORPS, etc
                        C-Corps
                        </h3>
                    </div>
                    <div className="taxes-upload-2020">
                        <h1>UPLOAD YOUR 2020 TAX DOCUMENT(S)</h1>
                        <form action="#page">
                            <input type="file" id="w7File" name="filename" />
                            <input type="submit"/>
                        </form>
                    </div>
                    <div className="taxes-upload-years">
                        <h1>UPLOAD OTHER YEAR(S) DOCUMENT(S)</h1>
                        <form action="#page">
                            <input type="file" id="w7File" name="filename" />
                            <input type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Taxes;