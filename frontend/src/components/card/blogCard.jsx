import RatingCard from "../rating/ratingCard"

const BlogCard = ({ blog }) => {

    return (
        <div className="bg-white rounded-md p-2 inline-flex flex-col justify-between shadow-md h-full  md:w-full">
            <div className="m-2 flex justify-between mb-6">
                <p className="text-green-500 text-4xl  h-full p-1 overflow-hidden">{blog.title}</p>
                <span className="flex items-center gap-1 text-gray-500">Author: <p className="text-xl text-green-500 ">{blog.userId.userName}</p></span>
            </div>
            <div className="flex mb-3 gap-2">{blog.tags.map((tag) => (
                <p className="rounded-full border-2 border-gray-200 p-1 text-xs text-green-500" key={tag}>{tag}</p>
            ))}</div>

            <div className="break-words p-2">
                <p className="text-gray-500 ">{`${blog.content.substring(0, 100)}...`}</p>
            </div>

            <div className="flex justify-between items-center  mt-5">

                <div className="flex gap-2">
                
                       <RatingCard blog={blog}></RatingCard>
                   
                </div>
             
                <p className="text-green-500">{new Date(blog.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export default BlogCard