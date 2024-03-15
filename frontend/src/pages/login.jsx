import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { UseUserContext } from '../hooks/useUserHook'


const Login = () => {
    const { dispatch } = UseUserContext()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const[error , setError] = useState(null)
    const navigateTo = useNavigate()

    const handleLogin = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch(`http://localhost:4000/api/user/login`, {
                method: 'POST',
                body: JSON.stringify({ email, password }),
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
                navigateTo('/')
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
            <form className="flex flex-col" onSubmit={handleLogin}>
                <p className="m-auto text-5xl text-green-500 font-bold mb-20">Login</p>

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

                <button className="bg-green-500 rounded-lg m-auto px-4 py-2 text-white border-2 border-green-500 hover:bg-white hover:text-green-500" type='submit'>Login</button>
                <p>Dont have an account?<Link to='/register'>Register</Link> here</p>

                {error && <div className="m-5">{error}</div>}
            </form>
        </div>
    )
}

export default Login