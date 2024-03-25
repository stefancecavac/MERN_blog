import { useState } from "react"

const Category = ({ handleTags }) => {
    const [selectedTags, setSelectedTags] = useState([])

    const handleTagChange = (tag) => {
        let updatedTags
        if (selectedTags.includes(tag)) {
            updatedTags = selectedTags.filter(item => item !== tag)
        } else {
            updatedTags = [...selectedTags, tag]
        }
        setSelectedTags(updatedTags)
        handleTags(updatedTags)
    }

    return (
        <div className=" md:flex flex-col bg-white rounded p-5 shadow-md">
            <p className="text-3xl text-green-500 font-bold mb-5 ">Categories</p>

            {['Culture', 'Music', 'Travel', 'Love', 'Food', 'Creativity'].map((value) => (
                <label key={value} className={`hidden md:block text-xl text-gray-500 my-2 border-2 px-2 border-green-500 rounded-full hover:cursor-pointer 
                ${selectedTags.includes(value) ? 'bg-green-500 hover:bg-green-200 text-white' : 'border-green-500 hover:bg-gray-200'}`}>
                    <input className="hidden"
                        type="checkbox"
                        checked={value}
                        onChange={() => handleTagChange(value)}
                    />
                    {value}
                </label>
            ))}
        </div>
    )
}




export default Category;
