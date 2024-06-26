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

    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const userMessage = form.current.message.value;

    if (!userName || !userEmail || !userMessage) {
      alert('Please fill out all required fields: First and Last Name, Email, and Message.');
      return;
    }
    
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
                                    required
                                />
                                <br />
                                <button type="submit" class="contactus--button-77" role="button">Send Message</button> 
                        </form>
                        <div className='contactus--contactInfo'>
                            <h1 style={{color:"#1D83FF"}}>Our Contacts</h1>
                            <p>Please send a message here and our representative will get back to you. Or contact us through one of these methods</p>
                            <div className='contactus--methods'>
                                <p><FaPhone /> <a href="tel:+12407866267"> +1(240)-786-6267</a> </p>
                                <p><FaMailBulk />  <a href="mailto:sogremassociates@gmail.com">sogremassociates@gmail.com</a></p>
                                <p><FaClock />  Visiting Hours: 10am - 5pm</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <br/><br/>
        </div>
    )
}
