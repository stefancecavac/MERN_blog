import { useState } from "react"
import { UseBlogContext } from "../hooks/useBlogHook"


const CreateBlog = () => {
    const { dispatch } = UseBlogContext()
    const [step, setStep] = useState(1)
    const [wrongInput, setWrongInput] = useState([])

    const [error, setError] = useState(null)
    const [title, setTitle] = useState('')
    const [content, setContet] = useState('')
    const [tags, setTags] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:4000/api/blogs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({ title, content, tags }),
            credentials: 'include'
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setWrongInput(json.wrongInput)
        }
        if (response.ok) {
            setError(null)
            setWrongInput(null)
            dispatch({ type: 'POST_BLOG', payload: json })
        }
    }

    const handleTag = (value) => {
        if (tags.includes(value)) {
            return
        }
        setTags([...tags, value])
    }

    console.log(wrongInput)
    return (
        <div className=" w-full h-4/5  ">

            {step === 1 && (
                <form onSubmit={handleSubmit} className=" p-5 flex flex-col justify-between items-center m-auto my-32 w-2/6 h-3/6  bg-white shadow-md rounded-lg">
                    <div>
                        <p className="text-4xl text-green-500 font-bold">Create your blog</p>
                    </div>
                    <div className="flex flex-col w-5/6">
                        <label className="text-xl text-gray-500" >Blog title</label>
                        <input onChange={(e) => setTitle(e.target.value)} value={title}
                            placeholder='your title goes here' className="rounded-lg border-2 border-gray-200 my-5 p-3 focus:outline-none" type="text"></input>

                        <div className="flex flex-col w-5/6">
                            <label className="text-xl text-gray-500" >Add tags</label>
                            <select onChange={(e) => handleTag(e.target.value)}>
                                {['Culture', 'Music', 'Travel', 'Love', 'Food', 'Creativity'].map((index) => (
                                    <option key={index} value={index}>{index}</option>
                                ))}
                            </select>

                        </div>
                        <div className="flex gap-2">{tags.map((value) => (
                            <p className="border-2 border-green-500 rounded-full p-1 px-3 text-green-500 hover:cursor-pointer hover:bg-red-200 hover:border-red-500 hover:text-red-500"
                                onClick={() => setTags(setTags.filter(tag => tag !== value))} key={value}>{value}</p>

                        ))}
                        </div>


                    </div>
                    <div className="flex justify-end ml-auto">
                        <button type="button" onClick={() => setStep(step + 1)} className=" w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </button>
                    </div>

                </form>
            )}
            {step === 2 && (
                <form onSubmit={handleSubmit} className=" p-5 flex flex-col justify-between items-center m-auto my-12 w-5/6 h-5/6  bg-white shadow-md rounded-lg">
                    <div>
                        <p className="text-4xl text-green-500 font-bold">Add block content</p>
                    </div>

                    <div className="flex flex-col w-5/6 h-full">
                        <label className="text-xl text-gray-500" >Blog content</label>
                        <input type='text' onChange={(e) => setContet(e.target.value)} value={content}
                            placeholder='your title goes here' className="rounded-lg border-2 border-gray-200 my-5 p-3 focus:outline-none h-full" ></input>
                    </div>

                    <div className="flex justify-between  w-full ">
                        <button type="button" onClick={() => setStep(step - 1)} className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <button type="button" onClick={() => setStep(step + 1)} className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </form>
            )}
            {step === 3 && (
                <form onSubmit={handleSubmit} className=" p-5 flex flex-col justify-between items-center m-auto my-12 w-5/6 h-5/6  bg-white shadow-md rounded-lg">
                    <div>
                        <p className="text-4xl text-green-500 font-bold h-full">Finishing touches</p>
                    </div>

                    <div className="flex flex-col w-5/6 h-full">
                        <div>
                            <p>{title}</p>
                            <p>{tags}</p>

                        </div>

                        <textarea readOnly
                            value={content} placeholder='your title goes here' className=" resize-none rounded-lg border-2 border-gray-200 my-5 p-3 focus:outline-none h-full" type="text"></textarea>
                    </div>


                    <div className="flex justify-between  w-full ">
                        <button type="button" onClick={() => setStep(step - 1)} className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        {error && <div className="bg-red-200 text-red-500 border-2 border-red-500 p-2 rounded-full">{error}</div>}

                        <button type="submit" className="bg-green-500 border-2 border-green-500 text-gray-100 hover:bg-white hover:text-green-500 rounded-md p-2 px-4 ">Create</button>
                    </div>
                </form>
            )}
        </div >


    )
}

export default CreateBlog