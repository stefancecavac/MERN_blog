import UserInfo from "./userInfo"

const Navbar = () => {

    return(
        <div className="flex justify-between items-center shadow-md bg-white  p-5">
            <p className="text-6xl text-green-500">Blogger</p>
            <UserInfo></UserInfo>
        </div>
    )
}

export default Navbar