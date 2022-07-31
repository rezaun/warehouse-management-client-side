import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import './components/Assets/Css/Style.css'
import Blog from "./components/Pages/Blog/Blog";
import NotFound from "./components/Pages/NotFound/NotFound";
import Footer from "./components/Pages/Home/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
