import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../Styles/linksUteis/LinksUteis.css'

const TextTabelaCosip = () => {
  return (
    <div className='links-uteis-container'>
        <div className="main-links-uteis">
            <Container>
                <div className="main-links-uteis__text">
                    <Link to="/" className='main-links-uteis__text__link'>Home</Link>/<Link to='/solicitacoes-de-vaga-cei/cem' className='main-links-uteis__text__link'>Solicitações de vaga CEI/CEM</Link>
                </div>
                <div className="main-links-uteis-flexbox">
                    <div className="main-links-uteis-flexbox__pdfs">
                        <object data="../pdf/TabelaCosip.pdf" className="main-links-uteis-flexbox__pdfs__pdf"></object>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextTabelaCosip