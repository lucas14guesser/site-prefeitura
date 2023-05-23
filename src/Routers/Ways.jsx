import { BrowserRouter, Routes, Route } from "react-router-dom";

//import React from 'react'
import Home from "../Pages/Home";
import NavBar from "../Layout/NavBar/NavBar";
import NavBar2 from "../Layout/NavBar/NavBar2";
//import Footer from "../Layout/Footer/Footer";

const Ways = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <NavBar2 />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Ways