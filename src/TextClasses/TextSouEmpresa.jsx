import React from 'react'

import { Link } from 'react-router-dom'

import { IoLogoWhatsapp } from 'react-icons/io'

import '../Styles/SouEmpresa.css'

const TextSouEmpresa = () => {
  return (
    <div className="container_sou_empresa">
        <Link to='/empreendedor' className='link_sou_empresa'>Página Anterior</Link>

        <h4 className="title_sou_empresa">Sou empresa</h4>

        <div className="main_sou_empresa">
            <a href="/vigilancia-sanitaria" className='item_sou_empresa'>
                <img src="../img/souMei/alvara.png" alt="" />
                <small>Alvará <br />Sanitário</small>
            </a>
            <a href="https://saojose.atende.net/autoatendimento/servicos/ficha-cadastral-do-imovel" className='item_sou_empresa' target='_blank'>
                <img src="../img/icons/empresa.png" alt="" />
                <small>Espelho de Imóvel e <br />Econômico</small>
            </a>
            <a href="https://saojose.atende.net/autoatendimento/servicos/guia-unificada" className='item_sou_empresa' target='_blank'>
                <img src="../img/icons/receita.png" alt="" />
                <small>Emitir Guia de Pagamento</small>
            </a>
            <a href="/livro-eletronico" className='item_sou_empresa'>
                <img src="../img/souEmpresa/livroEc.png" alt="" />
                <small>Livro <br />Eletrônico</small>
            </a>
            <a href="/nota-fiscal-emp" className='item_sou_empresa'>
                <img src="../img/souMei/notaFiscal.png" alt="" />
                <small>Nota <br />Fiscal</small>
            </a>
            <a href="https://sigat.cbm.sc.gov.br/sigat/modulos/solicitacoes/solic_funcionamento_orienta_externo.php" className='item_sou_empresa' target='_blank'>
                <img src="../img/souEmpresa/bombeiro.png" alt="" />
                <small>Solicitar/Consultar Atestado dos Bombeiros</small>
            </a>
            <a href="https://saojose.atende.net/autoatendimento/servicos/consulta-de-processo-digital" className='item_sou_empresa' target='_blank'>
                <img src="../img/souEmpresa/processoLup.png" alt="" />
                <small>Acompanhar Processos Online</small>
            </a>
            <a href="https://saojose.atende.net/autoatendimento/servicos/consulta-de-autenticidade-de-nota-fiscal-eletronica-nfse" className='item_sou_empresa' target='_blank'>
                <img src="../img/souEmpresa/notaAut.png" alt="" />
                <small>Autenticação de Notas Fiscais Eletrônicas</small>
            </a>
            <a href="https://saojose.atende.net/autoatendimento/servicos/emissao-de-processo-digital" className='item_sou_empresa' target='_blank'>
                <img src="../img/souEmpresa/processoOn.png" alt="" />
                <small>Abertura de Processos Online</small>
            </a>
            <a href="http://www.jucesc.sc.gov.br/index.php/passo-a-passo#constituicao-inscricao-de-empresario-individual-e-sociedade-limitada" className='item_sou_empresa' target='_blank'>
                <img src="../img/souEmpresa/jucesc-logo.png" alt="" />
                <small>Abertura de Processo na Jucesc</small>
            </a>
        </div>
        
        <p className='wpp_sou_empresa'><a href="https://api.whatsapp.com/send/?phone=554884828630&text=Ol%C3%A1%2C+tenho+d%C3%BAvidas+em+rela%C3%A7%C3%A3o+ao+espa%C3%A7o+do+empreendedor&type=phone_number&app_absent=0" target='_blank'><IoLogoWhatsapp/> Entre em contato via WhatsApp</a></p>
    </div>
  )
}

export default TextSouEmpresa