import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
export function Blogs() {
    const { posts, loading } = useContext(AppContext);
    console.log(posts);
    return (
        <div>
            {
                loading ? (<div>Loading</div>) :
                    posts.length === 0 ? (<div className="">
                        <p className="">No Post Found</p>
                    </div>) : (posts.map((post) => (
                        <div key={post.id}>
                            <p>By <span>{post.title}</span> </p>
                            <p>posted on <span>{post.date}</span></p>
                            <p>{post.content}</p>
                            <div>
                                {post.tags.map((tag,index) => (
                                    <span key={index}>#{tag}</span>
                                ))}
                            </div>
                        </div>
                    )))
            }
        </div>
    )
}