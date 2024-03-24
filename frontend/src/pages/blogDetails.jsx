import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UseBlogContext } from "../hooks/useBlogHook"
import CommentCard from "../components/comments and rating/commentCard"
import PostRating from "../components/rating/postRating"


const BlogDetails = () => {
    const { blogId } = useParams()
    const { singleBlog, dispatch , rating } = UseBlogContext()
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
    }, [dispatch, blogId ,rating])

    return (
        <div className="p-5 bg-white rounded-md shadow-md m-5">
            {loading ? (
                <p className=" flex w-full">loading...</p>
            ) : (
                <div>
                    <p className="text-green-500 text-3xl font-bold mb-10">{singleBlog.title}</p>
                    <p className="text-gray-500 break-words">{singleBlog.content}</p>
                    <CommentCard loading={loading}></CommentCard>
                    <PostRating blogId={blogId}></PostRating>
                </div>
                 
            )}


        </div>
    )
}

export default BlogDetails