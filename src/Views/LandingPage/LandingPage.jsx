import React from "react";
import "./LandingPage.scss";

import {Link} from "react-router-dom"

function LandingPageButton() {
    return <Link to="/home" class="nav-link">
        <button class="btn btn-green" > 
            <span style={{"font-size": "24px"}}>
                Login
            </span>
        </button>
    </Link>
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return <div style={style}>
        
        <div style={{"font-size": "96px"}}>
            FocusUp
        </div>
        
        <div style={{"font-size": "36px"}}>
            An ADHD productivity app
        </div>
        <br />
        <div style={{"font-size": "36px"}}>
            Designed by and for people with ADHD
        </div>
        <br />
        <LandingPageButton />
    </div>
}
function LandingFrame() {
    const style = {
        "background-image": "url('background.jpg')",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "relative",
        height: "100vw",
        width: "100vw"
    }
    return <div style={style}>
        <LandingFrameMessage />
    </div>
}
function LandingPage() {
    return <div>
        <LandingFrame />
        {/* <LandingFrameMessage /> */}
    </div>
}
export default LandingPage
