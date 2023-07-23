import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../Styles/linksUteis/LinksUteis.css'

const TextLegislacaoMunicipal = () => {
  return (
    <div className='links-uteis-container'>
        <div className="main-links-uteis">
            <Container>
                <div className="main-links-uteis__text">
                    <Link to="/" className='main-links-uteis__text__link'>Home</Link>/<Link to='/legislacao-municipal' className='main-links-uteis__text__link'>Legislação Municipal</Link>

                    <h4>Legislação Municipal</h4>

                    <p>
                        <a href="https://leismunicipais.com.br/prefeitura/sc/saojose" target='_blank'>https://leismunicipais.com.br/prefeitura/sc/saojose</a>
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextLegislacaoMunicipal