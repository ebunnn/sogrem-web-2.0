import React, { Component } from 'react';
import './App.css';
import Contact from './Contact';
import ITIN from './ITIN';
import AboutUs from './AboutUs';
import SignUp from './SignUp';
import Login from './Login';
import Taxes from './Taxes';
import { FaCaretDown, FaAngleDoubleDown, FaBars } from 'react-icons/fa';
import ScrollToTop from './ScrollToTop';
import salogo from './images/salogo.png';
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
        <ScrollToTop>
          <div className="App">
            
            <header className="App-header">
              <div>
                <div className="Nav-bar" id="TheNavBar">
                  <Link to="/Home">Home</Link>
                  <div className="taxes-dropdown">
                    <Link to="/Taxes" className="taxes-dropbtn">Taxes<FaCaretDown /></Link>
                    <div className="taxes-dropdown-content">
                      <div className="taxes-dropdown-across">
                        <h4>Individual</h4>
                        <a href="#Example1">1040</a>
                        <a href="#Example2">1040NR</a>
                        <a href="#Example3">1040X</a>
                      </div>
                      <div className="taxes-dropdown-across">
                        <div className="taxes-dropdown-across2">
                          <h4>Businesses</h4>
                          <a href="#Example4">1065 (Partnerships)</a>
                          <a href="#Example5">1120s (SCorps)</a>
                          <a href="#Example6">1120 (CCorps)</a>
                        </div>
                      </div>
                      <div className="taxes-dropdown-across">
                        <div className="taxes-dropdown-across2">
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
                  <div className="rep-dropdown">
                    <Link to="#Services">Representation<FaCaretDown /></Link>
                      <div className="rep-dropdown-content">
                        <a href="#Example1">Resolve Most Tax Matters<br></br>with IRS</a>
                        <a href="#Example2">Obtain IRS 501K13<br></br>Certifications</a>
                      </div>
                  </div>
                  <div className="taxid-dropdown">
                    <Link to="#taxid">Tax IDs<FaCaretDown/></Link>
                      <div className="taxid-dropdown-content">
                        <div className="taxid-dropdown-across">
                          <h4>ITIN</h4>
                          <Link to="/ITIN">ITIN Info</Link>
                          <a href="#Example2">EX</a>
                          <a href="#Example3">EX</a>
                        </div>
                        <div className="taxid-dropdown-across">
                          <div className="taxid-dropdown-across2">
                            <h4>ATIN</h4>
                            <a href="#Example4">EX</a>
                            <a href="#Example5">EX</a>
                            <a href="#Example6">EX</a>
                          </div>
                        </div>
                        <div className="taxid-dropdown-across">
                          <div className="taxid-dropdown-across2">
                            <h4>EIN</h4>
                            <a href="#Example7">EX</a>
                            <a href="#Example8">EX</a>
                            <a href="#Example9">EX</a>
                          </div>
                        </div>             
                      </div>
                  </div>
                  {/*<Link to="#Payroll">Payroll<FaCaretDown /></Link>
                  <Link to="#Bookkeeping">Bookkeeping<FaCaretDown /></Link>*/}
                  <div className="businessad-dropdown">
                    <Link to="#businessad">Business Advisory<FaCaretDown/></Link>
                      <div className="businessad-dropdown-content">
                        <h4>Business Region</h4>
                        <a href="#Example1">EX</a>
                        <a href="#Example2">EX</a>
                        <a href="#Example3">EX</a>
                        <a href="#Example4">EX</a>
                        <a href="#Example5">EX</a>
                        <h4>501(c)3 Certification</h4>
                        <a href="#Example6">EX</a>
                      </div>
                  </div> 
                  <Link to="#Quicksbooks" className="quickbooks">QuickBooks</Link>
                  <a href="javascript:void(0);"className="bars-icon"><FaBars/></a>
                  {/*<button className="more-btn">More<FaCaretDown/></button>*/}
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
                    <div className="salogo">
                    <img src={salogo} alt="" />

                      
                    </div>           
                </div>
              </div>  
            </header>
            
            <Switch>
              <Route path="/Taxes">
                <Taxes />
              </Route>
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
                  <a href="#scroll" className="main-btn">Get Started  <FaAngleDoubleDown /></a>
                </div>
                <div className="whole-hp-body">
                  <div id="scroll" className="homepage-body">
                    <h1>Welcome!</h1>
                    <p>You are heartily welcomed to our SOGREM Associates website. We see your visit as a 
                      privileged opportunity to showcase the solutions we provide to our numerous clients 
                      in the Maryland, DC, Virginia and West Virginia areas. We believe you will be able 
                      to make up your mind about us within the possible shortest time – our target is 3 minutes.</p>
                    <h1>What We Do</h1>
                    <p>We fix tax problems and obligations. SOGREM is wholesomely involved ONLY in tax &amp; tax related solutions. Our tax related
                      solutions include, payroll, bookkeeping, QuickBooks, IRS/State tax resolutions, etc.
                      Our Payroll &amp; bookkeeping services are tax advantage(s) focused, driven to ensure 
                      optimal compliances at Federal, State, County or City tax levels. With us, you will
                      always be fully certain of the possible best tax position you could be. You could not be
                      better any where else! Tax is serious matter, second to health, both for the individual
                      and business, this is the level of seriousness our services apply.</p>
                  </div>     
                    <div className="homepage-body2">
                      <h1>Our Service Delivery Platform</h1>
                      <p>SOGREM Associates tax professionals are US Treasury Circular 230 Practitioners and
                        fully governed by the Office of Professional Responsibility (OPR). We offer our tax
                        services within the confines of this rigorously regulated monitoring banner of the US
                        Government. Hence your peace of mind is always assured.<br></br>
                        <br></br>
                        With us you only pay what you are legally obligated to pay and you receive all your dues
                        - deductions, credits, refunds or waivers, to the last penny! Again, you always have the
                        assurance and peace of mind that you are in full compliance with the tax laws and no
                        backdoor or aftermath negative surprises.</p>
                    </div>
                    <div className="homepage-body3">
                      <h1>IRS Enabling Credentials</h1>
                      <p>SOGREM Associates tax professionals are <a href="https://www.irs.gov/tax-professionals/enrolled-agents/enrolled-agent-information" target="_blank" rel="noopener noreferrer"> Enrolled Agents. </a>Enrolled Agents, as with tax attorneys
                        and CPAs, have unlimited rights to practice at all levels of the IRS and are the only federally 
                        licensed tax professionals - by the US Treasury. CPAs and Attorneys are state licensed.<br></br>
                        <br></br>
                        SOGREM is also an authorized IRS Certified Acceptance Agents (CAA) and <a href="https://www.irs.gov/e-file-providers/authorized-irs-e-file-providers-for-individuals" target="_blank" rel="noopener noreferrer"> Authorized efile Provider</a> aka 
                        Electronic Return Originator (ERO).</p>
                    </div>
                    <div className="homepage-body4">
                      <h1>Fees Affordability Assurance</h1>
                      <p>Our charges are always the best you can receive within the industry and we are ready
                        to match any price (on similar service) you get from other Enrolled Agents, Tax
                        Attorneys and CPAs. Please feel free to go through our web pages to see what we have
                        to offer you. We are extremely flexible and we always accommodate your peculiar or
                        special situations.</p>
                    </div>
                  </div>
                  <div className="more-info">
                    <p>Need more information? Please call the Hot Line: (240)-786-6267 or visit our <Link to="/Contact-us">Contact Us</Link> page.</p>
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
                <div className="footer-links">
                <Link to="/About-us">About Us</Link>
                <br></br>
                <Link to="/Contact-us">Contact Us</Link>
                </div>
              </footer>
            </div>
          </div>
        </ScrollToTop>
     </Router>
    );
  }
}

export default App;
