import React from "react";
import "./Meme.css"

export default function Meme() {
    return(
        <div className="meme--container">
            <form>
                <div>
                    <input placeholder="Top text"></input>
                    <input placeholder="Bottom text"></input>
                </div>
                <button>Get a new meme image 🖼</button>
            </form>
        </div>
    )
}