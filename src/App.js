import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ITIN from './components/ITIN';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Taxes from './components/Taxes';
import Representation from './components/Representation';
import BusinessAdvisory from './components/BusinessAdvisory';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


export default function App() {
    return (
      <div className='App'>
        <Router>
          <ScrollToTop>
            <header className='App-header'>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} /> 
                  <Route path="/about-us" element={<AboutUs />} />    
                  <Route path="/taxes" element={<Taxes />} />
                  <Route path='/itin' element={<ITIN />} />  
                  <Route path='/representation' element={<Representation />} />                   
                  <Route path='/business-advisory' element={<BusinessAdvisory />} />                   
                  <Route path='/contact-us' element={<ContactUs />} />                                    
                </Routes>
            </header>
            <Footer />
          </ScrollToTop>
        </Router>
      </div>
    
    //   <Router>
    //     <ScrollToTop>
    //       <div className="App">
    //         <header className="App-header">
    //           <div>
    //             <nav className="Nav-bar" id="TheNavBar"> 
    //               <Link to="/">Home</Link>
    //               <Link to="/About-us">About Us</Link>
    //               <Link to="/Taxes" className="taxes-dropbtn">Taxes</Link>
    //               <Link to="/ITIN">ITINs</Link>
    //               <Link to="/Representation">Representation</Link>
    //               <Link to="/BusinessAdvisory">Business Advisory</Link>
    //               <Link to="/Contact-us">Contact Us</Link>
    //               <Link to="/Home" className="title-navbar">Sogrem Associates</Link> 
    //               <Link to="/Home" className='salogo'><img src={salogo} alt="" /></Link> 
    //               {/* <div className="salogo">
    //                 <img src={salogo} alt="" />
    //               </div>   */}
    //             </nav>
    //             <div className="responsive-nav">
    //               <ResponsiveNav />
    //             </div>
    //           </div>  
    //         </header>
    //         <Switch>
    //           <Route path="/Taxes">
    //             <Taxes />
    //           </Route>
    //           <Route path="/Contact-us">
    //             <Contact />
    //           </Route>
    //           <Route path="/ITIN">
    //             <ITIN />
    //           </Route>
    //           <Route path="/About-us">
    //             <AboutUs />
    //           </Route>
    //           <Route path="/Sign-up">
    //             <SignUp />
    //           </Route>
    //           <Route path="/Login">
    //             <Login />
    //           </Route>
    //           <Route path="/Representation">
    //             <Representation />
    //           </Route>
    //           <Route path="/BusinessAdvisory">
    //             <BusinessAdvisory />
    //           </Route>
    //           <Route path="/">
    //             <div className="main-image-content">
    //               {/* <img src={mainimg} className="main-image" alt="mainimage" /> */}
    //               <div className='over-main-img'> 
    //                 <h3 className="title-statement">Professional Tax Preperation Service<br></br> IRS + 50 States &amp; DC</h3>
    //                 <h3 className="title-statement2">Professional Tax<br/>Preperation Service<br></br> IRS + 50 States &amp; DC</h3>
    //                 <div>
    //                   <h1 className="main-title">SOGREM ASSOCIATES</h1>
    //                 </div>
    //                   {/* <ScrollButton /> */}
    //               </div> 
    //             </div>
    //           <div> 
    //             <div className="certifications">
    //                   <div id="scroll" className="certifications-logo">
    //                     <div className='efile'><img src={efile} alt=""/></div>
    //                     <div className='caa'><img src={caa} alt=""/></div>
    //                     <div className='irsea'><img src={irsea} alt=""/></div>
    //                   </div>
    //                   {/* <div className="certifications-logo2">
    //                     <img src={caa} alt=""/>
    //                     <img src={irsea} alt=""/>
    //                   </div> */}
    //             </div> 
    //             <div className="whole-hp-body">
    //               <div className="homepage-body">
    //                 <h1>Welcome!</h1>
    //                 <p>You are heartily welcomed to our website. We see your visit as a 
    //                   privileged opportunity to showcase the solutions we provide to our numerous clients 
    //                   in all the 50 states and DC. We believe you will be able 
    //                   to make up your mind about us within the possible shortest time – our target is 3 minutes.</p>
    //                 <h1>What We Do - We Fix Tax Problems &amp; Tax Obligations</h1>
    //                 <p>SOGREM is wholesomely involved <b><em><ins>essentially</ins></em></b> in tax &amp; tax related solutions.<br></br>
    //                    <br></br>

    //                    Our Professional Services Include:<br></br>
    //                    <div className="check-links">
    //                       &emsp;<FaCheck /> <Link to="/Taxes">IRS/State individual and business tax preparation,</Link><br></br>
    //                       &emsp;<FaCheck /> <Link to="/Representation">IRS/State tax resolutions, etc.,</Link><br></br>
    //                       &emsp;<FaCheck /> <Link to="/BusinessAdvisory">Business advisory services</Link><br></br>
    //                     <br></br>
    //                    </div></p>
    //               </div>     
    //                 <div className="homepage-body2">
    //                   <h1>Our Service Delivery Platform</h1>
    //                   <p>SOGREM Associates tax professionals are US Treasury Circular 230 Practitioners and
    //                     fully governed by the Office of Professional Responsibility (OPR). We offer our tax
    //                     services within the confines of the rigorously regulated monitoring banner of the US
    //                     Treasury(IRS). Hence your peace of mind is always assured.<br></br>
    //                     <br></br>
    //                     With us, you only pay what you are legally obligated to pay and you receive all you are entitled to
    //                     - deductions, credits, refunds or waivers, to the last penny! Again, you always have the
    //                     assurance and peace of mind that you are in full compliance with the tax laws and no
    //                     backdoor or aftermath negative surprises.</p>
    //                 </div>
    //                 {/* <div className="homepage-body3">
    //                   <h1>IRS Enabling Credentials</h1>
    //                   <p>SOGREM Associates tax professionals are <a href="https://www.irs.gov/tax-professionals/enrolled-agents/enrolled-agent-information" target="_blank" rel="noopener noreferrer"> Enrolled Agents. </a>Enrolled Agents, as with tax attorneys
    //                     and CPAs, have unlimited rights to practice at all levels of the IRS and are the only federally 
    //                     licensed tax professionals - by the US Treasury. CPAs and Attorneys are state licensed.<br></br>
    //                     <br></br>
    //                     SOGREM is also an authorized IRS Certified Acceptance Agents (CAA) and <a href="https://www.irs.gov/e-file-providers/authorized-irs-e-file-providers-for-individuals" target="_blank" rel="noopener noreferrer"> Authorized efile Provider</a> aka 
    //                     Electronic Return Originator (ERO).</p>
    //                 </div> */}
    //                 <div className="homepage-body4">
    //                   <h1>Fees Affordability Assurance</h1>
    //                   <p>Our charges are always the best you can receive within the industry and we are ready
    //                     to match any price (on similar service) you get from other Enrolled Agents, Tax
    //                     Attorneys and CPAs. Please feel free to go through our web pages to see what we have
    //                     to offer you. We are extremely flexible and we always accommodate your peculiar or
    //                     special situations.</p>
    //                 </div>
    //               </div>
    //               <div className="more-info">
    //                 <p>Need more information? Please call the number: (240)-786-6267 or visit our <Link to="/Contact-us">Contact Us</Link> page.</p>
    //               </div>
    //           </div>    
    //           </Route>
    //         </Switch>
            
    //         <div className="footer-div">
    //           <footer>
    //             <Footer />
    //           </footer>
    //         </div>
    //       </div>
    //     </ScrollToTop>
    //  </Router>
    );
}

