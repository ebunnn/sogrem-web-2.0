import React, { Component } from 'react';
import './App.css';
import Contact from './Contact';
import ITIN from './ITIN';
import AboutUs from './AboutUs';
import SignUp from './SignUp';
import Login from './Login';
import Taxes from './Taxes';
import Representation from './Representation';
import BusinessAdvisory from './BusinessAdvisory';
import Footer from './Footer';
import ScrollButton from './ScrollButton';
import { FaAngleDoubleDown, FaBars, FaCheck } from 'react-icons/fa';
import ScrollToTop from './ScrollToTop';
import salogo from './images/salogo.png';
import mainimg from './images/homepage-img.jpg';
import efile from './images/efile-img.png';
import caa from './images/caa.png';
import irsea from './images/irsea.png';
import { Link as ScrollLink } from "react-scroll";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  constructor() {
    super();
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
                    <Link to="/Taxes" className="taxes-dropbtn">Taxes</Link>
                    {/* <div className="taxes-dropdown-content">
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
                      <div className="dropdown-across">
                        <div className="dropdown-across2">
                          <h4>Immigration</h4>
                          <a href="#Example10">Immigration Consultation</a>
                          <a href="#Example11">Immigration Doc Prep</a>
                        </div>
                      </div>           
                    </div> */}
                  </div>
                  <div className="itintab-dropdown">
                    <Link to="/ITIN">ITINs</Link>
                      <div className="itintab-dropdown-content">
                      </div>
                  </div>
                  <div className="rep-dropdown">
                    <Link to="/Representation">Representation</Link>
                      {/* <div className="rep-dropdown-content">
                        <a href="#Example1">Resolve Most Tax Matters<br></br>with IRS</a>
                        <a href="#Example2">Obtain IRS 501K13<br></br>Certifications</a>
                      </div> */}
                  </div>
                  {/* <div className="taxid-dropdown">
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
                  </div> */}
                  {/* <Link to="#Payroll">Payroll</Link> */}
                  {/* <Link to="#Bookkeeping">Bookkeeping</Link> */}
                  {/* <Link to="#Quicksbooks" className="quickbooks">QuickBooks</Link> */}
                  <div className="businessad-dropdown">
                    <Link to="/BusinessAdvisory">Business Advisory</Link>
                      {/* <div className="businessad-dropdown-content">
                        <h4>Business Region</h4>
                        <a href="#Example1">EX</a>
                        <a href="#Example2">EX</a>
                        <a href="#Example3">EX</a>
                        <a href="#Example4">EX</a>
                        <a href="#Example5">EX</a>
                        <h4>501(c)3 Certification</h4>
                        <a href="#Example6">EX</a>
                      </div> */}
                  </div> 
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
              <Route path="/Representation">
                <Representation />
              </Route>
              <Route path="/BusinessAdvisory">
                <BusinessAdvisory />
              </Route>
              <Route path="/">
                <div className="main-image-content">
                  {/* <img src={efile} className="efile-logo"/>
                  <img src={caa} className="caa-logo"/>
                  <img src={irsea} className="irsea-logo"/> */}
                  <img src={mainimg} className="main-image" alt="mainimage" />
                <div> 
                  <h1 className="main-title">SOGREM ASSOCIATES</h1>
                  <h3 className="title-statement">Professional Tax Preperation Service<br></br> IRS + 50 States &amp; DC</h3>
                  <h3 className="title-statement2">Professional Tax<br/>Preperation Service<br></br> IRS + 50 States &amp; DC</h3>
                </div> 
                  {/* <ScrollLink
                    activeClass="active"
                    to="scroll"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={300}
                    className="main-btn"
                >Get Started  <FaAngleDoubleDown /></ScrollLink> */}
                    <ScrollButton />
                    <div id="scroll" className="certifications">
                      <div className="certifications-logo">
                        <img src={efile} alt=""/>
                      </div>
                      <div className="certifications-logo2">
                        <img src={caa} alt=""/>
                        <img src={irsea} alt=""/>
                      </div>
                    </div>
                </div>
              <div>  
                <div className="whole-hp-body">
                  <div className="homepage-body">
                    <h1>Welcome!</h1>
                    <p>You are heartily welcomed to our SOGREM Associates' website. We see your visit as a 
                      privileged opportunity to showcase the solutions we provide to our numerous clients 
                      in the Maryland, DC, Virginia and West Virginia areas. We believe you will be able 
                      to make up your mind about us within the possible shortest time – our target is 3 minutes.</p>
                    <h1>What We Do - We Fix Tax Problems &amp; Tax Obligations</h1>
                    <p>SOGREM is wholesomely involved <b><em><ins>essencially</ins></em></b> in tax &amp; tax related solutions.<br></br>
                       <br></br>

                       Our Professional Services Include:<br></br>
                       <div className="check-links">
                          &emsp;<FaCheck /> <Link to="/Taxes">IRS/State individual and business tax preparation,</Link><br></br>
                          &emsp;<FaCheck /> <Link to="/Representation">IRS/State tax resolutions, etc.,</Link><br></br>
                          &emsp;<FaCheck /> <Link to="/BusinessAdvisory">Business advisory services</Link><br></br>
                        <br></br>
                       </div></p>
                  </div>     
                    <div className="homepage-body2">
                      <h1>Our Service Delivery Platform</h1>
                      <p>SOGREM Associates tax professionals are US Treasury Circular 230 Practitioners and
                        fully governed by the Office of Professional Responsibility (OPR). We offer our tax
                        services within the confines of the rigorously regulated monitoring banner of the US
                        Treasury(IRS). Hence your peace of mind is always assured.<br></br>
                        <br></br>
                        With us you only pay what you are legally obligated to pay and you receive all you are entitled to
                        - deductions, credits, refunds or waivers, to the last penny! Again, you always have the
                        assurance and peace of mind that you are in full compliance with the tax laws and no
                        backdoor or aftermath negative surprises.</p>
                    </div>
                    {/* <div className="homepage-body3">
                      <h1>IRS Enabling Credentials</h1>
                      <p>SOGREM Associates tax professionals are <a href="https://www.irs.gov/tax-professionals/enrolled-agents/enrolled-agent-information" target="_blank" rel="noopener noreferrer"> Enrolled Agents. </a>Enrolled Agents, as with tax attorneys
                        and CPAs, have unlimited rights to practice at all levels of the IRS and are the only federally 
                        licensed tax professionals - by the US Treasury. CPAs and Attorneys are state licensed.<br></br>
                        <br></br>
                        SOGREM is also an authorized IRS Certified Acceptance Agents (CAA) and <a href="https://www.irs.gov/e-file-providers/authorized-irs-e-file-providers-for-individuals" target="_blank" rel="noopener noreferrer"> Authorized efile Provider</a> aka 
                        Electronic Return Originator (ERO).</p>
                    </div> */}
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
              </div>    
              </Route>
            </Switch>
            
            <div className="footer-div">
              <footer>
                <Footer />
              </footer>
            </div>
          </div>
        </ScrollToTop>
     </Router>
    );
  }
}

export default App;
