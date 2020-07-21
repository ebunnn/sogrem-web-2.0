import React, { Component } from 'react';
import './App.css';
import Contact from './Contact';
import ITIN from './ITIN';
import AboutUs from './AboutUs';
import SignUp from './SignUp';
import Login from './Login';
import { FaBeer, FaArrowDown, FaCaretDown, FaSearch, FaArrowRight, FaAngleDoubleRight } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div>
              {/*<a href="#placeholder" className="main-title">Sogrem Associates</a>*/}
              <div className="Nav-bar">
                <Link to="/Home">Home</Link>
                <Link to="/ITIN">ITIN</Link>
                <Link to="/Contact-us">Contact Us</Link>
                <Link to="/About-us">About Us</Link>
                <Link to="#Services">Services<FaCaretDown /></Link>
                <div className="dropdown">
                  <button className="dropbtn">Taxes<FaCaretDown /></button>
                  <div className="dropdown-content">
                    <div className="dropdown-across">
                      <h4>Individual</h4>
                      <a href="#Example1">1040</a>
                      <a href="#Example2">1040NR</a>
                      <a href="#Example3">1040X</a>
                    </div>
                    <div className="dropdown-across">
                      <div className="dropdown-across2">
                        <h4>Businesses</h4>
                        <a href="#Example4">1065 (Partnerships)</a>
                        <a href="#Example5">1120s (SCorps)</a>
                        <a href="#Example6">1120 (CCorps)</a>
                      </div>
                    </div>
                    <div className="dropdown-across">
                      <div className="dropdown-across2">
                        <h4>Fudiciary</h4>
                        <a href="#Example7">1041</a>
                        <a href="#Example8">1044</a>
                        <a href="#Example9">Social Security</a>
                      </div>
                    </div>
                    {/*<div className="dropdown-across">
                      <div className="dropdown-across2">
                        <h4>Immigration</h4>
                        <a href="#Example10">Immigration Consultation</a>
                        <a href="#Example11">Immigration Doc Prep</a>
                      </div>
    </div>*/}             
                  </div>
                </div>
                    {/*<div className="signup-login">
                      <Link to="/Sign-up" className="sign-up-btn">Sign Up</Link>
                      <Link to="/Login" className="login-btn">Login</Link>
                    </div>
                      <div className="search-bar">
                        <form>
                          <input type="search" placeholder="Search..."/>
                          <button className="search-btn"><FaSearch /></button>
                        </form>
                      </div>*/}
                  <div>
                    <h3 className="title-navbar">Sogrem Associates</h3>
                  </div>                
              </div>
            </div>  
          </header>
          <Switch>
            <Route path="/Contact-us">
              <Contact />
            </Route>
            <Route path="/ITIN">
              <ITIN />
            </Route>
            <Route path="/About-us">
              <AboutUs />
            </Route>
            <Route path="/Sign-up">
              <SignUp />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/">
              <div className="main-image-content">
                <img src="https://images.unsplash.com/photo-1573497701240-345a300b8d36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" className="main-image" alt="mainimage" />
                <h1 className="main-title">SOGREM ASSOCIATES</h1>
                <button className="main-btn">Our Services  <FaAngleDoubleRight /></button>
              </div>
              <div className="homepage-body">
                <h1>Welcome!</h1>
                <p>You are heartily welcomed to our website. We see your visit as a privileged opportunity
                   to showcase the solutions we provide to our numerous clients in the Maryland, DC,
                   Virginia and West Virginia areas. We believe you will be able to make up your mind
                   about us within the possible shortest time – our target is 3 minutes.</p>
                <h1>What We Do</h1>
                <p>We fix tax problems and obligations. SOGREM is wholesomely involved ONLY in tax &amp; tax related solutions. Our tax related
                   solutions include,  payroll, bookkeeping, QuickBooks, IRS/State tax resolutions,etc. ,
                   Our Payroll &amp; bookkeeping services are tax advantage(s) focused, driven to ensure
                   optimal compliances at Federal, State, County or City tax levels. With us, you will
                   always be fully certain of the possible best tax position you could be.  You could not be
                   better  any where else!! Tax is serious matter, second to health, both for the individual
                   and business, this is the level of seriousness our services apply.</p>
              </div>
            </Route>
          </Switch>
          <div className="footer-parent-div">
            <footer>
              <div>
                <p>
                  Created by Ebun Oludemi
                </p>
              </div>
            </footer>
          </div>
        </div>
     </Router>
    );
  }
}

export default App;
