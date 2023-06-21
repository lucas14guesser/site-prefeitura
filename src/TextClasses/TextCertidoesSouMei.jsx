import React from 'react'

import { Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import { IoLogoWhatsapp } from 'react-icons/io'

import '../Styles/CertidoesSouMei.css'

const TextCertidoesSouMei = () => {
  return (
    <Container>
        <div>
            <Link to='/' className='link_cert_sou_mei'>Home</Link>/<Link to='/empreendedor' className='link_cert_sou_mei'>Espaço do empreendedor</Link>/<Link to='/sou-mei' className='link_cert_sou_mei'>Sou mei</Link>/<Link to='/certidoes-sou-mei' className='link_cert_sou_mei'>Certidões Sou Mei</Link>
        </div>

        <h4 className="title_cert_sou_mei">Certidões Sou Mei</h4>

        <div className="main_cert_sou_mei">
            <a href="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Emitir" className='item_sou_mei' target='_blank'>
                <img src="../img/souMei/certidoes.png" alt="" />
                <small>CND Federal</small>
            </a>
            <a href="https://sat.sef.sc.gov.br/tax.NET/Sat.CtaCte.Web/SolicitacaoCnd.aspx" className='item_sou_mei' target='_blank'>
                <img src="../img/souMei/certidoes.png" alt="" />
                <small>CND Estadual</small>
            </a>
            <a href="/certidoes-baixa" className='item_sou_mei'>
                <img src="../img/souMei/certidoes.png" alt="" />
                <small>Certidões de Baixa</small>
            </a>
            <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/certidoes-e-comprovantes" className='item_sou_mei' target='_blank'>
                <img src="../img/souMei/certidoes.png" alt="" />
                <small>Demais Certidões</small>
            </a>
        </div>

        <p className='wpp_sou_mei'><a href="https://api.whatsapp.com/send/?phone=554884828630&text=Ol%C3%A1%2C+tenho+d%C3%BAvidas+em+rela%C3%A7%C3%A3o+ao+espa%C3%A7o+do+empreendedor&type=phone_number&app_absent=0" target='_blank'><IoLogoWhatsapp/> Entre em contato via WhatsApp</a></p>
    </Container>
  )
}

export default TextCertidoesSouMei