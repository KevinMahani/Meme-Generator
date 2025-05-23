// export default function Main() {
//     return (
//         <main>
//             <div className="form">
//                 <label>Top Text
//                     <input
//                         type="text"
//                         placeholder="One does not simply"
//                         name="topText"
//                     />
//                 </label>

//                 <label>Bottom Text
//                     <input
//                         type="text"
//                         placeholder="Walk into Mordor"
//                         name="bottomText"
//                     />
//                 </label>
//                 <button>Get a new meme image 🖼</button>
//             </div>
//             <div className="meme">
//                 <img src="http://i.imgflip.com/1bij.jpg" />
//                 <span className="top">One does not simply</span>
//                 <span className="bottom">Walk into Mordor</span>
//             </div>
//         </main>
//     )
// }
// ..................................................................

// // Meme Generator State

// import { useState } from "react"

// export default function Main() {
//     const [meme, setMeme] = useState({
//         topText: "One does not simply",
//         bottomText: "Walk into Mordor",
//         imageUrl: "http://i.imgflip.com/1bij.jpg"
//     })

//     return (
//         <main>
//             <div className="form">
//                 <label>Top Text
//                     <input
//                         type="text"
//                         placeholder="One does not simply"
//                         name="topText"
//                     />
//                 </label>

//                 <label>Bottom Text
//                     <input
//                         type="text"
//                         placeholder="Walk into Mordor"
//                         name="bottomText"
//                     />
//                 </label>
//                 <button>Get a new meme image 🖼</button>
//             </div>
//             <div className="meme">
//                 <img src={meme.imageUrl} />
//                 <span className="top">{meme.topText}</span>
//                 <span className="bottom">{meme.bottomText}</span>
//             </div>
//         </main>
//     )
// }
// ...........................................................

// // Meme Generator - Controlled Components - part 1

// import { useState } from "react"

// export default function Main() {
//     const [meme, setMeme] = useState({
//         topText: "One does not simply",
//         bottomText: "Walk into Mordor",
//         imageUrl: "http://i.imgflip.com/1bij.jpg"
//     })
    
//     function handleChange(event) {
//         const {value} = event.currentTarget
//         setMeme(prevMeme => ({
//             ...prevMeme,
//             topText: value
//         }))
//     }

//     return (
//         <main>
//             <div className="form">
//                 <label>Top Text
//                     <input
//                         type="text"
//                         placeholder="One does not simply"
//                         name="topText"
//                         onChange={handleChange}
//                     />
//                 </label>

//                 <label>Bottom Text
//                     <input
//                         type="text"
//                         placeholder="Walk into Mordor"
//                         name="bottomText"
//                     />
//                 </label>
//                 <button>Get a new meme image 🖼</button>
//             </div>
//             <div className="meme">
//                 <img src={meme.imageUrl} />
//                 <span className="top">{meme.topText}</span>
//                 <span className="bottom">{meme.bottomText}</span>
//             </div>
//         </main>
//     )
// }
// ..................................................................

// // // Meme Generator - Controlled Components - part 2

// import { useState } from "react"

// export default function Main() {
//     const [meme, setMeme] = useState({
//         topText: "One does not simply",
//         bottomText: "Walk into Mordor",
//         imageUrl: "http://i.imgflip.com/1bij.jpg"
//     })
    
//     function handleChange(event) {
//         const {value, name} = event.currentTarget
//         setMeme(prevMeme => ({
//             ...prevMeme,
//             [name]: value
//         }))
//     }

//     return (
//         <main>
//             <div className="form">
//                 <label>Top Text
//                     <input
//                         type="text"
//                         placeholder="One does not simply"
//                         name="topText"
//                         onChange={handleChange}
//                         value={meme.topText}
//                     />
//                 </label>

//                 <label>Bottom Text
//                     <input
//                         type="text"
//                         placeholder="Walk into Mordor"
//                         name="bottomText"
//                         onChange={handleChange}
//                         value={meme.bottomText}
//                     />
//                 </label>
//                 <button>Get a new meme image 🖼</button>
//             </div>
//             <div className="meme">
//                 <img src={meme.imageUrl} />
//                 <span className="top">{meme.topText}</span>
//                 <span className="bottom">{meme.bottomText}</span>
//             </div>
//         </main>
//     )
// }
// ................................................................

// // Fetching data in React

// import React from "react"

// export default function App(props) {
//     const [starWarsData, setStarWarsData] = React.useState(null)
    
//     // console.log("Rendered!")
    
//     fetch("https://swapi.dev/api/people/1")
//         .then(res => res.json())
//         .then(data => setStarWarsData(data))
    
//     // side effects - useEffect
    
//     return (
//         <div>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }
// ..........................................................

// useEffect() syntax and default behavior

// import React from "react"

