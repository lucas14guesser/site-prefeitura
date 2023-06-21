import React from 'react'

import { Link } from 'react-router-dom'

import { IoLogoWhatsapp } from 'react-icons/io'

import { Container } from 'react-bootstrap'

import '../Styles/NotaFiscalEmp.css'

const TextNotaFiscalEmp = () => {
  return (
    <Container>
        <div>
            <Link to="/" className='link_nfe'>Home</Link>/<Link to='/empreendedor' className='link_nfe'>Espaço do Empreendedor</Link>/<Link to='/sou-empresa' className='link_nfe'>Sou Empresa</Link>/<Link to="/nota-fiscal-emp" className='link_nfe'>Notas Fiscais</Link>
        </div>

        <h4 className="title_nfe">Notas Fiscais</h4 >

        <div className="main_nfe">
            <a href="https://sat.sef.sc.gov.br/tax.NET/Login.aspx?ReturnUrl=%2ftax.net%2fdefault.aspx" className='item_nfe' target='_blank'>
                <img src="../img/souMei/notaFiscal.png" alt="" />
                <small>Quero Emitir Nota Fiscal de Comércio e Produto</small>
            </a>
            <a href="https://saojose.atende.net/autoatendimento/servicos/acesso-ao-sistema-fiscal-web-novo" className='item_nfe' target='_blank'>
                <img src="../img/souMei/notaFiscal.png" alt="" />
                <small>Quero Emitir Nota Fiscal de <br />Serviço</small>
            </a>
            <a href="https://saojose.atende.net/autoatendimento/servicos/emissao-nota-avulsa" className='item_nfe' target='_blank'>
                <img src="../img/souMei/notaFiscal.png" alt="" />
                <small>Nota <br />Fiscal <br />Avulsa</small>
            </a>
        </div>
        <p className='wpp_sou_mei'><a href="https://api.whatsapp.com/send/?phone=554884828630&text=Ol%C3%A1%2C+tenho+d%C3%BAvidas+em+rela%C3%A7%C3%A3o+ao+espa%C3%A7o+do+empreendedor&type=phone_number&app_absent=0" target='_blank'><IoLogoWhatsapp/> Entre em contato via WhatsApp</a></p>
    </Container>
  )
}

export default TextNotaFiscalEmp