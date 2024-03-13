
const BlogCard = ({blog}) => {

    return(
        <div className="bg-white rounded-md p-2">
            <p className="text-green-500">{blog.title}</p>
            <p>{blog.createdAt}</p>
        </div>
    )
}

export default BlogCard