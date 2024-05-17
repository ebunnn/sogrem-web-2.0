import React from "react";
import salogo from "../images/Sogrem Logo shortened.png"

export default function Error404() {
    return (
        <div className="error404--container">
            <img style={{width:"20%"}} src={salogo} alt="404 Logo" />
            <h1 style={{color:"black"}}>404 Page Not Found 🙁</h1>
            <p style={{color:"black"}}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}