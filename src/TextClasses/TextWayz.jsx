import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Construcao from '../Pages/Construcao';

import Home from "../Pages/home/Home";
import AllNoticias from '../Pages/home/noticias/AllNoticias';

import NavBar from '../Layout/NavBar/NavBar';
import NavBar2 from "../Layout/NavBar/NavBar2";
import PortalServidor from '../Layout/NavBar/PortalServidor';
import Legislacao from '../Layout/NavBar/Legislacao';
import ContraCheque from '../Layout/NavBar/ContraCheque';
import EspelhoPonto from '../Layout/NavBar/EspelhoPonto';
import AvaliacaoDesempenhoServ from '../Layout/NavBar/AvaliacaoDesempenhoServ';
import Consignados from '../Layout/NavBar/Consignados';
import NormasPatrimonio from '../Layout/NavBar/NormasPatrimonio';
import PlanoCargos from '../Layout/NavBar/PlanoCargos';
import PlanoSaude from '../Layout/NavBar/PlanoSaude';

import AllServices from "../Layout/GridServicesMain/AllServices";

import Footer from "../Layout/Footer/Footer";
import FooterLocal from "../Layout/Footer/FooterLocal";

import Cidade from "../Pages/saoJoseComponent/Cidade";
import Feriados from "../Pages/saoJoseComponent/Feriados";
import Prefeitos from "../Pages/saoJoseComponent/Prefeitos";
import Dados from "../Pages/saoJoseComponent/Dados";
import Simbolos from "../Pages/saoJoseComponent/Simbolos";
import Turismo from '../Pages/saoJoseComponent/Turismo'

import Licitacoes from "../Pages/empresaComponent/Licitacoes";
import DocsProcessos from "../Pages/empresaComponent/DocsProcessos";

import Procon from "../Pages/cidadaoComponent/Procon";
import PortalCidadao from "../Pages/cidadaoComponent/PortalCidadao";
import ServicosPMSJ from "../Pages/cidadaoComponent/ServicosPMSJ";

import CentroAtendimento from "../Pages/servicosPrefeitura/CentroAtendimento";
import Dat from "../Pages/servicosPrefeitura/Dat";
import Cati from "../Pages/servicosPrefeitura/Cati"

import Transparencia from "../Pages/transparenciaComponent/Transparencia";
import Ouvidoria from "../Pages/transparenciaComponent/Ouvidoria";

import PublicacoesLegais from "../Pages/PublicacoesLegais";
;
import CertidoesSouMei from "../Pages/empreendedorComponent/CertidoesSouMei";
import CertidoesBaixa from "../Pages/empreendedorComponent/CertidoesBaixa";
import NotasFiscais from "../Pages/empreendedorComponent/NotasFiscais";
import LivroEletronico from "../Pages/empreendedorComponent/LivroEletronico";
import VigilanciaSanitaria from "../Pages/empreendedorComponent/VigilanciaSanitaria";
import NotaFiscalEmp from "../Pages/empreendedorComponent/NotaFiscalEmp";
import SouEmpresa from "../Pages/empreendedorComponent/SouEmpresa";
import Empreendedor from "../Pages/empreendedorComponent/Empreendedor";
import SouMei from "../Pages/empreendedorComponent/SouMei";

import SjPrevidencia from '../Pages/home/secretarias/SjPrevidencia';
import Prefeito from '../Pages/home/secretarias/Prefeito';
import VicePrefeito from '../Pages/home/secretarias/VicePrefeito';
import ProcuradoriaGeral from '../Pages/home/secretarias/ProcuradoriaGeral';
import Administracao from '../Pages/home/secretarias/Administracao';
import AssistenciaSocial from '../Pages/home/secretarias/AssistenciaSocial';
import Cultura from '../Pages/home/secretarias/Cultura';
import Comunicacao from '../Pages/home/secretarias/Comunicacao';
import Inovacao from '../Pages/home/secretarias/Inovacao';
import Financas from '../Pages/home/secretarias/Financas';
import Governo from '../Pages/home/secretarias/Governo';
import Educacao from '../Pages/home/secretarias/Educacao';
import Esporte from '../Pages/home/secretarias/Esporte';
import Infraestrutura from '../Pages/home/secretarias/Infraestrutura';
import PlanejamentoEstrategico from '../Pages/home/secretarias/PlanejamentoEstrategico';
import Receita from '../Pages/home/secretarias/Receita';
import RegularizacaoFundiaria from '../Pages/home/secretarias/RegularizacaoFundiaria';
import Saude from '../Pages/home/secretarias/Saude';
import Seguranca from '../Pages/home/secretarias/Seguranca';
import SecTransparencia from '../Pages/home/secretarias/SecTransparencia';
import Urbanismo from '../Pages/home/secretarias/Urbanismo';
import SjPrev from '../Layout/NavBar/SjPrev';
import FundacaoEducacional from '../Pages/home/secretarias/FundacaoEducacional';
import MeioAmbiente from '../Pages/home/secretarias/MeioAmbiente';

