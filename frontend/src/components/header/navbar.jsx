import { Link } from "react-router-dom"
import UserInfo from "./userInfo"

const Navbar = () => {

    return(
        <div className="flex justify-between items-center shadow-md bg-white  p-5">
            <Link to='/' className="text-6xl text-green-500">Blogger</Link>
            <UserInfo></UserInfo>
        </div>
    )
}

export default Navbar