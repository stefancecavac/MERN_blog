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
        <div className="flex flex-col bg-white rounded p-5 shadow-md">
            <p className="text-3xl text-green-500 font-bold mb-5 ">Categories</p>
            <label className={`text-xl text-gray-500 my-2 border-2 px-2 border-green-500 rounded-full hover:cursor-pointer 
                            ${selectedTags.includes('Culture') ? 'bg-green-500 hover:bg-green-200 text-white' : 'border-green-500 hover:bg-gray-200'}`}>
                <input className="hidden"
                    type="checkbox"
                    checked={selectedTags.includes('Culture')}
                    onChange={() => handleTagChange('Culture')}
                />
                Culture
            </label>
            <hr />
            <label className={`text-xl text-gray-500 my-2 border-2 px-2 border-green-500 rounded-full hover:cursor-pointer 
                            ${selectedTags.includes('Music') ? 'bg-green-500 hover:bg-green-200 text-white' : 'border-green-500 hover:bg-gray-200'}`}>
                <input
                    className="hidden"
                    type="checkbox"
                    checked={selectedTags.includes('Music')}
                    onChange={() => handleTagChange('Music')}
                />
                Music
            </label>
            <hr />
            <label className={`text-xl text-gray-500 my-2 border-2 px-2 border-green-500 rounded-full hover:cursor-pointer 
                            ${selectedTags.includes('Travel') ? 'bg-green-500 hover:bg-green-200 text-white' : 'border-green-500 hover:bg-gray-200'}`}>
                <input
                    className="hidden"
                    type="checkbox"
                    checked={selectedTags.includes('Travel')}
                    onChange={() => handleTagChange('Travel')}
                />
                Travel
            </label>
            <hr />
            <label className={`text-xl text-gray-500 my-2 border-2 px-2 border-green-500 rounded-full hover:cursor-pointer 
                            ${selectedTags.includes('Love') ? 'bg-green-500 hover:bg-green-200 text-white' : 'border-green-500 hover:bg-gray-200'}`}>
                <input
                    className="hidden"
                    type="checkbox"
                    checked={selectedTags.includes('Love')}
                    onChange={() => handleTagChange('Love')}
                />
                Love
            </label>
            <hr />
            <label className={`text-xl text-gray-500 my-2 border-2 px-2 border-green-500 rounded-full hover:cursor-pointer 
                            ${selectedTags.includes('Food') ? 'bg-green-500 hover:bg-green-200 text-white' : 'border-green-500 hover:bg-gray-200'}`}>
                <input
                    className="hidden"
                    type="checkbox"
                    checked={selectedTags.includes('Food')}
                    onChange={() => handleTagChange('Food')}
                />
                Food
            </label>
            <hr />
            <label className={`text-xl text-gray-500 my-2 border-2 px-2 border-green-500 rounded-full hover:cursor-pointer 
                            ${selectedTags.includes('Creativity') ? 'bg-green-500 hover:bg-green-200 text-white' : 'border-green-500 hover:bg-gray-200'}`}>
                <input
                    className="hidden"
                    type="checkbox"
                    checked={selectedTags.includes('Creativity')}
                    onChange={() => handleTagChange('Creativity')}
                />
                Creativity
            </label>
            <hr />
        </div>
    );
};

export default Category;
