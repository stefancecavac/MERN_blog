import { Link } from "react-router-dom"
import { UseUserContext } from "../../hooks/useUserHook"



const MenuModal = ({ modal, setModal }) => {
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
        <>

            <div onClick={() => setModal('closed')} className={`absolute  h-screen w-9/12  left-0 top-0   ${modal === 'open' ? ' fade-in  bg-black/50 ' : 'hidden'} `} ></div>

            <div className={`absolute top-0 right-0 h-screen bg-white w-3/12 flex flex-col justify-between p-5   ${modal === 'open' ? ' slide-in-right' : 'hidden'}`}>



                <div className="flex  flex-col mt-0 ">
                    <button className="block  ml-auto text-gray-500 hover:bg-gray-200 w-fit" onClick={() => setModal('closed')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="bg-gray-500 text-5xl text-gray-100 rounded-full flex flex-col justify-center m-auto  w-32 h-32 text-center">{user.userName.charAt(0).toUpperCase()}</div>
                    <p className="mt-5 m-auto ">{user.userName}</p>
                </div>

                <div className="flex flex-col items-center bg-gray-200 rounded-2xl gap-5 p-5 h-3/6">
                    <Link className="bg-green-500 rounded-full p-2 px-5 w-full text-center text-gray-200 border-2 border-green-500 hover:bg-white hover:text-green-500 "
                        to={"/blog/create-blog"}>Create Blog</Link>
                    <Link className="bg-green-500 rounded-full p-2 px-5 w-full text-center text-gray-200 border-2 border-green-500 hover:bg-white hover:text-green-500 "
                        to={"/blog/my-blogs"}>My Blogs</Link>
                </div>

                <div className="flex items-center justify-center">
                    <button className="bg-green-500 border-2 border-green-500 text-white rounded-full hover:bg-white hover:text-green-500 p-2 w-32" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </>
    )
}

export default MenuModal