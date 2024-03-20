


const SkeletonCard = () => {


    return (
        <>
            <div className="bg-white rounded-md p-2 flex flex-col justify-between shadow-md animate-pulse">
                <div className="m-2 flex justify-between mb-6">
                    <div className="text-green-500 text-4xl h-10 bg-gray-200 rounded w-1/2"></div>
                    <div className="flex items-center gap-1 text-gray-500">
                        <div className="text-xl text-green-500 h-6 bg-gray-200 rounded w-1/4"></div>
                    </div>
                </div>
                <div className="flex mb-3 gap-2">
                    <div className="rounded-full border-2 border-gray-200 p-1 text-xs text-green-500 h-4 bg-gray-200  w-10"></div>
                </div>
                <div>
                    <div className="text-gray-500 h-6 bg-gray-200 rounded w-full"></div>
                </div>
                <div className="flex justify-between mt-5">
                    <div className="h-6 bg-gray-200 rounded w-10"></div>
                    <div className="text-green-500  h-6 bg-gray-200 rounded w-1/4"></div>
                </div>
            </div>
        </>

    )
}

export default SkeletonCard