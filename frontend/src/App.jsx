import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Navbar from "./components/header/navbar"

import BlogDetails from "./pages/blogDetails"
import Register from "./pages/register"
import Login from "./pages/login"

function App() {


  return (
    <div className="overflow-auto h-screen bg-gray-100">
      <BrowserRouter>
        <Navbar></Navbar>

       

          
            <Routes>
              <Route index element={<Home></Home>}></Route>
              <Route path="/blog/:blogId" element={<BlogDetails></BlogDetails>}></Route>

              <Route path="/user/register" element={<Register></Register>}></Route>
              <Route path="/user/login" element={<Login></Login>}></Route>


            </Routes>
     

       


      </BrowserRouter>
    </div>
  )
}

export default App
