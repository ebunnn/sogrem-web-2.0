import React, { Component } from 'react';
import './css/SignUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h2>Sign Up Here!</h2>
                <form>
                    <label for="su-user">Create a username: </label>
                    <input type="text"/> <br></br>
                    <label for="su-pass">Create a password: </label> 
                    <input type="text"/>
                </form>
                <footer className="su-footer">
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
export default SignUp; 