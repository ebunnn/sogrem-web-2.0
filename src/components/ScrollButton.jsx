import React, {Component} from "react";
import "../css/ScrollButton.css";
import { FaAngleDoubleDown } from 'react-icons/fa';
import { Link as ScrollLink } from "react-scroll";

class ScrollButton extends Component {
    render() {
        return (
            <div>
                <ScrollLink
                    activeClass="active"
                    to="scroll"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={300}
                    className="main-btn"
                >Get Started  <FaAngleDoubleDown /></ScrollLink>
            </div>
        )
    }
}
export default ScrollButton;