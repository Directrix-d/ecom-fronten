

import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Checkout from "./pages/checkOut/Checkout"





function Services() {
  return <h1>Discover our Services!</h1>;
}

function Contact() {
  return <h1>Contact us at ECOM!</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div >
        <Navbar/>
        <div>
          <Routes>

       
            <Route path="/" element={<Home/>} />
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/products/:id" element={<Products/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path = "/register" element={<Register/>}/>
            <Route path="/checkout" element={<Checkout/>}/>

            
          </Routes>
          {/* <Footer/> */}
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
