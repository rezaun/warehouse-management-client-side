import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import './components/Assets/Css/Style.css'
import Blog from "./components/Pages/Blog/Blog";
import NotFound from "./components/Pages/NotFound/NotFound";
import Footer from "./components/Pages/Home/Footer/Footer";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";
import Login from "./components/Auth/Login/Login";
import Registration from "./components/Pages/Registration/Registration";
import Inventory from "./components/Pages/Inventory/Inventory";
import ProductDetails from "./components/Pages/Home/ProductDetails/ProductDetails";
import AddProducts from "./components/Pages/AddProducts/AddProducts";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/blog" element={
        <RequireAuth>
          <Blog/>
        </RequireAuth>
        }></Route>
        <Route path="/AddProducts" element={
        
          <AddProducts/>
       
        }></Route>
        <Route path="/inventory" element={<Inventory/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
