import { Link } from "react-router-dom"
import { UseUserContext } from "../../hooks/useUserHook"

const UserInfo = () => {
    const { user ,dispatch } = UseUserContext()

    const handleLogout = async() =>{
        try{
            const response = await fetch(`http://localhost:4000/api/user/logout`, {
                method: 'POST',
                credentials: "include"
            })
            if(response.ok){
                localStorage.removeItem('user')
                dispatch({type:'LOGOUT'})
            }
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            {user ? (
                <button className="bg-green-500 border-2 border-green-500 text-white rounded-lg hover:bg-white hover:text-green-500 p-2" onClick={handleLogout}>Logout</button>
            ) : (
                <Link className="bg-green-500 border-2 border-green-500 text-white rounded-lg hover:bg-white hover:text-green-500 p-2" to="/user/login">Login</Link>
            )}
        </div>
    )
}

export default UserInfo