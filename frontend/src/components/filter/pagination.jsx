import { UseBlogContext } from "../../hooks/useBlogHook"


const Pagination = ({ handlePageChange }) => {
    const { blogs } = UseBlogContext()

    const pages = [];

    if (blogs) {
        for (let i = 1; i <= blogs.totalPages; i++) {
            pages.push(i);
        }
    }

    console.log(pages)

    return (
        <div className="bg-white rounded-full p-2 my-5 flex justify-between" >
            <button className="disabled:invisible" onClick={() => handlePageChange(1)} disabled={blogs && blogs.page === 1}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.0" stroke="currentColor"
                    className="text-green-500  w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>

            <div className="flex gap-5">
                {blogs && (
                    pages.slice(Math.max(blogs.page - 3, 0), Math.min(blogs.page + 2, blogs.totalPages)).map((page) => (
                        <label className={` text-gray-500 text-2xl hover:cursor-pointer ${page === blogs.page ? 'text-green-500' : ''}`} key={page} >{page}
                            <input className="hidden" type="radio" value={blogs && page} checked={page === blogs.page} onChange={() => handlePageChange(page)} />
                            <label></label>
                        </label>

                    )
                    ))}
            </div>

            <button className="disabled:invisible" onClick={() => handlePageChange(blogs.totalPages)} disabled={blogs && blogs.page === blogs.totalPages}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.0" stroke="currentColor"
                    className="text-green-500  w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    )

}

export default Pagination