import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FaBeer, FaArrowDown, FaCaretDown } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        <h1>Sogrem Associates</h1>
        <div className="Nav-bar">
          <a href="#Home">Home</a>
          <a href="#TaxReturns">Tax Returns</a>
          <a href="#ContactUs">Contact Us</a>
          <a href="#AboutUs">About Us</a>
          <div className="dropdown">
            <button className="dropbtn">Other<FaCaretDown /></button>
            <div className="dropdown-content">
              <a href="#Example1">Example 1</a>
              <a href="#Example2">Example 2</a>
              <a href="#Example3">Example 3</a>
            </div>
          </div>
        </div>
        <img src="https://image1.masterfile.com/getImage/NjAwLTAxNjE0OTkxZW4uMDAwMDAwMDA=AA$6u$/600-01614991en_Masterfile.jpg" className="main-image" alt="mainimage" />
        

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
