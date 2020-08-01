import React, { Component } from 'react';
import './css/ITIN.css';
import itinimg from './images/itinpic.jpg';
//import { render } from '@testing-library/react';


class ITIN extends Component {
    //constructor(props) {
        //super(props)
    //}
    render() {
        return(
            <div>
                <div className="itin-title">
                    <h1>ITIN - Individual Tax<br></br>Identification Number</h1>
                </div>
                <div className="itin-image">
                    <img src={itinimg} alt="" />
                </div>
                <div className="itin-body">
                    <h1>What is an ITIN:</h1>
                    <p>An ITIN is a nine-digit number issued by the Internal Revenue Service (IRS) to individuals who are
                       required, for US tax purposes,  to have a Tax Payer Identification number but who do not have, and are
                       not eligible to obtain an SSN. The ITIN is for Federal tax purposes only.</p>
                
                    <h1>Who Must Apply:</h1>
                    <p>Any individual who is not eligible to obtain Social Security Number (SSN) but who must furnish a taxpayer
                       identification number must apply for an ITIN on Form W-7 (current version)</p>
                </div>
                <div className="itin-body2"> 
                    <h1>How to Apply:</h1>
                    <p>If you are applying for an ITIN to file a tax return, you must now attach your original, completed return to
                       request an ITIN. After your W-7 has been processed, the IRS will assign an ITIN to the return and
                       process the return.<br></br>
                       <br></br>
                       If you are not required to file a tax return or if you fail to file a completed tax return with your Form W-7,
                       you will not be issued an ITIN, unless you meet one of the exceptions as described ion the instructions of
                       Form W-7.<br></br>
                       <br></br>
                       An ITIN does not entitle you to social security benefits and does not change your immigration status or
                       your right to work in the United States. Also, individual filing tax returns using and ITIN are not eligible for
                       the earned income credit (EIC).    
                       </p>
                </div>  
                <div className="itin-body3">
                    <h1>What to Submit:</h1>
                    <p>
                        <ol>
                            <li>Completed Form W-7, appropriately signed by the applicant or his/her representative (parent,
                                court appointed agent or power of attorney</li>
                            <li>Your Original, completed tax return(s) for which the ITIN is needed</li> 
                            <li>The original documents or certified copies of documents that substantiate the information
                                provided on the Form W-7. Supporting documentation must provide, for example:
                                <ul>
                                    <li>Name</li>
                                    <li>Date of Birth</li>
                                    <li>Photograph(recent)</li>
                                    <li>Country of Citizenship</li>
                                </ul>
                                </li>
                            <li>Original valid passport. A passport is the only document that stands alone in satisfying item 3
                                above and support your claim of foreign status</li>       
                        </ol>
                    </p>
                    <p>If you do not submit an original valid passport, you must provide a combination of (at least two or more)
                       of the following:
                       <ul>
                           <li>National Identification card (must show photo, name, and current address, date of
                               birth and expiration date).</li>
                           <li>US Driver's License</li>   
                           <li>Civil birth certificate</li>
                           <li>Foreign Driver's License</li>
                           <li>US state ID</li>
                           <li>Foreign voter's registration card</li>
                           <li>US military ID</li>
                           <li>Foreign military ID</li>
                           <li>Visa</li>
                           <li>US Citizenship and Immigration Services (USCIS) photo ID</li>
                           <li>Medical records (dependents only) under 6 years of age</li>
                           <li>School records (dependents and/or student only under age 18</li>
                       </ul>
                       </p>
                </div> 
                <div className="itin-body4">
                    <h1>Where &amp; How to Apply:</h1>
                    <p>In person at any IRS Tax Payer Assistance Center. You can also use a Certifying Acceptance Agent.</p>
                    <h3>Certifying Acceptance Agent (CAA) or Acceptance Agent (CA)</h3>
                    <p>There are two types of Agents accredited by IRS:
                        <ol>
                            <li>Certifying Acceptance Agent (CAA)</li>
                            <li>Acceptance Agent (CA)</li>
                        </ol>
                        Certifying Acceptance Agents are in more comprehensive agreement with IRS and have the authority to
                        certify your original documents without your having to mail them to IRS. They return your original
                        documents to you right away. Other non certifying acceptance agent may need to get your documents
                        certified by either a CAA or mail the originals to IRS for verification. This takes more time and/or cost
                        you more therefore get smart, use a CAA, use SOGREM for all your ITIN issues.
                    </p>
                    <h3>SOGREM Associates is a Certifying Acceptance Agent: Olusoga Oludemi dba Sogrem Associates (put link here)</h3>

                </div>   
            </div>

        )
    }
}

export default ITIN;