import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Home from "../Pages/Home";
import NavBar from "../Layout/NavBar/NavBar";
import NavBar2 from "../Layout/NavBar/NavBar2";
import Footer from "../Layout/Footer/Footer";
import Cidade from "../Pages/Cidade";
import Feriados from "../Pages/Feriados";
import Prefeitos from "../Pages/Prefeitos";
import Dados from "../Pages/Dados";

const Ways = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <NavBar2 />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/cidade" element={<Cidade />} />
      </Routes>
      <Routes>
        <Route path="/feriados" element={<Feriados />} />
      </Routes>
      <Routes>
        <Route path="/prefeitos" element={<Prefeitos />} />
      </Routes>
      <Routes>
        <Route path="/dados" element={<Dados />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Ways