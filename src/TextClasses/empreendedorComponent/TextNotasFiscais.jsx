import React from 'react'

import { Link } from 'react-router-dom'

import { IoLogoWhatsapp } from 'react-icons/io'

import { Container } from 'react-bootstrap'

import '../../Styles/empreendedorComponent/EmpreendedorComponent.css'

const TextNotasFiscais = () => {
  return (
    <Container>
        <div>
            <Link to='/' className='link_empreendedor-component'>Home</Link>/<Link to='/empreendedor' className='link_empreendedor-component'>Espaço do empreendedor</Link>/<Link to='/sou-mei' className='link_empreendedor-component'>Sou mei</Link>/<Link to='/notas-fiscais' className='link_empreendedor-component'>Notas Fiscais</Link>
        </div>

        <h4 className="title_empreendedor-component">Notas Fiscais</h4 >

        <div className="main_empreendedor-component">
            <a href="https://sat.sef.sc.gov.br/tax.NET/Login.aspx?ReturnUrl=%2ftax.net%2fdefault.aspx" className='item_empreendedor-component' target='_blank'>
                <img src="../img/souMei/notaFiscal.png" alt="" />
                <small>Quero Emitir Nota Fiscal de Comércio e Produto</small>
            </a>
            <a href="https://saojose.atende.net/autoatendimento/servicos/emissao-de-empreendedor-componentse-por-webservice" className='item_empreendedor-component' target='_blank'>
                <img src="../img/souMei/notaFiscal.png" alt="" />
                <small>Quero Emitir Nota Fiscal de <br />Serviço</small>
            </a>
        </div>
        <p className='wpp_empreendedor-component'><a href="https://api.whatsapp.com/send/?phone=554884828630&text=Ol%C3%A1%2C+tenho+d%C3%BAvidas+em+rela%C3%A7%C3%A3o+ao+espa%C3%A7o+do+empreendedor&type=phone_number&app_absent=0" target='_blank'><IoLogoWhatsapp/> Entre em contato via WhatsApp</a></p>
    </Container>
  )
}

export default TextNotasFiscais