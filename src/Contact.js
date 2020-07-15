import React, { Component } from 'react';
import './css/Contact.css';
import contactimg from './images/contact-image-cropped.jpg';
import { FaBeer, FaArrowDown, FaCaretDown, FaSearch, FaArrowRight, FaAngleDoubleRight, FaPhone, FaClock, FaMailBulk, FaMailchimp, FaHome } from 'react-icons/fa';

class Contact extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
                <div>
                    <h1 className="contact-title">Contact Us</h1>
                </div>
                <div className="contact-img">
                    <img src={contactimg} alt="" />
                </div>
                <div className="contact-info"> 
                    <div className="telephone">
                        <h1>Telephone <FaPhone /></h1>
                        <hr></hr><br></br>
                        <h3>(240)-786-6267</h3><br></br>
                        <h2>Telephone Hours <FaClock /></h2>
                        <hr></hr>
                        <h3>Mon-Fri</h3><br></br>
                        <h3>10AM-5PM</h3>                       
                    </div>
                    <div className="email">
                        <h1>Email <FaMailBulk /></h1>
                        <hr></hr><br></br>
                        <h3>sogremassociates@gmail.com</h3><br></br>
                        <h2>Email Hours <FaClock /></h2>
                        <hr></hr>
                        <h3>Anytime</h3>
                    </div>
                </div> 
                    <div className="address">
                        <h1>Address <FaHome /></h1>
                        <hr></hr><br></br>
                        <h3>228 Linden Ridge Road, Laurel, MD 20724</h3><br></br>
                        <h2>Visting Hours <FaClock /></h2>
                        <hr></hr>
                        <h3>10AM-5PM</h3>
                    </div>
            </div>
            
        )
   
    }
}


export default Contact;