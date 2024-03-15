
const BlogCard = ({ blog }) => {

    return (
        <div className="bg-white rounded-md p-2 flex flex-col justify-between">
            <div className="m-2 flex justify-between">
                <p className="text-green-500 text-2xl ">{blog.title}</p>
                <p className="text-green-500 ">{blog.userId.userName}</p>
            </div>

            <div>
                <p className="text-gray-500 ">{`${blog.content.substring(0,255)}...`}</p>
            </div>

            <div className="flex justify-end">
                <p className="text-gray-500">{new Date(blog.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export default BlogCard