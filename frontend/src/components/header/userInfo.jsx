import { Link } from "react-router-dom"
import { UseUserContext } from "../../hooks/useUserHook"

const UserInfo = () => {
    const { user, dispatch } = UseUserContext()

    const handleLogout = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/user/logout`, {
                method: 'POST',
                credentials: "include"
            })
            if (response.ok) {
                localStorage.removeItem('user')
                dispatch({ type: 'LOGOUT' })
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {user ? (
                <div className="flex items-center gap-10 bg-gray-200 rounded-full p-2">
                    <p className="text-gray-500 text-2xl bg-white rounded-full px-3 py-1">{user.userName}</p>
                    <button className="bg-green-500 border-2 border-green-500 text-white rounded-full hover:bg-white hover:text-green-500 p-2" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <Link className="bg-green-500 border-2 border-green-500 text-white rounded-full hover:bg-white hover:text-green-500 p-2" to="/user/login">Login</Link>
            )}
        </div>
    )
}

export default UserInfo