import React, {Component} from 'react';
import "./ResponsiveNav.css";
import {FaBars} from 'react-icons/fa';
import {Link} from "react-router-dom";


class ResponsiveNav extends Component {
    constructor() {
        super() 
        this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
        this.state = {
            isHamburgerDown: false
        }
    }
    handleHamburgerClick() {
        if (this.state.isHamburgerDown === false) {
            this.setState({isHamburgerDown: true})
        } else {
            this.setState({isHamburgerDown: false})
        }
    }
    render() {
        if(this.state.isHamburgerDown === false) {
            return (  
                <div>  
                    <div className="whole-nav-bar">
                                <div>
                                    <h3 className="navbar-title">Sogrem Associates</h3>
                                </div>  
                                <div>
                                    <a className="bars-icon" onClick={this.handleHamburgerClick}><FaBars/></a>
                                </div>
                    </div>
                </div> 
                )
        } else {
            return(
                <div>
                    <div className="whole-nav-bar">
                            <div>
                                <h3 className="navbar-title">Sogrem Associates</h3>
                            </div>  
                            <div>
                                <a className="bars-icon" onClick={this.handleHamburgerClick}><FaBars/></a>
                            </div>
                        
                        <div className="responsive-nav-div">
                            <Link to="/" className="each-responsive-btn">Home</Link>
                            <Link to="/Taxes" className="each-responsive-btn">Taxes</Link>
                            <Link to="/ITIN" className="each-responsive-btn">ITINs</Link>
                            <Link to="/Representation" className="each-responsive-btn">Representation</Link>
                            <Link to="/BusinessAdvisory" className="each-responsive-btn">Business Advisory</Link>
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}


export default ResponsiveNav;