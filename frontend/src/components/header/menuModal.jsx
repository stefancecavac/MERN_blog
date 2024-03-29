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

            <div onClick={() => setModal('closed')} className={`absolute z-50  h-screen md:w-9/12  left-0 top-0   ${modal === 'open' ? ' fade-in  bg-black/50 ' : 'hidden'} `} ></div>

            <div className={`z-50 absolute top-0 right-0 h-screen bg-white w-screen md:w-3/12 flex flex-col justify-between p-5   ${modal === 'open' ? ' slide-in-right' : 'hidden'}`}>



                <div className="flex  flex-col mt-0 ">
                    <button className="block  ml-auto text-gray-500 hover:bg-gray-200 w-fit" onClick={() => setModal('closed')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="bg-gray-500 text-5xl text-gray-100 rounded-full flex flex-col justify-center m-auto  w-32 h-32 text-center">{user.userName.charAt(0).toUpperCase()}</div>
                   
                    <Link to={`/user/${user._id}`} className="hover:bg-gray-200 rounded-full p-2  items-center w-3/6 m-auto mt-5 " >
                        <div className="flex gap-2 justify-center  w-full">
                            <p className="">{user.userName}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                        </div>
                    </Link>
                </div>

                <div className="flex flex-col items-center bg-gray-200 rounded-2xl gap-5 p-5 h-3/6">
                    <Link className="bg-green-500 rounded-full p-2 px-5 w-full text-center text-gray-200 border-2 border-green-500 hover:bg-white hover:text-green-500 "
                        to={"/"}>Home</Link>
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