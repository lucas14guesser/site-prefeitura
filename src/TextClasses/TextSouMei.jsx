import React from 'react'

import { IoLogoWhatsapp } from 'react-icons/io'

import { Link } from 'react-router-dom'

import '../Styles/SouMei.css'

const TextSouMei = () => {
  return (
    <div className="container_sou_mei">
        <Link to='/empreendedor' className='link_sou_mei'>Página Anterior</Link>

        <h4 className="title_sou_mei">Sou Mei</h4>

        <div className="main_sou_mei">
            <a href="https://saojose.atende.net/autoatendimento/servicos/guias-de-iptu" className='item_sou_mei' target='_blank'>
                <img src="../img/icons/iptu.png" alt="" />
                <small>Quero Emitir Guia Iptu</small>
            </a>
            <a href="https://leismunicipais.com.br/a/sc/s/sao-jose/lei-complementar/2021/11/108/lei-complementar-n-108-2021-altera-a-lei-complementar-municipal-n-38-de-17-de-dezembro-de-2009-dando-lhe-nova-redacao-a-fim-de-instituir-no-ambito-do-municipio-de-sao-jose-a-dispensa-de-alvara-de-funcionamento-para-microempreendedores-individuais-bem-como-visa-a-revogacao-dos-artigos-4-5-6-7-e-8-da-lei-complementar-072-2016-em-conformidade-com-as-resolucoes-n-59-do-cgsim-comite-para-gestao-da-rede-nacional-para-a-simplificacao-do-registro-e-da-legalizacao-de-empresas-e-negocios-respeitando-os-preceitos-do-tratamento-diferenciado-e-favorecido-estabelecido-pela-lei-geral-das-micro-e-pequenas-empresas-lei-complementar-federal-n-123-06" className='item_sou_mei' target='_blank'>
                <img src="../img/souMei/alvara.png" alt="" />
                <small>Alvarás e <br /> Licenças</small>
            </a>
            <a href="/certidoes-sou-mei" className='item_sou_mei'>
                <img src="../img/souMei/certidoes.png" alt="" />
                <small>Quero Emitir Certidões</small>
            </a>
            <a href="/notas-fiscais" className='item_sou_mei'>
                <img src="../img/souMei/notaFiscal.png" alt="" />
                <small>Quero Emitir Notas Fiscais</small>
            </a>
            <a href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/dasnsimei.app/Identificacao" className='item_sou_mei' target='_blank'>
                <img src="../img/souMei/declaracao.png" alt="" />
                <small>Quero Fazer Declaração Anual</small>
            </a>
            <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/pagamento-de-contribuicao-mensal" className='item_sou_mei' target='_blank'>
                <img src="../img/icons/emissaoCnd.png" alt="" />
                <small>Quero Emitir Guia DAS</small>
            </a>
            <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/atualizacao-cadastral-de-mei" className='item_sou_mei' target='_blank'>
                <img src="../img/souMei/alteracao.png" alt="" />
                <small>Quero Fazer Alteração MEI</small>
            </a>
            <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/emissao-de-comprovante-ccmei" className='item_sou_mei' target='_blank'>
                <img src="../img/souMei/certificado.png" alt="" />
                <small>Quero Emitir Certificado</small>
            </a>
        </div>
        
        <p className='wpp_sou_mei'><a href="https://api.whatsapp.com/send/?phone=554884828630&text=Ol%C3%A1%2C+tenho+d%C3%BAvidas+em+rela%C3%A7%C3%A3o+ao+espa%C3%A7o+do+empreendedor&type=phone_number&app_absent=0" target='_blank'><IoLogoWhatsapp/> Entre em contato via WhatsApp</a></p>
    </div>
  )
}

export default TextSouMei