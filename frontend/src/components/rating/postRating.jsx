import { useEffect, useState } from "react"
import { UseBlogContext } from "../../hooks/useBlogHook"


const PostRating = ({ blogId }) => {
    const [ratingNumber, setRatingNumber] = useState()
    const [comment, setComment] = useState('')
    const [error, setError] = useState(null)
    const [wrongInput, setWrongInput] = useState([])

    const { dispatch } = UseBlogContext()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:4000/api/rating/${blogId}`, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify({ ratingNumber, comment }),
            credentials: 'include'
        })
        const json = await response.json()


        if (!response.ok) {
            setWrongInput(json.wrongInput)
            setError(json.error)
        }

        if (response.ok) {
            setWrongInput(null)
            setError(null)
            setRatingNumber()
            setComment('')
            dispatch({ type: 'SET_RATING', payload: json })
        }
    }
    useEffect(() => {
        if (ratingNumber !== '') {
            console.log('this ratingNumber');
            setWrongInput(wrongInput.filter(input => input !== 'ratingNumber'));
        } 
    }, [ratingNumber])

    useEffect(() => {
        if (comment !== '') {
            console.log('this comment');
            setWrongInput(wrongInput.filter(input => input !== 'comment'));
        } 
    }, [comment])

    useEffect(() => {
        if (wrongInput && wrongInput.length === 0) {
          setError(null)
        } 
    }, [wrongInput])

    return (
        <div className="flex flex-col">
            <input placeholder={`${wrongInput && wrongInput.includes('comment') ? 'please fill out this field' : 'your comment here!'}`}
                className={`w-full rounded-3xl p-5 border-2 focus:outline-none border-gray-200 ${wrongInput && wrongInput.includes('comment') ? ' border-red-500 placeholder:text-red-500 ' : ''}`}
                type="text" onChange={(e) => setComment(e.target.value)} value={comment}></input>
            <div className="flex justify-between m-5 items-center">
                <div className="flex ">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <label className={`${wrongInput && wrongInput.includes('ratingNumber') ? 'border-2 border-red-500 rounded-full' : ''}`} key={index} >
                            <input type="radio" className="hidden"
                                checked={index === ratingNumber}
                                value={index}
                                onChange={() => setRatingNumber(index)}></input>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className={`w-5 h-5 text-gray-500 ${index <= ratingNumber ? 'fill-amber-300' : ''}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </label>
                    ))}
                </div>
                <button className="bg-gray-200 rounded-full p-3 py-1 border-2 border-gray-200 hover:bg-white text-gray-500" onClick={handleSubmit}>Submit</button>
            </div>
            {error && <div className="bg-red-200 text-red-500 border-2 border-red-500 rounded-full">{error}</div>}

        </div>
    )
}

export default PostRating