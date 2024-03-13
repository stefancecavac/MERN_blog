import { BrowserRouter , Routes ,Route } from "react-router-dom"
import Home from "./pages/home"
import Navbar from "./components/header/navbar"

function App() {
  

  return (
    <div className="bg-gray-100 h-screen">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Home></Home>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
