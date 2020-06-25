import React, { Component } from 'react';
import './css/Login.css';

class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <form>
                    <h2>Login here!</h2>
                    <p>Username:</p>
                    <input type="text"/>
                    <p>Password:</p>
                    <input type="text"/>
                </form>
            </div>
        )
    }
    
}
export default Login;