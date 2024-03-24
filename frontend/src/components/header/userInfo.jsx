import { Link } from "react-router-dom"
import { UseUserContext } from "../../hooks/useUserHook"
import { useState } from "react"
import MenuModal from "./menuModal"

const UserInfo = () => {
    const { user } = UseUserContext()
    const [modal, setModal] = useState('closed')

    return (

        <div className="flex items-center gap-10 bg-gray-200 rounded-full p-2">
            {user && (
                <>
                    <p className="hidden md:block text-gray-500 text-2xl bg-white rounded-full px-3 py-1">{user.userName}</p>
                    <button className="hover:cursor-pointer " onClick={() => setModal('open')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <MenuModal modal={modal} setModal={setModal}></MenuModal>
                </>
            )}
            {!user && (
                <Link className="bg-green-500 border-2 border-green-500 text-white rounded-full hover:bg-white hover:text-green-500 p-2" to="/user/login">Login</Link>
            )}
        </div>

    )
}

export default UserInfo