import AntiDrogas from '../Pages/home/conselhos/AntiDrogas';
import EleicaoSociedade from '../Pages/home/conselhos/EleicaoSociedade'
import IgualdadeRacial from '../Pages/home/conselhos/IgualdadeRacial';
import Juventude from '../Pages/home/conselhos/Juventude';
import AdministracaoSjprev from '../Pages/home/conselhos/AdministracaoSjprev';
import AlimentacaoEscolar from '../Pages/home/conselhos/AlimentacaoEscolar';
import Cmas from '../Pages/home/conselhos/Cmas';
import ConferenciaSas from '../Pages/home/conselhos/ConferenciaSas';
import Comesj from '../Pages/home/conselhos/Comesj';
import Comdim from '../Pages/home/conselhos/Comdim';
import Cmdca from '../Pages/home/conselhos/Cmdca';
import PoliticaCultural from '../Pages/home/conselhos/PoliticaCultural';
import Cmssj from '../Pages/home/conselhos/Cmssj';
import Conseg from '../Pages/home/conselhos/Conseg';
import Cmisj from '../Pages/home/conselhos/Cmisj';
import Contribuintes from '../Pages/home/conselhos/Contribuintes';
import Cmpdsj from '../Pages/home/conselhos/Cmpdsj';
import UsuarioSevPublico from '../Pages/home/conselhos/UsuarioSevPublico';
import ConselhoTutelar from '../Pages/home/conselhos/ConselhoTutelar';
import ConselhoFiscal from '../Pages/home/conselhos/ConselhoFiscal';
import Fundeb from '../Pages/home/conselhos/Fundeb';

import ColetaLixo from '../Pages/home/linksUteis/ColetaLixo';
import ZonaAzul from '../Pages/home/linksUteis/ZonaAzul';
import Sus from '../Pages/home/linksUteis/Sus';
import VagaCei from '../Pages/home/linksUteis/VagaCei';
import TabelaCosip from '../Pages/home/linksUteis/TabelaCosip';
import ColetaSeletiva from '../Pages/home/linksUteis/ColetaSeletiva';
import SejaVoluntario from '../Pages/home/linksUteis/SejaVoluntario';
import LegislacaoMunicipal from '../Pages/home/linksUteis/LegislacaoMunicipal';
import PropostaTransporteColetivo from '../Pages/home/linksUteis/PropostaTransporteColetivo';
import ConcursoPublico from '../Pages/home/linksUteis/ConcursoPublico';
import BancoPrecos from '../Pages/home/linksUteis/BancoPrecos';
import ParceriaSociedadeCivil from '../Pages/home/linksUteis/ParceriaSociedadeCivil';
import IsencaoIptu from '../Pages/home/linksUteis/IsencaoIptu';

