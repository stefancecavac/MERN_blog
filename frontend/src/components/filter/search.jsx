

const Search = ({ blogs , setFiltering}) => {

    const filter = (e) => {
       
        setFiltering(blogs.filter(blog => blog.title.toLowerCase().includes(e.target.value)))
        console.log(blogs)
    }
    return (
        <div className="bg-white shadow-md rounded-md p-5">
            <input className="" placeholder="Search" onChange={filter}></input>
        </div>
    )
}

export default Search