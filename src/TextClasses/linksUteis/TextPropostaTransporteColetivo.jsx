import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../Styles/linksUteis/LinksUteis.css'

const TextPropostaTransporteColetivo = () => {
  return (
    <div className='links-uteis-container'>
        <div className="main-links-uteis">
            <Container>
                <div className="main-links-uteis__text">
                    <Link to="/" className='main-links-uteis__text__link'>Home</Link>/<Link to='/proposta-do-novo-sistema-de-transporte-coletivo-municipal' className='main-links-uteis__text__link'>Proposta do Novo Sistema de Transporte Coletivo Municipal</Link>

                    <h4>Proposta do Novo Sistema de Transporte Coletivo Municipal</h4>

                    <p>
                        <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Apresentacao_Transporte_Coletivo_PMSJ_14.09.2015.pdf?_ga=2.208035922.1904247959.1689599992-2046960625.1688597347&_gl=1*q5x908*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY5MDA5MzYxOC4yNC4xLjE2OTAwOTQ2MjAuMC4wLjA." target='_blank'> Apresentação da Proposta</a>
                        <br /><br />
                        <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Apresentacao_Transporte_Coletivo_PMSJ_14.09.2015.pdf?_ga=2.208035922.1904247959.1689599992-2046960625.1688597347&_gl=1*q5x908*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY5MDA5MzYxOC4yNC4xLjE2OTAwOTQ2MjAuMC4wLjA." target='_blank'>Apresentacao Transporte Coletivo PMSJ 14/09/2015</a>
                        <br /><br />
                        <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Minuta_do_Edital_de_Concorr%C3%AAncia_06.11.15.pdf?_ga=2.132032847.1904247959.1689599992-2046960625.1688597347&_gl=1*cy65sd*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY5MDA5MzYxOC4yNC4xLjE2OTAwOTQ2MjAuMC4wLjA." target='_blank'>Minuta do Edital de Concorrência – 06/11/15 (novo!)</a>
                        <br /><br />
                        <a href="https://www.saojose.sc.gov.br/images/uploads/geral/EDITAL-_TRANSPORTE_P%C3%9ABLICO_-_22.10.2015.pdf?_ga=2.132032847.1904247959.1689599992-2046960625.1688597347&_gl=1*cy65sd*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY5MDA5MzYxOC4yNC4xLjE2OTAwOTQ2MjAuMC4wLjA." target='_blank'>EDITAL- TRANSPORTE PÚBLICO – 22/10/2015</a>
                        <br /><br /><br />
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrrb-4Gik2mRySSZ0ZEvJfsumS32HnKdPeMPofSjgmbFp2ew/viewform?embedded=true" target='_blank'>Formulário Proposta do Novo Sistema de Transporte Coletivo Municipal</a>
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextPropostaTransporteColetivo