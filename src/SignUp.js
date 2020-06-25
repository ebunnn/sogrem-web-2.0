import React, { Component } from 'react';
import './css/SignUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <form>
                    <h2>Sign Up here!</h2>
                    <p>Create a username:</p>
                    <input type="text"/>
                    <p>Create a password:</p>
                    <input type="text"/>
                </form>
            </div>
        )
    }
}
export default SignUp; 