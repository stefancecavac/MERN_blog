import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/home"
import Navbar from "./components/header/navbar"

import BlogDetails from "./pages/blogDetails"
import Register from "./pages/register"
import Login from "./pages/login"
import { UseUserContext } from "./hooks/useUserHook"
import NotFoundPage from "./pages/404page"
import MyBlogs from "./pages/myBlogs"

function App() {
const {user} = UseUserContext()

  return (
    <div className="overflow-auto h-screen bg-gray-100">
      <BrowserRouter>
        <Navbar></Navbar>

       

          
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/blog/:blogId" element={<BlogDetails></BlogDetails>}></Route>
              <Route path="/blog/my-blogs" element={<MyBlogs></MyBlogs>}></Route>


              <Route path="/user/register" element={user ? (<Navigate to='/'></Navigate>):(<Register></Register>)}></Route>
              <Route path="/user/login" element={user ? (<Navigate to='/'></Navigate>):(<Login></Login>)}></Route>

              <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>

            </Routes>
     

       


      </BrowserRouter>
    </div>
  )
}

export default App
