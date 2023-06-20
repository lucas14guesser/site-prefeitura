import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Home from "../Pages/Home";
import NavBar from "../Layout/NavBar/NavBar";
import NavBar2 from "../Layout/NavBar/NavBar2";
import Footer from "../Layout/Footer/Footer";
import FooterLocal from "../Layout/Footer/FooterLocal";
import Cidade from "../Pages/Cidade";
import Feriados from "../Pages/Feriados";
import Prefeitos from "../Pages/Prefeitos";
import Dados from "../Pages/Dados";
import Simbolos from "../Pages/Simbolos";
import Vias from "../Pages/Vias";
import Procon from "../Pages/Procon";
import Licitacoes from "../Pages/Licitacoes";
import PublicacoesLegais from "../Pages/PublicacoesLegais";
import ServicosPMSJ from "../Pages/ServicosPMSJ";
import DocsProcessos from "../Pages/DocsProcessos";
import Transparencia from "../Pages/Transparencia";
import Ouvidoria from "../Pages/Ouvidoria";
import PortalCidadao from "../Pages/PortalCidadao";
import CentroAtendimento from "../Pages/CentroAtendimento";
import Dat from "../Pages/Dat";
import Cati from "../Pages/Cati";
import Empreendedor from "../Pages/Empreendedor";
import SouMei from "../Pages/SouMei";
import CertidoesSouMei from "../Pages/CertidoesSouMei";
import CertidoesBaixa from "../Pages/CertidoesBaixa";
import NotasFiscais from "../Pages/NotasFiscais";
import SouEmpresa from "../Pages/SouEmpresa";
import LivroEletronico from "../Pages/LivroEletronico";
import VigilanciaSanitaria from "../Pages/VigilanciaSanitaria";
import NotaFiscalEmp from "../Pages/NotaFiscalEmp";
import AllServices from "../Pages/AllServices";

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
      <Routes>
        <Route path="/simbol" element={<Simbolos />} />
      </Routes>
      <Routes>
        <Route path="/portal-cidadao" element={<PortalCidadao />} />
      </Routes>
      <Routes>
        <Route path="/centro-atendimento" element={<CentroAtendimento />} />
      </Routes>
      <Routes>
        <Route path="/vias" element={<Vias />} />
      </Routes>
      <Routes>
        <Route path="/procon" element={<Procon />} />
      </Routes>
      <Routes>
        <Route path="/licitacoes" element={<Licitacoes />} />
      </Routes>
      <Routes>
        <Route path="/publi-legais" element={<PublicacoesLegais />} />
      </Routes>
      <Routes>
        <Route path="/servicos-pmsj" element={<ServicosPMSJ />} />
      </Routes>
      <Routes>
        <Route path="/docs-processos" element={<DocsProcessos />} />
      </Routes>
      <Routes>
        <Route path="/portal-transparencia" element={<Transparencia />} />
      </Routes>
      <Routes>
        <Route path="/ouvidoria" element={<Ouvidoria />} />
      </Routes>
      <Routes>
        <Route path="/dat" element={<Dat />} />
      </Routes>
      <Routes>
        <Route path="/cati" element={<Cati />} />
      </Routes>
      {/*<Routes>
        <Route path="/vacinacao" element={<Vacinacao />} />
      </Routes>
  */}
      <Routes>
        <Route path="/empreendedor" element={<Empreendedor />} />
      </Routes>
      <Routes>
        <Route path="/sou-mei" element={<SouMei />} />
      </Routes>
      <Routes>
        <Route path="/certidoes-sou-mei" element={<CertidoesSouMei />} />
      </Routes>
      <Routes>
        <Route path="/certidoes-baixa" element={<CertidoesBaixa />} />
      </Routes>
      <Routes>
        <Route path="/notas-fiscais" element={<NotasFiscais />} />
      </Routes>
      <Routes>
        <Route path="/sou-empresa" element={<SouEmpresa />} />
      </Routes>
      <Routes>
        <Route path="/livro-eletronico" element={<LivroEletronico />} />
      </Routes>
      <Routes>
        <Route path="/vigilancia-sanitaria" element={<VigilanciaSanitaria />} />
      </Routes>
      <Routes>
        <Route path="/nota-fiscal-emp" element={<NotaFiscalEmp />} />
      </Routes>
      <Routes>
        <Route path="/todos-os-servicos" element={<AllServices />} />
      </Routes>
      <Footer />
      <FooterLocal />
    </BrowserRouter>
  )
}

export default Ways