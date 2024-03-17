

const Category = ({onFilter}) => {

    return (
        <div className="flex flex-col bg-white rounded p-5 shadow-md">
            <p className="text-3xl text-green-500 font-bold mb-5 ">Categories</p>
            <button className="text-xl text-gray-500 my-2" onClick={() =>onFilter('Culture') }>Culture</button>
            <hr></hr>
            <button className="text-xl text-gray-500 my-2" onClick={() =>onFilter('Music') }>Music</button>
            <hr></hr>
            <button className="text-xl text-gray-500 my-2" onClick={() =>onFilter('Travel') }>Travel</button>
            <hr></hr>
            <button className="text-xl text-gray-500 my-2" onClick={() =>onFilter('Love') }>Love</button>
            <hr></hr>
            <button className="text-xl text-gray-500 my-2" onClick={() =>onFilter('Food') }>Food</button>
            <hr></hr>
            <button className="text-xl text-gray-500 my-2" onClick={() =>onFilter('Creativity') }>Creativity</button>
            <hr></hr>
        </div>
    )
}

export default Category