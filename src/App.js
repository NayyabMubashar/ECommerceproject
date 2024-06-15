import React from "react";


import Shoping from "./components/Shoping";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<Shoping/>} />
  <Route path="/About" element={<About/>} />
  <Route path="/Contact" element={<Contact/>} />
  <Route path="/Shop" element={<Shop/>} />
  <Route path="/cart" element={<Cart/>}/>

    </Routes>
    
    
  
      </BrowserRouter>
    </>
  );
}

export default App;
