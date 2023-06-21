import React from 'react'

import { Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import { IoLogoWhatsapp } from 'react-icons/io'

import '../Styles/Empreendedor.css'

const TextEmpreendedor = () => {
  return (
    <Container>            
        <div>
            <Link to="/" className='link_emp'>Home</Link>/<Link to='/empreendedor' className='link_emp'>Espaço do Empreendedor</Link>
        </div>

        <h4 className="title_emp">Espaço do empreendedor</h4 >

        <div className="main_emp">
            <a href="/sou-empresa" className='item_emp'>
                <img src="../img/empreendedor/souEmpresa.png" alt="" />
                <small>Sou Empresa</small>
            </a>
            <a href="/sou-mei" className='item_emp'>
                <img src="../img/empreendedor/souMei.png" alt="" />
                <small>Sou MEI</small>
            </a>
            <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei" className='item_emp' target='_blank'>
                <img src="../img/empreendedor/queroSerMei.png" alt="" />
                <small>Quero ser MEI</small>
            </a>
            <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/perguntas-frequentes" className='item_emp' target='_blank'>
                <img src="../img/empreendedor/duvidasMei.png" alt="" />
                <small>Dúvidas MEI</small>
            </a>
        </div>

        <h4 className="title_emp">Ambiente de Aprendizado</h4>

        <div className="main_emp">
            <a href="https://saojosemaisempregos.santacatarinapelaeducacao.com.br/capacite-se" className='item_emp' target='_blank'>
                <img src="../img/empreendedor/oportunidadeEmprego.png" alt="" />
                <small>Oportunidades São José + Empregos</small>
            </a>
            <a href="https://www.sebrae-sc.com.br/solucoes#cursos?utm_campaign=sebrae-captacao-midia&utm_source=google&utm_medium=cpc&utm_term=mobilizadora" className='item_emp' target='_blank'>
                <img src="../img/empreendedor/cursoSebrae.png" alt="" />
                <small>Cursos <br />Sebrae</small>
            </a>
            <a href="https://saojosemaisempregos.santacatarinapelaeducacao.com.br/oportunidades" className='item_emp' target='_blank'>
                <img src="../img/empreendedor/cursoEmprego.png" alt="" />
                <small>Cursos São José + Empregos</small>
            </a>  
        </div>

        <p className='wpp_emp'><a href="https://api.whatsapp.com/send/?phone=554884828630&text=Ol%C3%A1%2C+tenho+d%C3%BAvidas+em+rela%C3%A7%C3%A3o+ao+espa%C3%A7o+do+empreendedor&type=phone_number&app_absent=0" target='_blank'><IoLogoWhatsapp/> Entre em contato via WhatsApp</a></p>

        <div className="patrocinadores_emp">
            <h6>Apoio:</h6>

            <a href="https://www.sebrae.com.br/sites/PortalSebrae/empreendedorismofeminino/premiomulherdenegocios/?utm_source=google&utm_medium=search&utm_campaign=psmn&utm_content=naugm-psmn0014NSB2023005319120006&gclid=CjwKCAjwp6CkBhB_EiwAlQVyxcqcgIy4kwly8l5_rJtBIoRuGeGWJTtaLNJUHBVfCUuRwfToZz9c4hoC1l8QAvD_BwE" target='_blank'>
                <img src="../img/empreendedor/logoSebrae.png" alt="sebrae" />
            </a>
            <a href="https://aemflo-cdlsj.org.br/listar-capacitacao?gclid=CjwKCAjwp6CkBhB_EiwAlQVyxYBbcHi6-LE8S_i4Zxe2pUs7ugj3lV1n49QFI84RYOlnyVDuEh9yAxoC67UQAvD_BwE" target='_blank'>
                <img src="../img/empreendedor/logoAemflo.png" alt="aemflo" />
            </a>
            <a href="https://sescongf.com.br/">
                <img src="../img/empreendedor/logoSescon.png" alt="sescon" />
            </a>
            <a href="https://www.gov.br/pt-br">
                <img src="../img/empreendedor/logoGovbr.png" alt="gov.br" />
            </a>
            <a href="https://www.bancodoempreendedor.org.br/">
                <img src="../img/empreendedor/logoBancoEmp.png" alt="bancoDoEmpreendedor" />
            </a>
        </div>

        <div className="text_emp">
            <h4>São José, A Cidade das Oportunidades</h4>

            <p>
                São José é a terceira cidade do Estado que mais criou vagas de emprego em um ano. Segundo o levantamento feito pelo Ministério da Economia (ME), por meio do Cadastro Geral de Empregados e Desempregados (Caged), o município teve um saldo de 14.157 postos de trabalho gerados no período de setembro de 2020 a agosto de 2021. Joinville e Blumenau lideram os resultados com 22.199 e 14.372 postos de trabalho, respectivamente.
            </p>
        </div>

        <div className="empa_emp">
            <object empa="https://app.powerbi.com/view?r=eyJrIjoiYjQ3ZGRkMTMtMTNjNS00ZGUxLTg4ZempZDM0ZmFiOTAxMzZlIiwidCI6ImExN2QwM2ZjLTRiYWMtNGI2OC1iZDY4LWUzOTYzYTJlYzRlNiJ9" type=""></object>
        </div>
    </Container>
  )
}

export default TextEmpreendedor