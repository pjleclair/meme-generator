import React from "react";
import "./Meme.css"
import memesData from "../memesData"

export default function Meme() {
    const [textData, setTextData] = React.useState({
        topText: "",
        bottomText: ""
    })
    const [memeUrl, setMemeUrl] = React.useState("");

    function handleChange(event) {
        const {name, value} = event.target
        setTextData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function getMeme() {
        const index = Math.floor(Math.random()*memesData.data.memes.length-1)
        setMemeUrl(memesData.data.memes[index].url);
    }

    return(
        <div className="meme--container">
            <div className="form">
                <div>
                    <input 
                        placeholder="Top text"
                        name="topText"
                        value={textData.topText}
                        onChange={handleChange}
                    />
                    <input 
                        placeholder="Bottom text" 
                        name="bottomText"
                        value={textData.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={getMeme}>Get a new meme image 🖼</button>
                <div className="meme--image" style={{backgroundImage: `url(${memeUrl})`}}>
                    <div className="meme--topText">{textData.topText}</div>
                    {/* <img className="meme--image" src={memeUrl} alt="Meme"/> */}
                    <div className="meme--bottomText">{textData.bottomText}</div>
                </div>
            </div>
        </div>
    )
}