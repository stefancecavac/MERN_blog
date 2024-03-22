import { useEffect, useState } from "react"
import { UseBlogContext } from '../hooks/useBlogHook'
import {UseUserContext} from '../hooks/useUserHook'
import BlogCard from "../components/card/blogCard"
import { Link } from "react-router-dom"
import Pagination from "../components/filter/pagination"
import SkeletonCard from "../components/skeleton/skeletonCard"

const MyBlogs = () => {
    const { blogs, dispatch } = UseBlogContext()
    const {user} = UseUserContext()

    const [loading, setLoading] = useState(true)

    const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/blogs/my-blogs?page=${currentPage}`, {
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
    }, [dispatch, currentPage])


    const handlePageChange = (page) => {
        setLoading(true)
        setCurrentPage(page);
    };


    return (
        <div className="flex flex-col h-screen gap-5 sm:flex-row mx-2  md:mx-10 lg:mx-32 my-10">

            <div className="h-screen ">
                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full mt-5 gap-5  " >
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <SkeletonCard key={index}></SkeletonCard>
                        ))}
                    </div>
                ) : (
                    <div>

                        <span className="flex text-2xl text-green-500">{user.userName}<p>&apos;s blogs</p></span>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full mt-5 gap-5  " >

                            {blogs.blog.map((blog) => (
                                <Link className="transition ease-in-out hover:translate-y-1 hover:scale-105" to={`/blog/${blog._id}`}
                                    key={blog._id}><BlogCard blog={blog}></BlogCard></Link>
                            ))}
                        </div>
                    </div>
                )}

                <Pagination handlePageChange={handlePageChange}></Pagination>

            </div>
        </div>
    )
}

export default MyBlogs