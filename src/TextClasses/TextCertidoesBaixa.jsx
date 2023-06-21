import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/CertidoesBaixa.css'
import { Container } from 'react-bootstrap'


const TextCertidoesBaixa = () => {
  return (
    <Container>
        <div className="text_cert_baixa">
            <div>
                <Link to='/' className='link_cert_baixa'>Home</Link>/<Link to='/empreendedor' className='link_cert_baixa'>Espaço do empreendedor</Link>/<Link to='/sou-mei' className='link_cert_baixa'>Sou mei</Link>/<Link to='/certidoes-sou-mei' className='link_cert_baixa'>Certidões Sou Mei</Link>/<Link to='/certidoes-baixa' className='link_cert_baixa'>Home</Link>
            </div>

            <h4>Baixa de Atividades Para Prestadora de Serviço e/ou Comércio e para MEI</h4>

            <h6>A quem se destina?</h6>

            <p>
                A contribuintes que finalizarem suas atividades ou realizarem a transferência para outro município.
                <br /><br />
                A não informação à prefeitura ou sua informação fora do prazo de 90 dias a respeito da baixa ou transferência a outro município sujeita o contribuinte à multa, conforme art. 283 e 404 da LC 21/2005.
                <br /><br />
                A baixa ou suspensão da inscrição municipal deve ser feito pelo protocolo online.
            </p>

            <h6>Documentos necessários:</h6>

            <p>
                <ul>
                    <li><a href="https://www.saojose.sc.gov.br/images/uploads/geral/BAIXA_DE_ATIVIDADE_PARA_EMPRESAS_PRESTADORA_DE_SERVI%C3%87OS.pdf?_ga=2.7443314.1593556901.1686609957-1318598864.1684797233&_gl=1*13stst1*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NjY4MjQ0NS4zMy4xLjE2ODY2ODYyMTcuMC4wLjA." target='_blank'>Formulário cadastral (Link)</a></li>
                    <li>Termo de Responsabilidade</li>
                    <li>Cópia do cartão CNPJ</li>
                    <li>Cópia do contrato social da empresa ou declaração de empresário individual (última alteração quando há transferência para outro município)</li>
                    <li>Distrato social</li>
                    <li>Livro de ISS</li>
                    <li>Bloco de notas fiscais usados e não usados (quando houver)</li>
                </ul>
            </p>

            <p>
                A modalidade de suspensão da inscrição municipal é utilizada quando o contribuinte possui débitos com o município, permanecendo a inscrição suspensa até a quitação.
                <br /><br />
                Após a quitação dos débitos, enviar e-mail para processos.externos@pmsj.sc.gov.br e informar a respeito do pagamento do débito para emissão da certidão de baixa.
            </p>
        </div>
    </Container>
  )
}

export default TextCertidoesBaixa