

const Search = ({handleFilter}) => {

   
    return (
        <div className="bg-white shadow-md rounded-md p-5">
            <input className="" placeholder="Search" ></input>
            <button onClick={() => handleFilter('asc')}>upppp</button>
            <button onClick={() => handleFilter('dsc')}>downss</button>

        </div>
    )
}

export default Search