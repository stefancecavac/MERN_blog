

const Category = ({handleTags}) => {

    return (
        <div className="flex flex-col bg-white rounded p-5 shadow-md">
            <p className="text-3xl text-green-500 font-bold mb-5 ">Categories</p>
            <button className="text-xl text-gray-500 my-2" onClick={() =>handleTags('Culture') }>Culture</button>
            <hr></hr>
            <button className="text-xl text-gray-500 my-2" onClick={() =>handleTags('Music') }>Music</button>
            <hr></hr>
            <button className="text-xl text-gray-500 my-2" onClick={() =>handleTags('Travel') }>Travel</button>
            <hr></hr>
            <button className="text-xl text-gray-500 my-2" onClick={() =>handleTags('Love') }>Love</button>
            <hr></hr>
            <button className="text-xl text-gray-500 my-2" onClick={() =>handleTags('Food') }>Food</button>
            <hr></hr>
            <button className="text-xl text-gray-500 my-2" onClick={() =>handleTags('Creativity') }>Creativity</button>
            <hr></hr>
        </div>
    )
}

export default Category