import React, { Component } from 'react';
import '../css/Contact.css';
import contactimg from '../images/contact-image-cropped.jpg';
import {  FaPhone, FaClock, FaMailBulk, FaHome } from 'react-icons/fa';

class Contact extends Component {
    // constructor() {
    //     super()
    // }
    //className="freebirdFormviewerViewFormContentWrapper"
    render() {
        const iframeStyles = {
            background: "transparent",
            border: "1px solid #ccc"
        }
        return (
            <div>
                <div>
                    <h1 className="contact-title">Contact Us</h1>
                </div>
                <div className="contact-img">
                    <img src={contactimg} alt="" />
                </div>
                <div className="contact-form">
                    <h3>Leave your message here and our representative will get back to you:</h3> 
                    <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrgNuTNMNsnjGRqh?backgroundColor=cyan" frameborder="0" onmousewheel="" width="80%" height="1076" style={iframeStyles}></iframe>
                </div>
                <br></br><br></br>
                    <div className="contact-info"> 
                        <div className="telephone">
                            <h1>Telephone <FaPhone /></h1>
                            <hr></hr><br></br>
                            <h3><a href="tel:2407866267">(240)786-6267</a></h3><br></br>
                            <h2>Telephone Hours <FaClock /></h2>
                            <hr></hr>
                            <h3>Mon-Fri</h3><br></br>
                            <h3>9AM-5PM</h3>                       
                        </div>
                        <div className="email">
                            <h1>Email <FaMailBulk /></h1>
                            <hr></hr><br></br>
                            <h3 className="email-links"><a href="mailto:sogremassociates@sogrem.com">sogremassociates@sogrem.com</a></h3>
                            <h3 className="email-links"><a href="mailto:sogremassociates@gmail.com">sogremassociates@gmail.com</a></h3>
                            <br></br>
                            <h2>Email Hours <FaClock /></h2>
                            <hr></hr>
                            <h3>Anytime</h3>
                        </div>
                    </div> 
                        <div className="address">
                            <h1>Address <FaHome /></h1>
                            <hr></hr><br></br>
                            <h3>228 Linden Ridge Road, Laurel, MD 20724</h3><br></br>
                            <h2>Visiting Hours <FaClock /></h2>
                            <hr></hr>
                            <h3>9AM-5PM</h3>
                        </div>  
            </div>
            
        )
   
    }
}


export default Contact;