import React from 'react'
import { useState } from 'react';

import {Container} from "react-bootstrap";

import '../Styles/GridService.css'
import { Link } from 'react-router-dom';

const TextAllServices = () => {

  return (
    <>
    <div className="background_grid_service">
        <Container>
            <Link to='/' className='link_service_grid'>Home</Link>/<Link to='/todos-os-servicos' className='link_service_grid'>Todos os Serviços Disponíveis</Link>
            <h1 className="title_grid_service">
                Todos os Serviços Disponíveis
            </h1>
            <div className="main_service_grid">
                <a href="/dat" className="item_service_grid">
                    <img src="../img/icons/dat.png"/>
                    <small>DAT – Acidente de Trânsito</small>
                </a>
                <a href="/cati" className="item_service_grid">
                    <img src="../img/icons/cati.png"/>
                    <small>Cati</small>
                </a>                  
                <a href="/portal-cidadao" className="item_service_grid">
                    <img src="../img/icons/cidadao.png"/>
                    <small>Serviço para o Cidadão</small>
                </a>
                <a href="/centro-atendimento" className="item_service_grid">
                    <img src="../img/icons/receita.png"/>
                    <small>Receita <br />Online</small>
                </a>
                <a href="/empreendedor" className="item_service_grid">
                    <img src="../img/icons/empreendedor.png"/>
                    <small>Espaço do Empreendedor</small>
                </a>
                 <a href="https://saojosemaisempregos.santacatarinapelaeducacao.com.br/oportunidades" className="item_service_grid" target="_blank">
                    <img src="../img/icons/emprego.png"/>
                    <small>São José + Empregos</small>
                </a>
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
                    <small>Sistema Fiscal Web</small>
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
                <a href="https://saojose.atende.net/autoatendimento/servicos/recuperacao-de-senha-de-acesso/detalhar/1" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/recSenha.png"/>
                    <small>Recuperação de Senha</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/solicitacoes-de-assinatura" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/assinatura.png"/>
                    <small>Solicitações de Assinatura</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/consulta-nfs-e-de-servicos-prestados" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/servicoPrest.png"/>
                    <small>NFS-e Serviços Prestados</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/consulta-nfs-e-de-servicos-tomados" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/servicoTom.png"/>
                    <small>NFS-e Serviços Tomados</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/emissao-de-nfs-e-por-webservice" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/webService.png"/>
                    <small>NFS-e por WebService</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/tipos-de-documento-para-escrituracao" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/escritura.png"/>
                    <small>Documento para Escritura</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/acesso-a-informacao" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/informacao.png"/>
                    <small>Acesso à Informação</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/autenticidade-de-email" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/emailAut.png"/>
                    <small>Autenticidade de Email</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/carta-de-servicos" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/cartaServ.png"/>
                    <small>Carta de Serviços</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/consulta-documentos" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/consDoc.png"/>
                    <small>Consulta Documentos</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/solicitacao-de-acesso" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/solicitacaoAccess.png"/>
                    <small>Solicitação de Acesso</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/autenticidade-de-boleto" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/boletoAut.png"/>
                    <small>Autenticidade de Boleto</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/certidao-de-valor-venal" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/valorVenal.png"/>
                    <small>Certidão de Valor Venal</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/creditos-de-nfse" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/creditosIptu.png"/>
                    <small>Créditos de IPTU (NFS-e)</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/declaracao-de-quitacao-de-itbi" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/quitItbi.png"/>
                    <small>Declaração de quitação de ITBI</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/extrato-do-contribuinte" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/contribuinte.png"/>
                    <small>Extrato do Contribuinte</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/ficha-financeira-do-contribuinte" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/fichaContri.png"/>
                    <small>Ficha Contribuinte</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/gerenciamento-de-imoveis" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/gerImov.png"/>
                    <small>Gerenciamento de Imóvel</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/guia-unificada" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/guiaUn.png"/>
                    <small>Emissão de Guia Única</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/guias-de-construcao-civil" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/guiaObr.png"/>
                    <small>Emissão de Guias de Obras</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/itbi-online" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/itbiOn.png"/>
                    <small>ITBI Online</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/localizacao-de-empresas-e-estabelecimentos-comerciais" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/locCom.png"/>
                    <small>Localização de Empresas e Comércios</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/meus-debitos" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/myDeb.png"/>
                    <small>Meus débitos</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/parcelamentos" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/parcelamento.png"/>
                    <small>Parcelamentos</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/valores-a-receber" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/valReceb.png"/>
                    <small>Valores a Receber</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/consulta-de-atas-registro-preco" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/preco.png"/>
                    <small>Atas Registro Preço</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/cotacao-de-planilha-de-precos" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/planilhaPreco.png"/>
                    <small>Planilha de Preços</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/ordens-de-compra-referentes-ao-covid-19" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/compraCvd.png"/>
                    <small>Ordens Compra referentes COVID-19</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/readequacao-valores-do-lote" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/valLote.png"/>
                    <small>Readequação Valores do Lote</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/termos-de-parceria-lei-1301914" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/parceria.png"/>
                    <small>Termos de Parceria - Lei 13.019/14</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/validacao-de-crc" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/regCad.png"/>
                    <small>Certificado de Registro Cadastral</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/atualizacao-cadastral-funcionario" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/attCad.png"/>
                    <small>Atualização Cadastral Funcionário</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/autenticidade-recibo-de-pagamento" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/recibo.png"/>
                    <small>Autenticidade do Recibo de Pagamento</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/comprovante-de-rendimentos-irrf" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/irrf.png"/>
                    <small>Comprovante de Rendimento IRRF</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/declaracao-vinculo-empregaticio" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/vincEmp.png"/>
                    <small>Declaração Vínculo Empregatício</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/extrato-anual-de-contribuicoes-para-previdencia" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/contPrev.png"/>
                    <small>Extrato Contribuições Previdência</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/lancamento-de-convenios" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/convenio.png"/>
                    <small>Lançamento Convênios</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-area-tecnica-enfrentamento-a-doencas-cronicas-nao-transmissiveis" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/dCronic.png"/>
                    <small>Doenças Crônicas não Transmissíveis</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-area-tecnica-saude-bucal" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/bucal.png"/>
                    <small>Saúde Bucal</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-area-tecnica-saude-da-crianca" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/sauCrianca.png"/>
                    <small>Saúde da Criança</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-area-tecnica-saude-da-mulher" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/sauMulher.png"/>
                    <small>Saúde da Mulher</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-cadastro-de-fornecedores-protocolo-da-licitacao" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/fornecedor.png"/>
                    <small>Cadastro de Fornecedores</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-custeio-dos-servicos-de-iluminacao-publica-cosip" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/ilumin.png"/>
                    <small>COSIP</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-denuncia-de-caramujo-africano" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/caramujo.png"/>
                    <small>Denúncia de Caramujo Africano</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-denuncia-de-escorpiao-ou-lagartas" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/escorpiao.png"/>
                    <small>Denúncia de Escorpião ou Lagartas</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-denuncia-de-foco-de-mosquito-de-dengue" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/dengue.png"/>
                    <small>Denúncia de Dengue</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-denuncia-de-morcegos-ratos-ou-carrapatos" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/rato.png"/>
                    <small>Denúncia de Ratos</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-denuncia-de-morcegos-ratos-ou-carrapatos" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/morcego.png"/>
                    <small>Denúncia de Morcegos</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-denuncia-de-morcegos-ratos-ou-carrapatos" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/carrapato.png"/>
                    <small>Denúncia de Carrapatos</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-denuncia-de-pombos" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/pombo.png"/>
                    <small>Denúncia de Pombos</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-evento-adversos-posvacinacao" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/vac.png"/>
                    <small>Evento Adversos Pós-Vacinação</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-execucao-e-fiscalizacao-de-obras-publicas" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/fiscObra.png"/>
                    <small>Fiscalização de Obras Publicas</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-grupo-de-tabagismo-parar-de-fumar" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/fumo.png"/>
                    <small>Grupo Tabagismo Parar de Fumar</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-iluminacao-publica" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/iluPub.png"/>
                    <small>Iluminação Pública</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-limpeza-de-ruas" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/limpRua.png"/>
                    <small>Limpeza de Ruas</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-lista-de-espera-celk" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/celk.png"/>
                    <small>Lista de Espera Celk</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-lista-de-esperara-sisreg" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/sisreg.png"/>
                    <small>Lista de Espera Sisreg</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-medicamento-do-componente-basico-de-assistencia-farmaceutica-cbaf" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/cbaf.png"/>
                    <small>Medicamento do CBAF</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-medicamento-do-componente-basico-de-assistencia-farmaceutica-cbaf" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/cbaf.png"/>
                    <small>Medicamentos do CEAF</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-medicamentos-do-componente-estrategico-da-assistencia-farmaceutica-cesaf" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/cbaf.png"/>
                    <small>Medicamentos do CESAF</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-pedido-de-fechamento-de-vias" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/fechaVias.png"/>
                    <small>Pedido de Fechamento de Vias</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-pequenos-reparos-em-vias-publicas" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/peqReparo.png"/>
                    <small>Pequenos Reparos em Vias Públicas</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-registro-de-vacina-covid19-conectsus" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/regVac.png"/>
                    <small>Registro Vacina COVID-19 ConectSUS</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-servico-de-agua-e-esgoto-empresa-casan" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/casan.png"/>
                    <small>Serviço CASAN</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-solicitacao-de-vacinas-especiais" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/vacEsp.png"/>
                    <small>Solicitação de Vacinas Especiais</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-solicitacao-e-aplicacao-do-palivizumabe" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/Palivizumabe.png"/>
                    <small>Solicitação e Aplicação do Palivizumabe</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-unidade-basicas-de-saude-postos-de-saude" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/ubs.png"/>
                    <small>Postos de Saúde</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-vacina-bcg-criancas-ou-contato-domiciliar-hanseniase" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/bcg.png"/>
                    <small>Vacina BCG (Hanseníase)</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-vacina-contra-raiva-humana-antirrabica" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/vacRaiva.png"/>
                    <small>Vacina Contra Raiva (Antirrábica)</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-vacinacao-adolescente-12-anos-ou-mais" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/vacAdo.png"/>
                    <small>Vacinação Adolescente 12 anos +</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-vacinacao-gestantes" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/vacGest.png"/>
                    <small>Vacinação Gestantes</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-vacinacao-infantilcrianca" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/bcg.png"/>
                    <small>Vacinação Infantil/Criança</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-viep-cidadao-que-sofreu-violencia" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/violencia.png"/>
                    <small>Cidadão que Sofreu Violência</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-viep-mulher-que-sofreu-violencia" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/violenciaMul.png"/>
                    <small>Mulher que Sofreu Violência</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-viep-crianca-que-sofreu-violencia" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/violenciaInf.png"/>
                    <small>Criança que Sofreu Violência</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-viep-fornecimento-de-declaracao-de-obitosnascidos-vivos" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/declOb.png"/>
                    <small>Declaração Óbitos/Nascidos Vivos</small>
                </a>
                <a href="https://saojose.atende.net/autoatendimento/servicos/e-viep-fornecimento-de-declaracao-de-obitosnascidos-vivos-a-domicilio" className="item_service_grid" target="_blank">
                    <img src="../img/allGrid/declOb.png"/>
                    <small>Declaração Óbitos/Nascidos Vivos Domicílio</small>
                </a>
            </div>
        </Container>         
    </div>
    </>
  )
}

export default TextAllServices