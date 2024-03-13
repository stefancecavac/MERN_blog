import { useEffect } from "react"
import {UseBlogContext} from '../hooks/useBlogHook'

const Home = () => {
    const { blogs, dispatch } = UseBlogContext()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/blogs`)
                const json = await response.json()

                if (response.ok) {
                    dispatch({type:'SET_BLOGS' , payload:json})
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    } , [dispatch])

    return (
        blogs && blogs.map((blog) => (
            <p key={blog._id}>{blog.title}</p>
        ))
    )
}

export default Home