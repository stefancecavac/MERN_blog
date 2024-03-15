import { useEffect } from "react"
import { UseBlogContext } from '../hooks/useBlogHook'
import BlogCard from "../components/card/blogCard"
import { Link } from "react-router-dom"

const Home = () => {
    const { blogs, dispatch } = UseBlogContext()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/blogs`,{
                    credentials: "include"
                })
                const json = await response.json()

                if (response.ok) {
                    dispatch({ type: 'SET_BLOGS', payload: json })
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [dispatch])

    return (
            <div className="grid grid-cols-2 w-full h-60" >
                {blogs && blogs.map((blog) => (
                    <Link className="transition ease-in-out hover:translate-y-1 hover:scale-110" to={`blog/${blog._id}`}
                     key={blog._id}><BlogCard  blog={blog}></BlogCard></Link>
                ))}
            </div>
    )
}

export default Home