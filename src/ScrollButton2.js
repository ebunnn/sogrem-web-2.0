import React, {Component} from "react";
import "./css/ScrollButton2.css";
import { FaAngleDoubleDown } from 'react-icons/fa';
import { Link as ScrollLink } from "react-scroll";

class ScrollButtonTwo extends Component {
    render() {
        return (
            <div>
                <ScrollLink
                    activeClass="active"
                    to="scroll-two"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={300}
                    className="scroll-btn"
                >Get Started  <FaAngleDoubleDown /></ScrollLink>
            </div>
        )
    }
}
export default ScrollButtonTwo;