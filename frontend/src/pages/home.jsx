import { useEffect, useState } from "react"
import { UseBlogContext } from '../hooks/useBlogHook'
import BlogCard from "../components/card/blogCard"
import { Link } from "react-router-dom"
import Search from "../components/filter/search"
import Category from "../components/aside/category"
import TopBlogs from "../components/aside/topBlogs"
import Pagination from "../components/filter/pagination"

const Home = () => {
    const { blogs, dispatch } = UseBlogContext()
    const [loading, setLoading] = useState(true)

    const [tags, setTags] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/blogs?tags=${tags}&page=${currentPage}`, {
                    credentials: "include"
                })
                const json = await response.json()

                if (response.ok) {
                    setLoading(false)
                    dispatch({ type: 'SET_BLOGS', payload: json })
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [dispatch, tags, currentPage])

    const handleTags = (tag) => {
        setTags(tag)
    }
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex flex-col h-screen gap-5 sm:flex-row mx-2  md:mx-10 lg:mx-32 my-10">
            <div className="flex flex-col h-screen gap-5 md:w-4/12">
                <Category handleTags={handleTags}></Category>
                <TopBlogs></TopBlogs>
            </div>

            <div className="h-screen md:w-8/12 ">
                <Search></Search>

                {loading ? (
                    <div className="h-screen w-8/12" >
                        <p>Loading...</p>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-2 w-full mt-5 gap-5 " >
                        {blogs && blogs.blog && blogs.blog.map((blog) => (
                            <Link className="transition ease-in-out hover:translate-y-1 hover:scale-105" to={`blog/${blog._id}`}
                                key={blog._id}><BlogCard blog={blog}></BlogCard></Link>
                        ))}
                    </div>
                )}

                <Pagination handlePageChange={handlePageChange}></Pagination>

            </div>
        </div>
    )
}

export default Home