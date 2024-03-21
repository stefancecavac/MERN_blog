import { useEffect, useState } from "react"
import { UseBlogContext } from '../hooks/useBlogHook'
import BlogCard from "../components/card/blogCard"
import { Link } from "react-router-dom"
import Search from "../components/filter/search"
import Category from "../components/aside/category"
import TopBlogs from "../components/aside/topBlogs"
import Pagination from "../components/filter/pagination"
import SkeletonCard from "../components/skeleton/skeletonCard"

const Home = () => {
    const { blogs, dispatch } = UseBlogContext()
    const [loading, setLoading] = useState(true)

    const [tags, setTags] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [filterOrder, setFilterOrder] = useState('')
    const [search , setSearch] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/blogs?title=${search}&tags=${tags}&page=${currentPage}&sortOrder=${filterOrder}`, {
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
    }, [dispatch, tags, currentPage, filterOrder ,search])

    const handleTags = (tag) => {
        setTags(tag)
    }
    const handlePageChange = (page) => {
        setLoading(true)
        setCurrentPage(page);
    };
    const handleFilter = (filter) => {
        setFilterOrder(filter)
    }

    const handleSearch = (search) => {
        setSearch(search)
    }

    return (
        <div className="flex flex-col h-screen gap-5 sm:flex-row mx-2  md:mx-10 lg:mx-32 my-10">
            <div className="flex flex-col h-screen gap-5 md:w-2/12">
                <Category handleTags={handleTags}></Category>
                <TopBlogs></TopBlogs>
            </div>

            <div className="h-screen md:w-10/12 ">
                <Search handleFilter={handleFilter} handleSearch={handleSearch}></Search>

                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full mt-5 gap-5  " >
                        {[1,2,3,4,5,6].map((index) => (
                            <SkeletonCard key={index}></SkeletonCard>
                        ))}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full mt-5 gap-5  " >
                        {blogs.blog.map((blog) => (
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