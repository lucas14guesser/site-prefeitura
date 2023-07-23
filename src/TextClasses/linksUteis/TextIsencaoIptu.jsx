import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../Styles/linksUteis/LinksUteis.css'

const TextIsencaoIptu = () => {
  return (
    <div className='links-uteis-container'>
        <div className="main-links-uteis">
            <Container>
                <div className="main-links-uteis__text">
                    <Link to="/" className='main-links-uteis__text__link'>Home</Link>/<Link to='/isencao-iptu-2023' className='main-links-uteis__text__link'>Isenção IPTU 2023</Link>

                    <h4>Isenção IPTU 2023</h4>

                    <h6>ISENÇÃO IPTU LEI Nº 4530/07 –  atualizado em 30-01-2020</h6>

                    <p>
                        <a href="https://www.saojose.sc.gov.br/images/uploads/geral/ISENCAO-IPTU-LEI-4530-07.pdf_atua%C3%A7izado_em_30-01-2020.pdf?_gl=1*1of5kre*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY5MDA5MzYxOC4yNC4xLjE2OTAwOTYxNjEuMC4wLjA.&_ga=2.65505518.1904247959.1689599992-2046960625.1688597347" target='_blank'>Arquivo</a>
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextIsencaoIptu