import { UseUserContext } from "../../hooks/useUserHook"


 
const MenuModal = ({modal, setModal}) => {
    const {dispatch} = UseUserContext()


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

    return(
        <>
       
        <div onClick={() => setModal('closed')} className={`absolute  h-screen w-9/12  left-0 top-0   ${modal === 'open' ? ' fade-in  bg-black/50 ' : 'hidden'} `} ></div>

                <div className={`absolute top-0 right-0 h-screen bg-white w-3/12 flex flex-col justify-between p-5   ${modal === 'open' ? ' slide-in-right' : 'hidden'}  `}>
                    <div className="flex justify-end ">
                        <button onClick={() => setModal('closed')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="h-4/6 bg-green-600">
                        asd
                    </div>

                    <div className="flex items-center justify-center">
                        <button className="bg-green-500 border-2 border-green-500 text-white rounded-full hover:bg-white hover:text-green-500 p-2 w-32" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
                </>
    )
}

export default MenuModal