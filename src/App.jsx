import PostContext from "./contexts/PostContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/homepage"
import About from "./pages/about"
import Posts from "./pages/lista-post"
import DefaultLayout from "./layouts/defaultLayout"
import BlogDetail from "./pages/blogDetail"
import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [posts, setPosts] = useState([])

  function fetchPosts() {
    axios.get("https://www.dnd5eapi.co/api/monsters")
      .then((res) => setPosts(res.data.results))
      .catch((error) => console.error("errore durante il caricamento", error))
  }

  useEffect(fetchPosts, []) // significa: soltanto quando monto questo componente, avviene la chiamata.



  return (
    <>
      <PostContext.Provider value={{ posts, setPosts }}>
        <BrowserRouter>



          <Routes>
            <Route Component={DefaultLayout}>
              <Route index Component={Homepage} />
              <Route path="/homepage" Component={Homepage} />
              <Route path="/about" Component={About} />
              <Route path="/lista-post" Component={Posts} />
              <Route path="/lista-post/:id" Component={BlogDetail} />
            </Route>

          </Routes>

        </BrowserRouter>
      </PostContext.Provider >
    </>
  )
}

export default App