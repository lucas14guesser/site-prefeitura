import React from 'react'

import {Container} from "react-bootstrap";

import '../Styles/GridService.css'

const AllServices = () => {
  return (
    <>
    <div className="background_grid_service">
        <Container>
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
            </div>
        </Container>         
    </div>
    </>
  )
}

export default AllServices