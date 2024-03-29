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
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/blogs?title=${search}&tags=${tags}&page=${currentPage}&sortOrder=${filterOrder}`, {
                    credentials: "include"
                })
                const json = await response.json()

                if (!response.ok) {
                    setError(true)

                }
                if (response.ok) {
                    setError(null)
                    setLoading(false)
                    dispatch({ type: 'SET_BLOGS', payload: json })
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
        
    }, [dispatch, tags, currentPage, filterOrder, search, ])

    const handleTags = (tag) => {
        setTags(tag)
        setCurrentPage(1)
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
        <div className="flex flex-col min-h-screen gap-5 md:flex-row mx-2  md:mx-5 lg:mx-20 my-10">
            <div className="flex flex-col gap-5 md:w-2/12 mx-10">
                <Category handleTags={handleTags}></Category>
                <TopBlogs></TopBlogs>
            </div>

            <div className="min-h-screen md:w-10/12 ">
                <Search handleFilter={handleFilter} handleSearch={handleSearch}></Search>

                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full mt-5 gap-5 min-h-screen " >
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <SkeletonCard key={index}></SkeletonCard>
                        ))}
                    </div>
                ) : (
                    error ? (
                        <p>no blogs found</p>
                    ) : (
                        <div className="md:mx-10 min-h-screen">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 min-h-screen  " >
                                {blogs.blog.map((blog) => (

                                    <Link className="transition ease-in-out hover:translate-y-1 hover:scale-105" to={`blog/${blog._id}`}
                                        key={blog._id}><BlogCard blog={blog}></BlogCard></Link>
                                ))}
                            </div>
                           {blogs && <Pagination handlePageChange={handlePageChange}></Pagination> } 
                        </div>
                    )
                )}



            </div>
        </div>
    )
}

export default Home