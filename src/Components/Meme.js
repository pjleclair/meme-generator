import React from "react";
import "./Meme.css"
import memesData from "../memesData"

export default function Meme() {
    const [memeUrl, setMemeUrl] = React.useState("");

    function getMeme() {
        const index = Math.floor(Math.random()*memesData.data.memes.length-1)
        setMemeUrl(memesData.data.memes[index].url);
    }

    return(
        <div className="meme--container">
            <div className="form">
                <div>
                    <input placeholder="Top text"></input>
                    <input placeholder="Bottom text"></input>
                </div>
                <button onClick={getMeme}>Get a new meme image 🖼</button>
                <img className="meme--image" src={memeUrl} alt="Meme"/>
            </div>
        </div>
    )
}