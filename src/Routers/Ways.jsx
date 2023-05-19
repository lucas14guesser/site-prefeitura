import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Home from "../Pages/Home";
import NavBar from "../Layout/NavBar/NavBar";
import Footer from "../Layout/Footer/Footer";

const Ways = () => {
  return (
    <BrowserRouter>
    <NavBar>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </NavBar>
    <Footer />
    </BrowserRouter>
  )
}

export default Ways