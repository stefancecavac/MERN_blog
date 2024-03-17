import { useEffect, useState } from "react"
import { UseBlogContext } from '../hooks/useBlogHook'
import BlogCard from "../components/card/blogCard"
import { Link } from "react-router-dom"
import Search from "../components/filter/search"
import Category from "../components/aside/category"
import TopBlogs from "../components/aside/topBlogs"

const Home = () => {
    const { blogs, dispatch } = UseBlogContext()

    const [tags, setTags] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/blogs?tags=${tags}`, {
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
    }, [dispatch , tags])

    const handleTags = (tag) => {
        setTags(tag)
    }

    return (
        <div className="flex flex-col h-full gap-5 sm:flex-row mx-2  md:mx-20 lg:mx-40 my-10">
            <div className="flex flex-col h-screen gap-5 md:w-4/12">
                <Category onFilter={handleTags} ></Category>
                <TopBlogs></TopBlogs>
            </div>

            <div>
            <Search></Search>

                <div className="grid lg:grid-cols-2 w-full h-60 mt-5 gap-5 " >
                    {blogs && blogs.map((blog) => (
                        <Link className="transition ease-in-out hover:translate-y-1 hover:scale-110" to={`blog/${blog._id}`}
                            key={blog._id}><BlogCard blog={blog}></BlogCard></Link>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Home