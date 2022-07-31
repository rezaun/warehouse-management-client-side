import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import './components/Assets/Css/Style.css'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
