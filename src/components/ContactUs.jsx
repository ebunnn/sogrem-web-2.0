import {React, useEffect, useRef} from 'react';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';
import contactusimg from '../images/contactusimg.jpg';
import {  FaPhone, FaClock, FaMailBulk, FaHome } from 'react-icons/fa';
import AOS from "aos";
import 'aos/dist/aos.css';


export default function ContactUs() {

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message Sent! We will get back to you as soon as possible");
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    useEffect(()=> {
        AOS.init({duration: 2000});
    }, []);

    return (
        <div data-aos="fade-zoom-in" className='contactus--container'>
                <div className="contactus--formContainer">
                    <img className="contactus--img" src={contactusimg} alt="" />
                    <h1 className="contactus--title">Contact Us</h1>
                    <div className='contactus--content'>
                        <form ref={form} style={{textAlign:"left"}} onSubmit={sendEmail}>
                            <label className="contactus--label">First and Last Name <span style={{color:"red"}}>*</span></label><br />
                            <input
                                    type="text"
                                    className="contactus--textLabel"
                                    placeholder="First and Last Name"
                                    name="user_name"
                                    // onChange={(e) => setSenderName(e.target.value)}
                                    required
                                />
                                <br />
                                <div className='contactus--email-and-phone'>
                                    <div style={{display:"flex", flexDirection:"column"}}>
                                        <label className="contactus--label">Email  <span style={{color:"red"}}>*</span></label>
                                        <input
                                            type="text"
                                            className="contactus--textLabel"
                                            placeholder="Your email"
                                            name="user_email"
                                        // onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div style={{display:"flex", flexDirection:"column"}}>
                                        <label className="contactus--label">Phone Number</label>
                                        <input
                                            type="text"
                                            className="contactus--textLabel"
                                            placeholder="Your phone number"
                                            name="user_phone"
                                            //onChange={(e) => setPhoneNumber(e.target.value)}
                                            required
                                        />
                                        <br />
                                    </div>
                                </div>
                                <label className="contactus--label">Message <span style={{color:"red"}}>*</span></label><br />
                                <textarea
                                    type="text"
                                    className="contactus--textLabel"
                                    placeholder="Type your message here..."
                                    name="message"
                                    //onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                                <br />
                                <button type="submit" class="contactus--button-77" role="button">Send Message</button>  {/*<input type="submit" class="contactus--button-77" role="button" value="Send Message" /> */}
                        </form>
                        <div className='contactus--contactInfo'>
                            <h1 style={{color:"#1D83FF"}}>Our Contacts</h1>
                            <p>Please send a message here and our representative will get back to you. Or contact us through one of these methods</p>
                            <div className='contactus--methods'>
                                <ul style={{listStyleType:"none"}}>
                                    <li><FaPhone /> <a href="tel:+12407866267"> +1(240)-786-6267</a> </li>
                                    <li><FaMailBulk />  <a href="mailto:sogremassociates@gmail.com">sogremassociates@gmail.com</a></li>
                                    <li><FaClock />  Visiting Hours: 10am - 5pm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <br/><br/>
        </div>
    )
}
