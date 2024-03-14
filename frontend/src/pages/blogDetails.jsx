import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UseBlogContext } from "../hooks/useBlogHook"


const BlogDetails = () => {
    const { blogId } = useParams()
    const { singleBlog, dispatch } = UseBlogContext()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/api/blogs/${blogId}`)
            const json = await response.json()

            if (response.ok) {
                setLoading(false)
                dispatch({ type: 'SET_BLOG', payload: json })
            }
        }
        fetchData()
    }, [dispatch, blogId])

    return (
        <div className="p-5 bg-white rounded-md">
            {loading ? (
                <p className=" flex w-full">loading...</p>
            ) : (
                <div>
                    <p className="text-green-500 text-3xl font-bold mb-10">{singleBlog.title}</p>
                    <p className="text-gray-500">{singleBlog.content}</p>
                </div>
            )}
        </div>
    )
}

export default BlogDetails