import React from 'react'
import { useState } from 'react';

import {Container} from "react-bootstrap";

import { Link } from 'react-router-dom';

import '../../Styles/grid/GridService.css'

const TextAllServices = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const items = [

          {
            title: "DAT – Acidente de Trânsito",
            imageSrc: "../img/icons/dat.png",
            externalLink: "/dat",
          },
          {
            title: "Cati",
            imageSrc: "../img/icons/cati.png",
            externalLink: "/cati",
          },
          {
            title: "Serviço para o Cidadão",
            imageSrc: "../img/icons/cidadao.png",
            externalLink: "/portal-cidadao",
          },
          {
            title: "Receita Online",
            imageSrc: "../img/icons/receita.png",
            externalLink: "/centro-atendimento",
          },
          {
            title: "Espaço do Empreendedor",
            imageSrc: "../img/icons/empreendedor.png",
            externalLink: "/empreendedor",
          },
          {
            title: "São José + Empregos",
            imageSrc: "../img/icons/emprego.png",
            externalLink: "https://saojosemaisempregos.santacatarinapelaeducacao.com.br/oportunidades",
          },
          {
            title: "Emissão Guias de IPTU",
            imageSrc: "../img/icons/iptu.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/guias-de-iptu/detalhar/1",
          },
          {
            title: "Autenticidade de Nota Fiscal",
            imageSrc: "../img/icons/nfAut.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/consulta-de-autenticidade-de-nota-fiscal-eletronica-nfse",
          },
          {
            title: "Contra-Cheque",
            imageSrc: "../img/icons/contraCheque.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/emissao-do-recibo-de-pagamento",
          },
          {
            title: "Abertura de Processo Digital",
            imageSrc: "../img/icons/processoDigital.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/emissao-de-processo-digital/detalhar/1",
          },
          {
            title: "Documentos Processo Digital",
            imageSrc: "../img/icons/documentoDigital.png",
            externalLink: "https://saojose.atende.net/cidadao/pagina/formularios-para-abertura-de-processos-downloads",
          },
          {
            title: "Consulta de Licitações",
            imageSrc: "../img/icons/licitacao.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/consulta-de-licitacoes/detalhar/1",
          },
          {
            title: "Consulta de Processo",
            imageSrc: "../img/icons/consProcesso.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/consulta-de-processo-digital/detalhar/1",
          },
          {
            title: "Ficha Financeira",
            imageSrc: "../img/icons/fichaFinanceira.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/emissao-da-ficha-financeira/detalhar/1"
        },
        {
            title: "Espelho Cadastral IPTU",
            imageSrc: "../img/icons/iptu.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/ficha-cadastral-do-imovel"
        },
        {
            title: "Ouvidoria Municipal",
            imageSrc: "../img/icons/ouvidoria.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/ouvidoria-municipal"
        },
        {
            title: "Atendimento Plantão Fiscal",
            imageSrc: "../img/icons/plantaoFiscal.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-atendimento-plantao-fiscal"
        },
        {
            title: "Sistema Fiscal Web",
            imageSrc: "../img/icons/sistemaFiscal.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/acesso-ao-sistema-fiscal-web-novo"
        },
        {
            title: "Consulta a Ouvidoria",
            imageSrc: "../img/icons/ouvidoria.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/consulta-a-ouvidoria"
        },
        {
            title: "Emissão de Guias ITBI",
            imageSrc: "../img/icons/itbi.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/guias-itbi"
        },
        {
            title: "Emissão de Guias Dívida Ativa",
            imageSrc: "../img/icons/divida.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/guias-divida-ativa"
        },
        {
            title: "Emissão de Guias ISS/Alvará",
            imageSrc: "../img/icons/guiaIss.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/guias-de-issalvara"
        },
        {
            title: "Emissão de Guias Receitas Diversas",
            imageSrc: "../img/icons/receitasDiversas.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/guias-de-servicos-diversos"
        },
        {
            title: "Extrato de Pagamento",
            imageSrc: "../img/icons/pagamento.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/extrato-de-pagamentos"
        },
        {
            title: "Emissão da Certidão CND",
            imageSrc: "../img/icons/emissaoCnd.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/certidao-negativa-de-debitos"
        },
        {
            title: "Atendimento Plantão Fiscal",
            imageSrc: "../img/icons/plantaoFiscal.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-atendimento-plantao-fiscal"
        },
        {
            title: "Emissão de Alvará",
            imageSrc: "../img/icons/emissaoAlvara.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/impressao-do-alvara"
        },
        {
            title: "Alterar Senha de Acesso",
            imageSrc: "../img/icons/alterarSenha.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/alterar-senha-de-acesso"
        },
        {
            title: "Autenticidade de Documentos",
            imageSrc: "../img/icons/autenticidadeDocs.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/autenticidade-de-documentos-e-relatorios"
        },
        {
            title: "Certidão de Baixa de Empresa",
            imageSrc: "../img/icons/empresa.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/certidao-de-baixa-da-inscricao-municipal"
        },
        {
            title: "Autenticidade e Consulta da CND",
            imageSrc: "../img/icons/cnd.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/autenticidade-de-certidao-negativa-de-debitos"
        },
        {
            title: "Espelho Econômico",
            imageSrc: "../img/icons/espelhoEconomico.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/comprovante-de-inscricao-municipal"
        },
        {
            title: "Extrato de Débito",
            imageSrc: "../img/icons/debito.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/extrato-de-debito"
        },
        {
            title: "Nota Fiscal de Serviço Avulsa",
            imageSrc: "../img/icons/nf.png",
            externalLink: "https://nfse-saojose.atende.net/autoatendimento/servicos/emissao-nota-avulsa"
        },
        {
            title: "Recuperação de Senha",
            imageSrc: "../img/allGrid/recSenha.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/recuperacao-de-senha-de-acesso/detalhar/1"
        },
        {
            title: "Solicitações de Assinatura",
            imageSrc: "../img/allGrid/assinatura.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/solicitacoes-de-assinatura"
        },
        {
            title: "NFS-e Serviços Prestados",
            imageSrc: "../img/allGrid/servicoPrest.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/consulta-nfs-e-de-servicos-prestados"
        },
        {
            title: "NFS-e Serviços Tomados",
            imageSrc: "../img/allGrid/servicoTom.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/consulta-nfs-e-de-servicos-tomados"
        },
        {
            title: "NFS-e por WebService",
            imageSrc: "../img/allGrid/webService.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/emissao-de-nfs-e-por-webservice"
        },
        {
            title: "Documento para Escritura",
            imageSrc: "../img/allGrid/escritura.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/tipos-de-documento-para-escrituracao"
        },
        {
            title: "Acesso à Informação",
            imageSrc: "../img/allGrid/informacao.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/acesso-a-informacao"
        },
        {
            title: "Autenticidade de Email",
            imageSrc: "../img/allGrid/emailAut.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/autenticidade-de-email"
        },
        {
            title: "Carta de Serviços",
            imageSrc: "../img/allGrid/cartaServ.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/carta-de-servicos"
        },
        {
            title: "Consulta Documentos",
            imageSrc: "../img/allGrid/consDoc.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/consulta-documentos"
        },
        {
            title: "Solicitação de Acesso",
            imageSrc: "../img/allGrid/solicitacaoAccess.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/solicitacao-de-acesso"
        },
        {
            title: "Autenticidade de Boleto",
            imageSrc: "../img/allGrid/boletoAut.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/autenticidade-de-boleto"
        },
        {
            title: "Certidão de Valor Venal",
            imageSrc: "../img/allGrid/valorVenal.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/certidao-de-valor-venal"
        },
        {
            title: "Créditos de IPTU (NFS-e)",
            imageSrc: "../img/allGrid/creditosIptu.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/creditos-de-nfse"
        },
        {
            title: "Declaração de quitação de ITBI",
            imageSrc: "../img/allGrid/quitItbi.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/declaracao-de-quitacao-de-itbi"
        },
        {
            title: "Extrato do Contribuinte",
            imageSrc: "../img/allGrid/contribuinte.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/extrato-do-contribuinte"
        },
        {
            title: "Ficha Contribuinte",
            imageSrc: "../img/allGrid/fichaContri.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/ficha-financeira-do-contribuinte"
        },
        {
            title: "Gerenciamento de Imóvel",
            imageSrc: "../img/allGrid/gerImov.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/gerenciamento-de-imoveis"
        },
        {
            title: "Emissão de Guia Única",
            imageSrc: "../img/allGrid/guiaUn.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/guia-unificada"
        },
        {
            title: "Emissão de Guias de Obras",
            imageSrc: "../img/allGrid/guiaObr.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/guias-de-construcao-civil"
        },
        {
            title: "ITBI Online",
            imageSrc: "../img/allGrid/itbiOn.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/itbi-online"
        },
        {
            title: "Localização de Empresas e Comércios",
            imageSrc: "../img/allGrid/locCom.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/localizacao-de-empresas-e-estabelecimentos-comerciais"
          },
          {
            title: "Meus débitos",
            imageSrc: "../img/allGrid/myDeb.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/meus-debitos"
          },
          {
            title: "Parcelamentos",
            imageSrc: "../img/allGrid/parcelamento.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/parcelamentos"
          },
          {
            title: "Valores a Receber",
            imageSrc: "../img/allGrid/valReceb.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/valores-a-receber"
          },
          {
            title: "Atas Registro Preço",
            imageSrc: "../img/allGrid/preco.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/consulta-de-atas-registro-preco"
          },
          {
            title: "Planilha de Preços",
            imageSrc: "../img/allGrid/planilhaPreco.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/cotacao-de-planilha-de-precos"
          },
          {
            title: "Ordens Compra referentes COVID-19",
            imageSrc: "../img/allGrid/compraCvd.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/ordens-de-compra-referentes-ao-covid-19"
          },
          {
            title: "Readequação Valores do Lote",
            imageSrc: "../img/allGrid/valLote.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/readequacao-valores-do-lote"
          },
          {
            title: "Termos de Parceria - Lei 13.019/14",
            imageSrc: "../img/allGrid/parceria.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/termos-de-parceria-lei-1301914"
          },
          {
            title: "Certificado de Registro Cadastral",
            imageSrc: "../img/allGrid/regCad.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/validacao-de-crc"
          },
          {
            title: "Atualização Cadastral Funcionário",
            imageSrc: "../img/allGrid/attCad.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/atualizacao-cadastral-funcionario"
          },
          {
            title: "Autenticidade do Recibo de Pagamento",
            imageSrc: "../img/allGrid/recibo.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/autenticidade-recibo-de-pagamento"
          },
          {
            title: "Comprovante de Rendimento IRRF",
            imageSrc: "../img/allGrid/irrf.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/comprovante-de-rendimentos-irrf"
          },
          {
            title: "Declaração Vínculo Empregatício",
            imageSrc: "../img/allGrid/vincEmp.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/declaracao-vinculo-empregaticio"
          },
          {
            title: "Extrato Contribuições Previdência",
            imageSrc: "../img/allGrid/contPrev.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/extrato-anual-de-contribuicoes-para-previdencia"
          },
          {
            title: "Lançamento Convênios",
            imageSrc: "../img/allGrid/convenio.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/lancamento-de-convenios"
          },
          {
            title: "Doenças Crônicas não Transmissíveis",
            imageSrc: "../img/allGrid/dCronic.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-area-tecnica-enfrentamento-a-doencas-cronicas-nao-transmissiveis"
          },
          {
            title: "Saúde Bucal",
            imageSrc: "../img/allGrid/bucal.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-area-tecnica-saude-bucal"
          },
          {
            title: "Saúde da Criança",
            imageSrc: "../img/allGrid/sauCrianca.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-area-tecnica-saude-da-crianca"
          },
          {
            title: "Saúde da Mulher",
            imageSrc: "../img/allGrid/sauMulher.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-area-tecnica-saude-da-mulher"
          },
          {
            title: "Cadastro de Fornecedores",
            imageSrc: "../img/allGrid/fornecedor.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-cadastro-de-fornecedores-protocolo-da-licitacao"
          },
          {
            title: "COSIP",
            imageSrc: "../img/allGrid/ilumin.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-custeio-dos-servicos-de-iluminacao-publica-cosip"
          },
          {
            title: "Denúncia de Caramujo Africano",
            imageSrc: "../img/allGrid/caramujo.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-denuncia-de-caramujo-africano"
          },
          {
            title: "Denúncia de Escorpião ou Lagartas",
            imageSrc: "../img/allGrid/escorpiao.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-denuncia-de-escorpiao-ou-lagartas"
          },
          {
            title: "Denúncia de Dengue",
            imageSrc: "../img/allGrid/dengue.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-denuncia-de-foco-de-mosquito-de-dengue"
          },
          {
            title: "Denúncia de Ratos",
            imageSrc: "../img/allGrid/rato.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-denuncia-de-morcegos-ratos-ou-carrapatos"
          },
          {
            title: "Denúncia de Morcegos",
            imageSrc: "../img/allGrid/morcego.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-denuncia-de-morcegos-ratos-ou-carrapatos"
          },
          {
            title: "Denúncia de Carrapatos",
            imageSrc: "../img/allGrid/carrapato.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-denuncia-de-morcegos-ratos-ou-carrapatos"
          },
          {
            title: "Denúncia de Pombos",
            imageSrc: "../img/allGrid/pombo.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-denuncia-de-pombos"
          },
          {
            title: "Evento Adversos Pós-Vacinação",
            imageSrc: "../img/allGrid/vac.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-evento-adversos-posvacinacao"
          },
          {
            title: "Fiscalização de Obras Publicas",
            imageSrc: "../img/allGrid/fiscObra.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-execucao-e-fiscalizacao-de-obras-publicas"
          },
          {
            title: "Grupo Tabagismo Parar de Fumar",
            imageSrc: "../img/allGrid/fumo.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-grupo-de-tabagismo-parar-de-fumar"
          },
          {
            title: "Iluminação Pública",
            imageSrc: "../img/allGrid/iluPub.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-iluminacao-publica"
          },
          {
            title: "Limpeza de Ruas",
            imageSrc: "../img/allGrid/limpRua.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-limpeza-de-ruas"
          },
          {
            title: "Lista de Espera Celk",
            imageSrc: "../img/allGrid/celk.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-lista-de-espera-celk"
          },
          {
            title: "Lista de Espera Sisreg",
            imageSrc: "../img/allGrid/sisreg.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-lista-de-esperara-sisreg"
          },
          {
            title: "Medicamento do CBAF",
            imageSrc: "../img/allGrid/cbaf.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-medicamento-do-componente-basico-de-assistencia-farmaceutica-cbaf"
          },
          {
            title: "Medicamentos do CEAF",
            imageSrc: "../img/allGrid/cbaf.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-medicamento-do-componente-basico-de-assistencia-farmaceutica-cbaf"
          },
          {
            title: "Medicamentos do CESAF",
            imageSrc: "../img/allGrid/cbaf.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-medicamentos-do-componente-estrategico-da-assistencia-farmaceutica-cesaf"
          },
          {
            title: "Pedido de Fechamento de Vias",
            imageSrc: "../img/allGrid/fechaVias.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-pedido-de-fechamento-de-vias"
          },
          {
            title: "Pequenos Reparos em Vias Públicas",
            imageSrc: "../img/allGrid/peqReparo.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-pequenos-reparos-em-vias-publicas"
          },
          {
            title: "Registro Vacina COVID-19 ConectSUS",
            imageSrc: "../img/allGrid/regVac.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-registro-de-vacina-covid19-conectsus"
          },
          {
            title: "Serviço CASAN",
            imageSrc: "../img/allGrid/casan.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-servico-de-agua-e-esgoto-empresa-casan"
          },
          {
            title: "Solicitação de Vacinas Especiais",
            imageSrc: "../img/allGrid/vacEsp.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-solicitacao-de-vacinas-especiais"
          },
          {
            title: "Solicitação e Aplicação do Palivizumabe",
            imageSrc: "../img/allGrid/Palivizumabe.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-solicitacao-e-aplicacao-do-palivizumabe"
          },
          {
            title: "Postos de Saúde",
            imageSrc: "../img/allGrid/ubs.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-unidade-basicas-de-saude-postos-de-saude"
          },
          {
            title: "Vacina BCG (Hanseníase)",
            imageSrc: "../img/allGrid/bcg.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-vacina-bcg-criancas-ou-contato-domiciliar-hanseniase"
          },
          {
            title: "Vacina Contra Raiva (Antirrábica)",
            imageSrc: "../img/allGrid/vacRaiva.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-vacina-contra-raiva-humana-antirrabica"
          },
          {
            title: "Vacinação Adolescente 12 anos +",
            imageSrc: "../img/allGrid/vacAdo.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-vacinacao-adolescente-12-anos-ou-mais"
          },
          {
            title: "Vacinação Gestantes",
            imageSrc: "../img/allGrid/vacGest.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-vacinacao-gestantes"
          },
          {
            title: "Vacinação Infantil/Criança",
            imageSrc: "../img/allGrid/bcg.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-vacinacao-infantilcrianca"
          },
          {
            title: "Cidadão que Sofreu Violência",
            imageSrc: "../img/allGrid/violencia.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-viep-cidadao-que-sofreu-violencia"
          },
          {
            title: "Mulher que Sofreu Violência",
            imageSrc: "../img/allGrid/violenciaMul.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-viep-mulher-que-sofreu-violencia"
          },
          {
            title: "Criança que Sofreu Violência",
            imageSrc: "../img/allGrid/violenciaInf.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-viep-crianca-que-sofreu-violencia"
          },
          {
            title: "Declaração Óbitos/Nascidos Vivos",
            imageSrc: "../img/allGrid/declOb.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-viep-fornecimento-de-declaracao-de-obitosnascidos-vivos"
          },
          {
            title: "Declaração Óbitos/Nascidos Vivos Domicílio",
            imageSrc: "../img/allGrid/declOb.png",
            externalLink: "https://saojose.atende.net/autoatendimento/servicos/e-viep-fornecimento-de-declaracao-de-obitosnascidos-vivos-a-domicilio"
          }
    ]

    const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
<>
  <div className="background_grid_service">
    <Container>
      <Link to="/" className="link_service_grid">
        Home
      </Link>
      /<Link to="/todos-os-servicos" className="link_service_grid">
        Todos os Serviços Disponíveis
      </Link>
      <h1 className="title_grid_service">Todos os Serviços Disponíveis</h1>
      <div className="search_box_service_grid">
        <input
          type="text"
          placeholder=" Digite o serviço que procura..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="main_service_grid">
        {filteredItems.map((item, index) => (
          <a
            key={index}
            href={item.externalLink || "#"}
            className="item_service_grid"
            target={item.externalLink ? '_blank' : ''}
          >
            <img src={item.imageSrc} alt={item.title} />
            <small>{item.title}</small>
          </a>
        ))}
      </div>
      <div className="link_service_grid_return">
        <Link to="#" onClick={scrollToTop}>Voltar ao Topo da Página</Link>
      </div>
    </Container>
  </div>
</>

  )
}

export default TextAllServices