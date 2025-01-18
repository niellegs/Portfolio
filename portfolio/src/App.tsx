import { BrowserRouter, Routes, Route} from "react-router-dom"

// PAGES
import Home from "./Pages/Home/Home"
import Blog from "./Pages/Blog/Blog"

// UTILS
import ScrollToTop from "./utils/ScrolltoTop"


function App() {


  return (
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/blog" element={<Blog />}/>
        </Routes>
      </BrowserRouter>  )
}

export default App
