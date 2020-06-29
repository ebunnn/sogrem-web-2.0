import React, { Component } from 'react';
import './App.css';
import Contact from './Contact';
import TaxReturns from './TaxReturns';
import AboutUs from './AboutUs';
import SignUp from './SignUp';
import Login from './Login';
import { FaBeer, FaArrowDown, FaCaretDown, FaSearch } from 'react-icons/fa';
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
            <h1>Sogrem Associates</h1>
            <div className="Nav-bar">
              <Link to="/Home">Home</Link>
              <Link to="/Tax-returns">Tax Returns</Link>
              <Link to="/Contact-us">Contact Us</Link>
              <Link to="/About-us">About Us</Link>
              <div className="dropdown">
                <button className="dropbtn">Other<FaCaretDown /></button>
                <div className="dropdown-content">
                  <a href="#Example1">Example 1</a>
                  <a href="#Example2">Example 2</a>
                  <a href="#Example3">Example 3</a>
                </div>
              </div>
                  <div className="signup-login">
                    <Link to="/Sign-up" className="sign-up-btn">Sign Up</Link>
                    <Link to="/Login" className="login-btn">Login</Link>
                  </div>
                    <div className="search-bar">
                      <form>
                        <input type="search" placeholder="Search..."/>
                        <button className="search-btn"><FaSearch /></button>
                      </form>
                      </div>          
            </div>
          </header>
          <Switch>
            <Route path="/Contact-us">
              <Contact />
            </Route>
            <Route path="/Tax-returns">
              <TaxReturns />
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
              <img src="https://image1.masterfile.com/getImage/NjAwLTAxNjE0OTkxZW4uMDAwMDAwMDA=AA$6u$/600-01614991en_Masterfile.jpg" className="main-image" alt="mainimage" />
              <footer>
            <div>
              <p>
                Created by Ebun Oludemi
              </p>
            </div>
          </footer>
            </Route>
          </Switch>
        </div>
     </Router>
    );
  }
}

export default App;
