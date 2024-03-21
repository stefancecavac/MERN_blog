/* eslint-disable no-constant-condition */
import { useState } from "react"


const Search = ({ handleFilter, handleSearch }) => {
    const [filter, setFilter] = useState('')
    const [title, setTitle] = useState('')

    const handleFilterChange = () => {
        setFilter(prevFilter => {
            let newFilter;
            if (prevFilter === '') {
                newFilter = 'asc';
            } else if (prevFilter === 'asc') {
                newFilter = 'dsc';
            } else if (prevFilter === 'dsc') {
                newFilter = '';
            }
            handleFilter(newFilter);
            return newFilter;
        });
    };

    const onSearchChange = () => {
        handleSearch(title.toLowerCase())
    }


    return (
        <div className="bg-white shadow-md rounded-full p-2 flex justify-between">

            <div className="flex m-2 rounded-full border-2 border-green-500 p-2  w-full  ">
                <input className="focus:outline-none w-full" placeholder="Search" onChange={(e) => setTitle(e.target.value)} value={title} ></input>
                <button className="" onClick={onSearchChange}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                </button>
            </div>


            <button className="hover:bg-gray-200 hover:text rounded-full p-1 " onClick={() => handleFilterChange(filter)}><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 h-6 ${filter === 'dsc' ? `block` : `hidden`} `}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 h-6 ${filter === 'asc' ? `block` : `hidden`} `}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 h-6 ${filter === '' ? `block` : `hidden`} `}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>

            </button>


        </div>
    )
}

export default Search