import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sogrem Associates</h1>
        <div className="Nav-bar">
          <a href="https://www.google.com/search?q=home&oq=home+&aqs=chrome..69i57j0l4j69i61j69i60j69i61.5463j0j7&sourceid=chrome&ie=UTF-8">Home</a>
          <a href="https://www.google.com/search?q=tax+returns&oq=tax+returns&aqs=chrome..69i57j0l7.6327j0j9&sourceid=chrome&ie=UTF-8">Tax Returns</a>
          <a href="https://www.google.com/search?sxsrf=ALeKk02_JxKrwLOrHFwpDUh2GzrRFJ9LWA%3A1592358683627&ei=G3fpXur2JYGxytMPnPax4Aw&q=contact+us&oq=contact+us&gs_lcp=CgZwc3ktYWIQAzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQMyAggAMgUIABCxAzICCAAyAggAMgIIADICCAA6BwgjEOoCECc6BAgjECc6BQgAEIMBOgQIABBDOgcIABCxAxBDOgUIABCRAjoICAAQsQMQkQI6BAgAEApQo9wCWOLtAmD18gJoAnAAeACAAWGIAcIFkgECMTGYAQCgAQGqAQdnd3Mtd2l6sAEK&sclient=psy-ab&ved=0ahUKEwiq8MSt3ofqAhWBmHIEHRx7DMwQ4dUDCAw&uact=5">Contact Us</a>
          <a href="https://www.google.com/search?sxsrf=ALeKk01aRxh1dCqbUjYfbT7mrmhbEq1D-w%3A1592358732046&ei=THfpXtWpArebwbkPlP6emAM&q=about+us&oq=about+us&gs_lcp=CgZwc3ktYWIQAzIHCAAQsQMQQzIECAAQQzIFCAAQsQMyAggAMgQIABBDMgIIADIECAAQQzIECAAQQzIECAAQQzICCAA6BAgAEEc6BggAEAcQHlD_3gNY3-QDYKmDBGgAcAJ4AIABdIgBwQOSAQMzLjKYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjV_8_E3ofqAhW3TTABHRS_BzMQ4dUDCAw&uact=5">About Us</a>
          <div className="dropdown">
            <button className="dropbtn">Other</button>
            <div className="dropdown-content">
              <a href="https://www.google.com/search?q=example+1&tbm=isch&ved=2ahUKEwivn62TwYrqAhV3ZTABHV6ZCWoQ2-cCegQIABAA&oq=example+1&gs_lcp=CgNpbWcQAzIECAAQQzIECAAQQzICCAAyBQgAELEDMgIIADICCAAyAggAMgIIADICCAAyAggAOgcIABCxAxBDULbpsAFYm_uwAWDz_bABaABwAHgAgAHdAYgBtgiSAQUwLjcuMZgBAKABAaoBC2d3cy13aXotaW1n&sclient=img&ei=I-vqXu-BEvfKwbkP3rKm0AY&bih=728&biw=1220">Example 1</a>
              <a href="https://www.google.com/search?q=example+2&tbm=isch&ved=2ahUKEwjinZP7y4rqAhXmVd8KHcZIBG0Q2-cCegQIABAA&oq=example+2&gs_lcp=CgNpbWcQA1CLiwJYqowCYJmOAmgAcAB4AIABAIgBAJIBAJgBAKABAaoBC2d3cy13aXotaW1n&sclient=img&ei=efbqXqL9E-ar_QbGkZHoBg&bih=728&biw=1220">Example 2</a>
              <a href="https://www.google.com/search?q=example+3&tbm=isch&ved=2ahUKEwjF2ayMzIrqAhUMGt8KHdF-D3MQ2-cCegQIABAA&oq=example+3&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgQIABBDMgIIADoECCMQJzoFCAAQsQNQ-egBWLnrAWCB7wFoAHAAeACAAcMCiAHyA5IBBzAuMS4wLjGYAQCgAQGqAQtnd3Mtd2l6LWltZw&sclient=img&ei=nfbqXoWXGIy0_AbR_b2YBw&bih=728&biw=1220">Example 3</a>
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
