import { useEffect } from "react"
import { useContext } from "react"
import PostContext from "../contexts/PostContext"
import axios from "axios"

function fetchPosts() {
    const { setPosts } = useContext(PostContext)
    axios.get("https://www.dnd5eapi.co/api/monsters")
        .then((res) => setPosts(res.data.results))
        .catch((error) => console.error("errore durante il caricamento", error))
} [setPosts]

useEffect(fetchPosts, [])

export default fetchPosts