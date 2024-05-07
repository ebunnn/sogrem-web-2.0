import React, { Component } from 'react';
import '../css/SignUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h2>Sign Up Here!</h2>
                <div className="signing-up">
                    <form>
                        <input type="text" placeholder="Create a Username"/> <br></br><br></br> 
                        <input type="password" placeholder="Create a Password"/><br></br><br></br>
                        <input type="submit" value="Sign Up"/>
                    </form>
                </div>
                <h2>Ignore this</h2>
            </div>
        )
    }
}
export default SignUp; 