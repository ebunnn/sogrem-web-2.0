import React, { Component } from 'react';
import './css/AboutUs.css';
/*import mainimg from './images/IMG_3086.JPG';*/

class AboutUs extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <p>this page is about us</p>
                {/*<img src={mainimg} alt="mainimg" />*/}
            </div>
        )
    }
}
export default AboutUs;