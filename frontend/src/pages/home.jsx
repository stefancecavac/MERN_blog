import { useEffect } from "react"
import { UseBlogContext } from '../hooks/useBlogHook'
import Category from "../components/aside/category"
import BlogCard from "../components/card/blogCard"
import TopBlogs from "../components/aside/topBlogs"

const Home = () => {
    const { blogs, dispatch } = UseBlogContext()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/blogs`)
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
        <div className=" flex gap-5 mx-56 my-10">
            <div className="flex flex-col gap-5 w-4/12">
                <Category></Category>
                <TopBlogs></TopBlogs>
            </div>

            <div className="grid grid-cols-2 w-full h-60">
                {blogs && blogs.map((blog) => (
                    <BlogCard key={blog._id} blog={blog}></BlogCard>
                ))}
            </div>
        </div>
    )
}

export default Home