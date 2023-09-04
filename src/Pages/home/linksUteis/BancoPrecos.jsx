import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/linksUteis/LinksUteis.css'

const BancoPrecos = () => {
  return (
    <div className='links-uteis-container'>
        <div className="main-links-uteis">
            <Container>
                <div className="main-links-uteis__text">
                    <Link to="/" className='main-links-uteis__text__link'>Home</Link>/<Link to='/banco-de-precos-em-saude' className='main-links-uteis__text__link'>Banco de preços em saúde</Link>

                    <h4>Banco de preços em saúde</h4>

                    <p>
                        <ul>
                            <li>
                                <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Medicamentos_Jud_-_PE_121.2016.pdf?_ga=2.129288396.1904247959.1689599992-2046960625.1688597347&_gl=1*hcymj4*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY5MDA5MzYxOC4yNC4xLjE2OTAwOTU1NjYuMC4wLjA." target='_blank'>Medicamentos – Pregão 121/2016</a>
                            </li>
                            <li>
                                <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Medicamentos_-_PR_154.2016.pdf?_ga=2.129288396.1904247959.1689599992-2046960625.1688597347&_gl=1*hcymj4*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY5MDA5MzYxOC4yNC4xLjE2OTAwOTU1NjYuMC4wLjA." target='_blank'>Medicamentos – Pregão 154/2016</a>
                            </li>
                            <li>
                                <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Mat_Enfermagem_-_PE_171.2016.pdf?_ga=2.135170161.1904247959.1689599992-2046960625.1688597347&_gl=1*1oabsuv*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY5MDA5MzYxOC4yNC4xLjE2OTAwOTU1NjYuMC4wLjA." target='_blank'>Materiais de enfermagem</a>
                            </li>
                        </ul>
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default BancoPrecos