import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import Construcao from '../Pages/Construcao';
import PortalServidor from '../Pages/PortalServidor';
import Legislacao from '../Pages/Legislacao';
import ContraCheque from '../Pages/ContraCheque';
import EspelhoPonto from '../Pages/EspelhoPonto';
import AvaliacaoDesempenhoServ from '../Pages/AvaliacaoDesempenhoServ';
import Consignados from '../Pages/Consignados';
import NormasPatrimonio from '../Pages/NormasPatrimonio';
import SjPrev from '../Pages/SjPrev';
import PlanoCargos from '../Pages/PlanoCargos';
import PlanoSaude from '../Pages/PlanoSaude';
import Turismo from '../Pages/Turismo'
import AllNoticias from '../Pages/AllNoticias';
import Prefeito from '../Pages/Prefeito';
import VicePrefeito from '../Pages/VicePrefeito';
import ProcuradoriaGeral from '../Pages/ProcuradoriaGeral';
import Administracao from '../Pages/Administracao';
import AssistenciaSocial from '../Pages/AssistenciaSocial';
import Cultura from '../Pages/Cultura';
import Comunicacao from '../Pages/Comunicacao';
import Inovacao from '../Pages/Inovacao';
import Financas from '../Pages/Financas';
import Governo from '../Pages/Governo';
import Educacao from '../Pages/Educacao';
import Esporte from '../Pages/Esporte';
import Infraestrutura from '../Pages/Infraestrutura';
import PlanejamentoEstrategico from '../Pages/PlanejamentoEstrategico';
import Receita from '../Pages/Receita';
import RegularizacaoFundiaria from '../Pages/RegularizacaoFundiaria';
import Saude from '../Pages/Saude';
import Seguranca from '../Pages/Seguranca';
import SecTransparencia from '../Pages/SecTransparencia';
import Urbanismo from '../Pages/Urbanismo';
import TextSjPrevidencia from './TextSjPrevidencia';
import TextFundacaoEducacional from './TextFundacaoEducacional';
import MeioAmbiente from '../Pages/MeioAmbiente';
import AntiDrogas from '../Pages/conselhos/AntiDrogas';
import EleicaoSociedade from '../Pages/conselhos/EleicaoSociedade'
import IgualdadeRacial from '../Pages/conselhos/IgualdadeRacial';
import Juventude from '../Pages/conselhos/Juventude';
import AdministracaoSjprev from '../Pages/conselhos/AdministracaoSjprev';
import AlimentacaoEscolar from '../Pages/conselhos/AlimentacaoEscolar';
import Cmas from '../Pages/conselhos/Cmas';
import ConferenciaSas from '../Pages/conselhos/ConferenciaSas';
import Comesj from '../Pages/conselhos/Comesj';
import Comdim from '../Pages/conselhos/Comdim';
import Cmdca from '../Pages/conselhos/Cmdca';
import PoliticaCultural from '../Pages/conselhos/PoliticaCultural';
import Cmssj from '../Pages/conselhos/Cmssj';

