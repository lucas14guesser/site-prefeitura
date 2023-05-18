import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Home from "../Pages/Home";
import NavBar from "../Layout/NavBar/NavBar";

const Ways = () => {
  return (
    <BrowserRouter>
    <NavBar>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </NavBar>
    </BrowserRouter>
  )
}

export default Ways