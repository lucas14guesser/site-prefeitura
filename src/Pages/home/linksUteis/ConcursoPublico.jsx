import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/linksUteis/LinksUteis.css'

const ConcursoPublico = () => {
  return (
    <div className='links-uteis-container'>
        <div className="main-links-uteis">
            <Container>
                <div className="main-links-uteis__text">
                    <Link to="/" className='main-links-uteis__text__link'>Home</Link>/<Link to='/concursos-publicos-–-documentos-e-declaracoes' className='main-links-uteis__text__link'>Concursos Públicos – Documentos e Declarações</Link>

                    <h4>Concursos Públicos – Documentos e Declarações</h4>

                    <h6>Documentação e declarações para Convocação de aprovados em Concurso Público</h6>

                    <p>
                        <a href="https://saojose.sc.gov.br/wp-content/uploads/2021/08/Declaracao-de-Bens.pdf" target='_blank'>Declaração de Bens</a>
                        <br /><br />
                        <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/07/Declaracao-de-nao-acumulacao-de-cargo.pdf" target='_blank'>Declaração de não acumulação de cargos públicos</a>
                        <br /><br />
                        <a href="https://saojose.sc.gov.br/wp-content/uploads/2021/08/Declaracao-de-nao-ter-sofrido-penalidades-no-exercicio-da-funcao-publica.pdf" target='_blank'>Declaração de nao ter sofrido penalidades no exercicio da função publica</a>
                        <br /><br />
                        <a href="https://saojose.sc.gov.br/wp-content/uploads/2021/08/Documentos-para-Convocacao.pdf" target='_blank'>Declaração de não acumulação de cargos públicos</a>
                        <br /><br />
                        <a href="https://saojose.sc.gov.br/wp-content/uploads/2021/08/Ficha-de-cadastro.pdf" target='_blank'>Ficha de cadastro</a>
                        <br /><br />
                        <a href="http://www.saojose.sc.gov.br/images/uploads/geral/CNES_Ficha_para_cadastro_de_Profissional01.xlsx?_ga=2.177179877.1904247959.1689599992-2046960625.1688597347&_gl=1*1xw0ro0*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY5MDA5MzYxOC4yNC4xLjE2OTAwOTUxMTQuMC4wLjA." target='_blank'>CNES Ficha para cadastro de Profissional</a>
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default ConcursoPublico