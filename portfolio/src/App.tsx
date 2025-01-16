import { BrowserRouter, Routes, Route} from "react-router-dom"

// COMPONENTS
import Home from "./Pages/Home/Home"
import Blog from "./Pages/Blog/Blog"


function App() {


  return (
      <BrowserRouter>
        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/blog" element={<Blog />}/>
        </Routes>
      </BrowserRouter>  )
}

export default App
