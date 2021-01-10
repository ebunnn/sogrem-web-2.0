import React, {Component} from "react";
import "./css/BodyBox.css"

class BodyBox extends Component {
    constructor(props) {
        super() 
    }
    render() {
        if(this.props.paragraph2 !== undefined) {
            return(
                <div>
                    <div className="whole-box-body">
                        <div className="box-content">
                            <h1>{this.props.header}</h1>
                            <p>{this.props.paragraph1}</p>
                            <p>{this.props.paragraph2}</p>
                        </div>
                    </div>
                </div>
            )
        }else {
            return(
                <div>
                    <div className="whole-box-body">
                        <div className="box-content">
                            <h1>{this.props.header}</h1>
                            <p>{this.props.paragraph1}</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default BodyBox;