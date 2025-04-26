import { useEffect } from "react"
import { useContext } from "react"
import PostContext from "../contexts/PostContext"
import axios from "axios"

function fetchPosts() {
    axios.get("https://www.dnd5eapi.co/api/monsters")
        .then((res) => setPosts(res.data.results))
        .catch((error) => console.error("errore durante il caricamento", error))
}

useEffect(fetchPosts, [])

export default fetchPosts