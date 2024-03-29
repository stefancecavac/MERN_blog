import { useState } from "react"
import { Link } from 'react-router-dom'
import { UseUserContext } from '../hooks/useUserHook'


const Register = () => {
    const { dispatch } = UseUserContext()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const[error , setError] = useState(null)


    const handleRegister = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch(`http://localhost:4000/api/user/register`, {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include"
            })
            const json = await response.json()
            
            if(!response.ok){
                setError(json.error)
            }
            if(response.ok){
                setError(null)
                localStorage.setItem('user',JSON.stringify(json))
                dispatch({type:'LOGIN' , payload:json})
            }
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <div className="m-auto bg-white rounded-md p-5 w-3/5">
            <form className="flex flex-col" onSubmit={handleRegister}>
                <p className="m-auto text-5xl text-green-500 font-bold mb-20">Register</p>

                <label className="m-auto text-gray-500 text-2xl mb-5">Username:</label>
                <input type='text' className="m-auto border-b-2 border-green-500  mb-5 w-4/6"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                ></input>

                <label className="m-auto text-gray-500 text-2xl mb-5">Email:</label>
                <input type='email' className="m-auto border-b-2 border-green-500  mb-5 w-4/6"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                ></input>

                <label className="m-auto text-gray-500 text-2xl mb-5">Password:</label>
                <input type='password' className="m-auto border-b-2 border-green-500  mb-5 w-4/6"
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                ></input>

                <button className="bg-green-500 rounded-lg m-auto px-4 py-2 text-white border-2 border-green-500 hover:bg-white hover:text-green-500" type='submit'>Register</button>
                <p>Already have an account?<Link to='/login'>Login</Link> here</p>

                {error && <div className="m-5">{error}</div>}
            </form>
        </div>
    )
}

export default Register