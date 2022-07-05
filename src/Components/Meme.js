import React from "react";
import "./Meme.css"

export default function Meme() {
    return(
        <div className="meme--container">
            <form>
                <div>
                    <input></input>
                    <input></input>
                </div>
                <button>Get a new meme image 🖼</button>
            </form>
        </div>
    )
}