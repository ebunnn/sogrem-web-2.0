import React, { Component } from 'react';
import './css/Login.css';

class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h2>Login here!</h2>
                <div className="logging-in">
                    <form>
                        <input type="text" placeholder="Enter Username"/><br></br><br></br>
                        <input type="password" placeholder="Enter Password"/><br></br><br></br>
                        <a href="#forgotpass" className="forgot-pass">Forgot Password?</a><br></br><br></br>
                        <input type="submit" value="Submit"/>
                    </form> 
                </div>   
                <h5>Ignore this</h5>
                <div>
                    <footer className="login-footer">
                        <div>
                            <p>
                                Created by Ebun Oludemi
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
            
                   
        )
    }
    
}
export default Login;