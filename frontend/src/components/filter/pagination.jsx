import { UseBlogContext } from "../../hooks/useBlogHook"


const Pagination = ({ handlePageChange }) => {
    const { blogs } = UseBlogContext()

    return (
        <div className="bg-white rounded-full p-2 my-5 flex justify-between" >
            <button className="disabled:invisible" onClick={() => handlePageChange(blogs && blogs.page - 1)} disabled={blogs && blogs.page === 1 }>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.0" stroke="currentColor"
                    className="text-green-500  w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>

            <span className="text-gray-500">Page {blogs && blogs.page} of {blogs && blogs.totalPages}</span>
            <button className="disabled:invisible" onClick={() => handlePageChange(blogs && blogs.page + 1)} disabled={blogs && blogs.page === blogs.totalPages }>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.0" stroke="currentColor"
                    className="text-green-500  w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    )
}

export default Pagination