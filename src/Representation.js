import React, { Component } from 'react';
import './css/Representation.css';
import reppic from './images/representationpic.jpg';
import BodyBox from "./BodyBox";
import {Link} from "react-router-dom";

class Representation extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <div className="rep-title">
                    <h1>Representation</h1>
                </div>
                <div className="rep-image">
                    <img src={reppic} alt="" />
                </div>
                    
                <div className="rep-body" id="scroll-two">
                    <BodyBox header="Representation"
                    paragraph1="Sogrem Associates has extensive experience and skills in representing individuals and
                    businesses at all levels of IRS situations. We manage the whole process from
                    addressing documentation requests to carefully reviewing IRS inquiries for proper
                    response."
                     
                    paragraph2="Our professional staff fully understands IRS questions to rid you of the hassle of an IRS
                    audit and ultimately provide you with the best possible solution. Aside from the
                    aggravation, IRS audits can pretty costly, too. We can alleviate that burden as we guide
                    you through the IRS audit process."
                    />
                </div>
                <div className="more-info">
                    <p>Need more information? Please call the Hot Line: (240)-786-6267 or visit our <Link to="/Contact-us">Contact Us</Link> page.</p>
                </div>   
            </div> 
        )
    }
}
export default Representation; 