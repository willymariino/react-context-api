
import { Link } from "react-router-dom"
import { useContext } from "react"
import PostContext from "../contexts/PostContext"



function Posts() {
    const { posts } = useContext(PostContext)



    return (
        <>
            <h1>tutti nostri post</h1>


            <p>lista mostri Dungeons & Dragons</p>

            <ol>

                {posts.map((post) => (
                    <li key={post.index}>

                        <Link to={"/lista-post/" + post.index}><h3>{post.name}</h3></Link>


                    </li>



                ))}

            </ol>


        </>
    )

}

export default Posts