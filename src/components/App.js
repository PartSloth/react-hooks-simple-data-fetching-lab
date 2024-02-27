import React, { useEffect, useState } from "react";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [image, setImage] = useState("")

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(res => {
            setImage(res.message)
            setIsLoaded(true)
        })
    }, [])


    if(!isLoaded) return <p>Loading...</p>;

    return <img src={image} alt="A Random Dog"/>

}

export default App;