const TextWayz = () => {
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
        <Route path="/turismo" element={<Turismo />} />
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
      <Routes>
        <Route path="/todas-as-noticias" element={<AllNoticias />} />
      </Routes>
      <Routes>
        <Route path="/construcao" element={<Construcao />} />
      </Routes>
      <Routes>
        <Route path="/portal-servidor" element={<PortalServidor />} />
      </Routes>
      <Routes>
        <Route path="/legislacao" element={<Legislacao />} />
      </Routes>
      <Routes>
        <Route path="/contra-cheque" element={<ContraCheque />} />
      </Routes>
      <Routes>
        <Route path="/espelho-ponto" element={<EspelhoPonto />} />
      </Routes>
      <Routes>
        <Route path="/avaliacao-de-desempenho-de-servidores" element={<AvaliacaoDesempenhoServ />} />
      </Routes>
      <Routes>
        <Route path="/consignados" element={<Consignados />} />
      </Routes>
      <Routes>
        <Route path="/normas-do-patrimonio" element={<NormasPatrimonio />} />
      </Routes>
      <Routes>
        <Route path="/sjprev-2" element={<SjPrev />} />
      </Routes>
      <Routes>
        <Route path="/plano-de-cargos" element={<PlanoCargos />} />
      </Routes>
      <Routes>
        <Route path="/plano-de-saude" element={<PlanoSaude />} />
      </Routes>
      <Routes>
        <Route path="//prefeito-orvino-coelho-de-avila" element={<Prefeito />} />
      </Routes>
      <Routes>
        <Route path="/gabinete-do-vice-prefeito" element={<VicePrefeito />} />
      </Routes>
      <Routes>
        <Route path="//procuradoria-geral-do-municipio" element={<ProcuradoriaGeral />} />
      </Routes>
      <Routes>
        <Route path="/secretaria-de-administracao" element={<Administracao />} />
      </Routes>
      <Routes>
        <Route path="/secretaria-de-assistencia-social" element={<AssistenciaSocial />} />
      </Routes>
      <Routes>
        <Route path="/secretaria-municipal-de-cultura-e-turismo" element={<Cultura />} />
      </Routes>
      <Routes>
        <Route path="/secretaria-integrada-de-comunicacao" element={<Comunicacao />} />/
      </Routes>
      <Routes>
        <Route path="/secretaria-de-desenvolvimento-economico-e-inovacao" element={<Inovacao />} />
      </Routes>
      <Routes>
        <Route path="/secretaria-de-financas" element={<Financas />} />
      </Routes>
      <Routes>
        <Route path="/secretaria-de-governo" element={<Governo />} />
      </Routes>
      <Routes>
        <Route path="/secretaria-de-educacao" element={<Educacao />} />
      </Routes>
      <Routes>
        <Route path="/secretaria-municipal-de-esportes-e-lazer" element={<Esporte />} />
      </Routes>
      <Routes>
        <Route path="/secretaria-de-infraestrutura" element={<Infraestrutura />} />
      </Routes>
      <Routes>
        <Route path="/secretaria-de-planejamento-e-assuntos-estrategicos" element={<PlanejamentoEstrategico />} />
      </Routes>
      <Routes>
        <Route path="/secretaria-da-receita" element={<Receita />} />
      </Routes>
      <Routes>
        <Route path="/secretaria-de-regularizacao-fundiaria" element={<RegularizacaoFundiaria />} />
      </Routes>
      <Routes>
        <Route path="/secretaria-de-saude" element={<Saude />} />
      </Routes>
      <Routes>
        <Route path="/secretaria-de-seguranca,-defesa-civil-e-transito" element={<Seguranca />} />
      </Routes>
      <Routes>
        <Route path="/secretaria-de-transparencia" element={<SecTransparencia />} />
      </Routes>
      <Routes>
        <Route path="/secretaria-de-urbanismo-e-servicos-publicos" element={<Urbanismo />} />
      </Routes>
      <Routes>
        <Route path="/autarquia-sao-jose-previdencia" element={<TextSjPrevidencia />} />
      </Routes>
      <Routes>
        <Route path="/fundacao-educacional-municipal" element={<TextFundacaoEducacional />} />
      </Routes>
      <Routes>
        <Route path="/fundacao-municipal-do-meio-ambiente-e-desenvolvimento-sustentavel" element={<MeioAmbiente />} />
      </Routes>
      <Routes>
        <Route path="/conselho-municipal-antidrogas" element={<AntiDrogas />} />
      </Routes>
      <Routes>
        <Route path="/eleicao-da-sociedade-civil-2023" element={<EleicaoSociedade />} />
      </Routes>
      <Routes>
        <Route path="/conselho-municipal-de-promocao-da-igualdade-racial-–-compir" element={<IgualdadeRacial />} />
      </Routes>
      <Routes>
        <Route path="/conselho-municipal-da-juventude" element={<Juventude />} />
      </Routes>
      <Routes>
        <Route path="/conselho-de-administracao-–-sjprev" element={<AdministracaoSjprev />} />
      </Routes>
      <Routes>
        <Route path="/conselho-de-alimentacao-escolar" element={<AlimentacaoEscolar />} />
      </Routes>
      <Routes>
        <Route path="/conselho-municipal-de-assistencia-social-de-sao-jose-(cmas-sj)" element={<Cmas />} />
      </Routes>
      <Routes>
        <Route path="/14a-conferencia-municipal-de-assistencia-social" element={<ConferenciaSas />} />
      </Routes>
      <Routes>
        <Route path="/conselho-municipal-de-educacao-de-sao-jose-–-comesj" element={<Comesj />} />
      </Routes>
      <Routes>
        <Route path="/conselho-municipal-dos-direitos-da-mulher" element={<Comdim />} />
      </Routes>
      <Routes>
        <Route path="/conselho-municipal-dos-direitos-da-crianca-e-do-adolescente-de-sao-jose-(cmdca)" element={<Cmdca />} />
      </Routes>
      <Routes>
        <Route path="/conselho-municipal-de-politica-cultural" element={<PoliticaCultural />} />
      </Routes>
      <Routes>
        <Route path="/conselho-municipal-de-saude-de-sao-jose-–-cms/sj" element={<Cmssj />} />
      </Routes>
      <Footer />
      <FooterLocal />
    </BrowserRouter>
  )
}

export default TextWayz