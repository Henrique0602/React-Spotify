import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Artista() {

    const { id } = useParams()
    const [artista, setArtistas] = useState({})

    useEffect(() => {
        fetch(`https://localhost:3000/artistas/${id}`)
        .then(res => res.json())
        .then(data => setArtistas(data))
    }, [])


    return (
        <h1>{artista.name} </h1>
    )
}
