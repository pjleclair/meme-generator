import React from "react";
import "./Nav.css"

export default function Nav() {
    return(
        <nav>
            <div className="nav--logo">
                <img src={require('../Troll Face.png')} alt="troll" />
                <h2>Meme Generator</h2>
            </div>
            <div className="nav--info">
                React Course - Project 3
            </div>
        </nav>
    )
}