import JusticaPraticas from '../Pages/home/projetosAcoes/JusticaPraticas';
import CentroTerceiraIdade from '../Pages/home/projetosAcoes/CentroTerceiraIdade';
import HorariosFunesj from '../Pages/home/projetosAcoes/HorariosFunesj';
import PlanoVacinacao from '../Pages/home/projetosAcoes/PlanoVacinacao';
import LeisTransito from '../Pages/home/projetosAcoes/LeisTransito';
import FeiraFreguesia from '../Pages/home/projetosAcoes/FeiraFreguesia';
import ListaEsperaSus from '../Pages/home/projetosAcoes/ListaEsperaSus';
import ParceriaEsporte from '../Pages/home/projetosAcoes/ParceriaEsporte';

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
        <Route path="/feriados-municipais" element={<Feriados />} />
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
        <Route path="/procon-municipal-de-sao-jose" element={<Procon />} />
      </Routes>
      <Routes>
        <Route path="/licitacoes" element={<Licitacoes />} />
      </Routes>
      <Routes>
        <Route path="/publi-legais" element={<PublicacoesLegais />} />
      </Routes>
      <Routes>
        <Route path="/carta-de-servicos" element={<ServicosPMSJ />} />
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
        <Route path="/autarquia-sao-jose-previdencia" element={<SjPrevidencia />} />
      </Routes>
      <Routes>
        <Route path="/fundacao-educacional-municipal" element={<FundacaoEducacional />} />
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
      <Routes>
        <Route path="/home/conselhos-de-seguranca-–-conseg" element={<Conseg />} />
      </Routes>
      <Routes>
        <Route path="/conselho-municipal-do-idoso-de-sao-jose-(cmi-sj)" element={<Cmisj />} />
      </Routes>
      <Routes>
        <Route path="/conselho-municipal-dos-contribuintes" element={<Contribuintes />} />
      </Routes>
      <Routes>
        <Route path="/conselho-municipal-dos-direitos-da-pessoa-com-deficiencia-de-sao-jose-cmpd/sj" element={<Cmpdsj />} />
      </Routes>
      <Routes>
        <Route path="/conselho-municipal-de-usuarios-dos-servicos-publicos" element={<UsuarioSevPublico />} />
      </Routes>
      <Routes>
        <Route path="/conselho-tutelar" element={<ConselhoTutelar />} />
      </Routes>
      <Routes>
        <Route path="/conselho-fiscal-–-sjprev" element={<ConselhoFiscal />} />
      </Routes>
      <Routes>
        <Route path="/fundo-manutencao-educacao-basica-fundeb" element={<Fundeb />} />
      </Routes>
      <Routes>
        <Route path="/horarios-coleta-de-lixo-(seletiva-e-convencional)" element={<ColetaLixo />} />
      </Routes>
      <Routes>
        <Route path="/autorizacao-para-uso-de-vaga-zona-azul" element={<ZonaAzul />} />
      </Routes>
      <Routes>
        <Route path="/lista-de-espera-sus" element={<Sus />} />
      </Routes>
      <Routes>
        <Route path="/solicitacoes-de-vaga-cei/cem" element={<VagaCei />} />
      </Routes>
      <Routes>
        <Route path="/tabela-cosip-sao-jose" element={<TabelaCosip />} />
      </Routes>
      <Routes>
        <Route path="/coleta-seletiva-horarios" element={<ColetaSeletiva />} />
      </Routes>
      <Routes>
        <Route path="/seja-um-voluntario" element={<SejaVoluntario />} />
      </Routes>
      <Routes>
        <Route path="/legislacao-municipal" element={<LegislacaoMunicipal />} />
      </Routes>
      <Routes>
        <Route path="/proposta-do-novo-sistema-de-transporte-coletivo-municipal" element={<PropostaTransporteColetivo />} />
      </Routes>
      <Routes>
        <Route path="/concursos-publicos-–-documentos-e-declaracoes" element={<ConcursoPublico />} />
      </Routes>
      <Routes>
        <Route path="/banco-de-precos-em-saude" element={<BancoPrecos />} />
      </Routes>
      <Routes>
        <Route path="/parcerias-com-a-sociedade-civil" element={<ParceriaSociedadeCivil />} />
      </Routes>
      <Routes>
        <Route path="/isencao-iptu-2023" element={<IsencaoIptu />} />
      </Routes>
      <Routes>
        <Route path="/projeto-justica-e-praticas-restaurativas" element={<JusticaPraticas />} />
      </Routes>
      <Routes>
        <Route path="/centro-de-atencao-a-terceira-idade" element={<CentroTerceiraIdade />} />
      </Routes>
      <Routes>
        <Route path="/horarios-de-atividades-da-funesj" element={<HorariosFunesj />} />
      </Routes>
      <Routes>
        <Route path="/plano-municipal-de-vacinacao" element={<PlanoVacinacao />} />
      </Routes>
      <Routes>
        <Route path="/novas-leis-de-transito" element={<LeisTransito />} />
      </Routes>
      <Routes>
        <Route path="/feira-da-freguesia" element={<FeiraFreguesia />} />
      </Routes>
      <Routes>
        <Route path="/coleta-seletiva" element={<ColetaSeletiva />} />
      </Routes>
      <Routes>
        <Route path="/lista-de-espera-do-sistema-unico-de-saude-(sus)" element={<ListaEsperaSus />} />
      </Routes>
      <Routes>
        <Route path="/termos-de-parcerias-fundacao-esportes" element={<ParceriaEsporte />} />
      </Routes>
      <Footer />
      <FooterLocal />
    </BrowserRouter>
  )
}

export default TextWayz