import React from "react";
import "./Meme.css"

export default function Meme() {
    const [textData, setTextData] = React.useState({
        topText: "",
        bottomText: "",
        memeImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [meme, setMeme] = React.useState([]);

    function handleChange(event) {
        const {name, value} = event.target
        setTextData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    React.useEffect(function() {
        console.log("test")
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMeme(data))
    }, [])

    function getMeme() {
        const index = Math.floor(Math.random()*meme.data.memes.length-1)
        setTextData(prevState => ({
            ...prevState,
            memeImage: meme.data.memes[index].url
        }))
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
                <div className="meme--image-container">
                    <div className="meme--topText">{textData.topText}</div>
                    <img className="meme--image" src={textData.memeImage} alt="Meme"/>
                    <div className="meme--bottomText">{textData.bottomText}</div>
                </div>
            </div>
        </div>
    )
}