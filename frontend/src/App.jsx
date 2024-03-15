import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Navbar from "./components/header/navbar"
import Category from "./components/aside/category"
import TopBlogs from "./components/aside/topBlogs"
import BlogDetails from "./pages/blogDetails"
import Register from "./pages/register"
import Login from "./pages/login"

function App() {


  return (
    <div className="bg-gray-100 h-screen">
      <BrowserRouter>
        <Navbar></Navbar>

        <div className=" flex gap-5 lg:mx-56 my-10">
          <div className="flex flex-col gap-5 w-4/12">
            <Category></Category>
            <TopBlogs></TopBlogs>
          </div>

          <div className="w-8/12" >
            <Routes>
              <Route index element={<Home></Home>}></Route>
              <Route path="/blog/:blogId" element={<BlogDetails></BlogDetails>}></Route>

              <Route path="/user/register" element={<Register></Register>}></Route>
              <Route path="/user/login" element={<Login></Login>}></Route>


            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
