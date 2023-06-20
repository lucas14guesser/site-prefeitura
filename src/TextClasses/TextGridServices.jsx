import React from 'react'

import {Container} from "react-bootstrap";

import GridServiceLinkButton from '../LinkButtons/GridServiceLinkButton';

import '../Styles/GridService.css'

const TextGridServices = () => {
  return (
    <>
    <div className="background_grid_service">
        <Container>
            <h1 className="title_grid_service">
                Serviços Atende.NET
            </h1>
            <div className="main_service_grid">
            <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/guias-de-iptu/detalhar/1" className="item_service_grid" target="_blank">
                    <img src="../img/icons/iptu.png"/>
                    <small>Emissão Guias de IPTU</small>
                </a>
                <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/consulta-de-autenticidade-de-nota-fiscal-eletronica-nfse" className="item_service_grid" target="_blank">
                    <img src="../img/icons/nfAut.png"/>
                    <small>Autenticidade de Nota Fiscal</small>
                </a>
                <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/emissao-do-recibo-de-pagamento" className="item_service_grid" target="_blank">
                    <img src="../img/icons/contraCheque.png"/>
                    <small>Contra-Cheque</small>
                </a>
                <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/emissao-de-processo-digital/detalhar/1" className="item_service_grid" target="_blank">
                    <img src="../img/icons/processoDigital.png"/>
                    <small>Abertura de Processo Digital</small>
                </a>
                <a href="https://saojose.atende.net/cidadao/pagina/formularios-para-abertura-de-processos-downloads" className="item_service_grid" target="_blank">
                    <img src="../img/icons/documentoDigital.png"/>
                    <small>Documentos Processo Digital</small>
                </a>
                <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/consulta-de-licitacoes/detalhar/1" className="item_service_grid" target="_blank">
                    <img src="../img/icons/licitacao.png"/>
                    <small>Consulta de Licitações</small>
                </a>
                <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/consulta-de-processo-digital/detalhar/1" className="item_service_grid" target="_blank">
                    <img src="../img/icons/consProcesso.png"/>
                    <small>Consulta de Processo</small>
                </a>
                <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/emissao-da-ficha-financeira/detalhar/1" className="item_service_grid" target="_blank">
                    <img src="../img/icons/fichaFinanceira.png"/>
                    <small>Ficha Financeira</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/certidao-negativa-de-debitos" className="item_service_grid" target="_blank">
                    <img src="../img/icons/emissaoCnd.png"/>
                    <small>Emissão da Certidão CND</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/ficha-cadastral-do-imovel" className="item_service_grid" target="_blank">
                    <img src="../img/icons/iptu.png"/>
                    <small>Espelho Cadastral IPTU</small>
                </a>
                <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/ouvidoria-municipal" className="item_service_grid" target="_blank">
                    <img src="../img/icons/ouvidoria.png"/>
                    <small>Ouvidoria Municipal</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-atendimento-plantao-fiscal" className="item_service_grid" target="_blank">
                    <img src="../img/icons/plantaoFiscal.png"/>
                    <small>Atendimento Plantão Fiscal</small>
                </a>
                <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/acesso-ao-sistema-fiscal-web-novo" className="item_service_grid" target="_blank">
                    <img src="../img/icons/sistemaFiscal.png"/>
                    <small>Acesso ao Sistema Fiscal Web</small>
                </a>
                <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/impressao-do-alvara" className="item_service_grid" target="_blank">
                    <img src="../img/icons/emissaoAlvara.png"/>
                    <small>Emissão de Alvará</small>
                </a>
                <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/alterar-senha-de-acesso" className="item_service_grid" target="_blank">
                    <img src="../img/icons/alterarSenha.png"/>
                    <small>Alterar Senha de Acesso</small>
                </a>
                <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/autenticidade-de-documentos-e-relatorios" className="item_service_grid" target="_blank">
                    <img src="../img/icons/autenticidadeDocs.png"/>
                    <small>Autenticidade de Documentos</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/certidao-de-baixa-da-inscricao-municipal" className="item_service_grid" target="_blank">
                    <img src="../img/icons/empresa.png"/>
                    <small>Certidão de Baixa de Empresa</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/autenticidade-de-certidao-negativa-de-debitos" className="item_service_grid" target="_blank">
                    <img src="../img/icons/cnd.png"/>
                    <small>Autenticidade e Consulta da CND</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/comprovante-de-inscricao-municipal" className="item_service_grid" target="_blank">
                    <img src="../img/icons/espelhoEconomico.png"/>
                    <small>Espelho Econômico</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/consulta-a-ouvidoria" className="item_service_grid" target="_blank">
                    <img src="../img/icons/ouvidoria.png"/>
                    <small>Consulta a Ouvidoria</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/guias-itbi" className="item_service_grid" target="_blank">
                    <img src="../img/icons/itbi.png"/>
                    <small>Emissão de Guias ITBI</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/guias-divida-ativa" className="item_service_grid" target="_blank">
                    <img src="../img/icons/divida.png"/>
                    <small>Emissão de Guias Dívida Ativa</small>
                </a>
                <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/guias-de-issalvara" className="item_service_grid" target="_blank">
                    <img src="../img/icons/guiaIss.png"/>
                    <small>Emissão de Guias ISS/Alvará</small>
                </a>
                <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/guias-de-servicos-diversos" className="item_service_grid" target="_blank">
                    <img src="../img/icons/receitasDiversas.png"/>
                    <small>Emissão de Guias Receitas Diversas</small>
                </a>
                <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/extrato-de-pagamentos" className="item_service_grid" target="_blank">
                    <img src="../img/icons/pagamento.png"/>
                    <small>Extrato de Pagamento</small>
                </a>
                <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/extrato-de-debito" className="item_service_grid" target="_blank">
                    <img src="../img/icons/debito.png"/>
                    <small>Extrato de Débito</small>
                </a>
                <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/emissao-nota-avulsa" className="item_service_grid" target="_blank">
                    <img src="../img/icons/nf.png"/>
                    <small>Nota Fiscal de Serviço Avulsa</small>
                </a>
            </div>
            <GridServiceLinkButton />
        </Container>         
    </div>
    </>
  )
}

export default TextGridServices