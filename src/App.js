import React, { Component } from 'react';
import './App.css';
import Contact from './Contact';
import ITIN from './ITIN';
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
            <div className="title-navbar">
              {/*<a href="#placeholder" className="main-title">Sogrem Associates</a>*/}
              <div className="Nav-bar">
                <Link to="/Home">Home</Link>
                <Link to="/ITIN">ITIN</Link>
                <Link to="/Contact-us">Contact Us</Link>
                <Link to="/About-us">About Us</Link>
                <div className="dropdown">
                  <button className="dropbtn">Taxes<FaCaretDown /></button>
                  <div className="dropdown-content">
                    <a href="#Example1">1040</a>
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
              <div className="main-image-texts">
                <img src="https://images.unsplash.com/photo-1573497701240-345a300b8d36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" className="main-image" alt="mainimage" />
                <h1 className="promise">SOGREM ASSOCIATES</h1>
                
              </div>
              <div className="body">
              <h1>What services do we provide?</h1>
              <p>Sogrem provides services such as ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
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