// export default function App(props) {
//     const [starWarsData, setStarWarsData] = React.useState(null)
    
    
//     React.useEffect(function() {
//         console.log("Effect ran")
//         fetch("https://swapi.dev/api/people/1")
//             .then(res => res.json())
//             // .then(data => setStarWarsData(data))
//     })
    
//     console.log("Rendered!")
    
//     return (
//         <div>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }
// ..........................................................

// // Meme Generator - Fetch Memes


// import { useState, useEffect } from "react"

// export default function Main() {
//     const [meme, setMeme] = useState({
//         topText: "One does not simply",
//         bottomText: "Walk into Mordor",
//         imageUrl: "http://i.imgflip.com/1bij.jpg"
//     })
//     const [allMemes, setAllMemes] = useState([])
    
//     useEffect(() => {
//         fetch("https://api.imgflip.com/get_memes")
//             .then(res => res.json())
//             .then(data => setAllMemes(data.data.memes))
//     }, [])
    
//   /**
//      * Challenge:
//      * Get an array of memes from the imgflip API as soon as
//      * this component renders for the first time.
//      * Check the imgflip documentation for the correct URL.
//      * Save the array of memes (not the whole response
//      * data) to state. (For this app, we'll randomly choose
//      * one of the memes from this array when the user clicks
//      * the "Get a new meme image" button, but we'll do that in
//      * a separate challenge.)
//      * 
//      * Hint: for now, don't try to use an async/await function.
//      * Instead, use `.then()` to resolve the promises
//      * from using `fetch`. We'll learn why after this challenge.
//      */
    
    
//     function handleChange(event) {
//         const {value, name} = event.currentTarget
//         setMeme(prevMeme => ({
//             ...prevMeme,
//             [name]: value
//         }))
//     }

//     return (
//         <main>
//             <div className="form">
//                 <label>Top Text
//                     <input
//                         type="text"
//                         placeholder="One does not simply"
//                         name="topText"
//                         onChange={handleChange}
//                         value={meme.topText}
//                     />
//                 </label>

//                 <label>Bottom Text
//                     <input
//                         type="text"
//                         placeholder="Walk into Mordor"
//                         name="bottomText"
//                         onChange={handleChange}
//                         value={meme.bottomText}
//                     />
//                 </label>
//                 <button>Get a new meme image 🖼</button>
//             </div>
//             <div className="meme">
//                 <img src={meme.imageUrl} />
//                 <span className="top">{meme.topText}</span>
//                 <span className="bottom">{meme.bottomText}</span>
//             </div>
//         </main>
//     )
// }
// ............................................................
 
// // Meme Generator - Get random meme    **********************************

// import { useState, useEffect } from "react"

// export default function Main() {
//     const [meme, setMeme] = useState({
//         topText: "One does not simply",
//         bottomText: "Walk into Mordor",
//         imageUrl: "http://i.imgflip.com/1bij.jpg"

//     })
//     const [allMemes, setAllMemes] = useState([])
    
//     useEffect(() => {
//         fetch("https://api.imgflip.com/get_memes")
//             .then(res => res.json())
//             .then(data => setAllMemes(data.data.memes))
//     }, [])
    
//     function getMemeImage() {
//         const randomNumber = Math.floor(Math.random() * allMemes.length)
//         const newMemeUrl = allMemes[randomNumber].url
//         setMeme(prevMeme => ({
//             ...prevMeme,
//             imageUrl: newMemeUrl
//         }))
//     }
    
//     function handleChange(event) {
//         const {value, name} = event.currentTarget
//         setMeme(prevMeme => ({
//             ...prevMeme,
//             [name]: value
//         }))
//     }

//     return (
//         <main>
//             <div className="form">
//                 <label>Top Text
//                     <input
//                         type="text"
//                         placeholder="One does not simply"
//                         name="topText"
//                         onChange={handleChange}
//                         value={meme.topText}
//                     />
//                 </label>

//                 <label>Bottom Text
//                     <input
//                         type="text"
//                         placeholder="Walk into Mordor"
//                         name="bottomText"
//                         onChange={handleChange}
//                         value={meme.bottomText}
//                     />
//                 </label>
//                 <button onClick={getMemeImage} disabled={allMemes.length === 0}>
//                     Get a new meme image 🖼
//                 </button>
//             </div>
//             <div className="meme">
//                 <img src={meme.imageUrl} alt="Meme" />
//                 <span className="top">{meme.topText}</span>
//                 <span className="bottom">{meme.bottomText}</span>
//             </div>
//         </main>
//     )
// }


// ............................................................


import { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        // bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"

    })
    const [allMemes, setAllMemes] = useState([])
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const randomMeme = allMemes[randomNumber]
    setMeme(prevMeme => ({
        ...prevMeme,
        imageUrl: randomMeme.url,
        topText: randomMeme.name // set topText to the meme's name
    }))
}


    
    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Text Name
                    <input
                        type="text"
                        placeholder="Add your text here"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Add your text here"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getMemeImage} disabled={allMemes.length === 0}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} alt="Meme" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}