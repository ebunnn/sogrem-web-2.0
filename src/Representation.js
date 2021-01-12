import React, { Component } from 'react';
import './css/Representation.css';
import reppic from './images/representationpic.jpg';
import BodyBox from "./BodyBox";
import ScrollButtonTwo from "./ScrollButton2";

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
            </div> 
        )
    }
}
export default Representation; 