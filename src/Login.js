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
                <form>
                    <label for="user">Username: </label>
                    <input type="text"/><br></br>
                    <label for="pass">Password: </label> 
                    <input type="text"/>
                </form>
                <footer className="login-footer">
                    <div>
                        <p>
                            Created by Ebun Oludemi
                        </p>
                    </div>
                </footer>
            </div>
            
                   
        )
    }
    
}
export default Login;