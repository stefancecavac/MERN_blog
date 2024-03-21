import { useEffect, useState } from "react"
import { UseBlogContext } from "../../hooks/useBlogHook"
import { Link } from 'react-router-dom'

const TopBlogs = () => {
    const { topBLogs, dispatch } = UseBlogContext()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/blogs/topBlogs`, {
                })
                const json = await response.json()

                if (response.ok) {
                    setLoading(false)
                    dispatch({ type: 'SET_TOP_BLOG', payload: json })
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [dispatch])



    return (
        <div className="flex flex-col bg-white rounded p-5 shadow-md">
            <p className="text-green-500 text-xl font-bold mb-5">Top Blogs:</p>
            {loading ? (
                <p>loading</p>
            ) : (
                <div className="flex flex-col ">
                {topBLogs.map((blog) => (
                    <div key={blog._id}>
                        <Link to={`blog/${blog._id}`} ><p className="text-gray-500">{blog.title}</p></Link>
                        <hr></hr>
                    </div>
                ))}
                </div>
            )}

        </div>
    )
}

export default TopBlogs