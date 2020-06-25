import React, { Component } from 'react';
import './css/TaxReturns.css';
//import { render } from '@testing-library/react';


class TaxReturns extends Component {
    //constructor(props) {
        //super(props)
    //}
    render() {
        return(
            <div>
                <p>This is the tax return page ya dig</p>
                    <footer className="tax-returns-footer">
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

export default TaxReturns;