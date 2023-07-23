import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../Styles/linksUteis/LinksUteis.css'

const TextSus = () => {
  return (
    <div className='links-uteis-container'>
        <div className="main-links-uteis">
            <Container>
                <div className="main-links-uteis__text">
                    <Link to="/" className='main-links-uteis__text__link'>Home</Link>/<Link to='/lista-de-espera-sus' className='main-links-uteis__text__link'>Lista de espera SUS</Link>

                    <h4>Lista de espera SUS</h4>

                    <p>
                    Clique abaixo para consultar as listas de espera do SUS
                    <br /><br /><br />
                    <a href="https://listadeespera.saude.sc.gov.br/#/home">Acessar lista de espera (sisreg)</a>
                    <br /><br />
                    <a href="https://pmsaojose.celk.com.br/lista-publica">Acessar lista de espera (celk)</a>
                    </p>
                </div>

            </Container>
        </div>
    </div>
  )
}

export default TextSus