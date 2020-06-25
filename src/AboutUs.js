import React, { Component } from 'react';
import './css/AboutUs.css';

class AboutUs extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <p>this page is about us</p>
                    <footer className="about-us-footer">
                        <div>
                            <p>
                                Created by Ebun Oludemi
                            </p>
                        </div>
                    </footer>
            </div>
        )
    }
}
export default AboutUs;