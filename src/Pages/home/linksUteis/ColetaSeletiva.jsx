import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/linksUteis/LinksUteis.css'

const ColetaSeletiva = () => {
  return (
    <div className='links-uteis-container'>
        <div className="main-links-uteis">
            <Container>
                <div className="main-links-uteis__text">
                    <Link to="/" className='main-links-uteis__text__link'>Home</Link>/<Link to='/coleta-seletiva-horarios' className='main-links-uteis__text__link'>Coleta Seletiva Horários</Link>

                    <h4>Coleta Seletiva Horários</h4>

                    <h6>Por que reciclar?</h6>

                    <ul>
                        <li>Ajuda a preservar o meio ambiente;</li>
                        <li>Melhora a qualidade de vida;</li>
                        <li>Proporciona ganhos sociais;</li>
                        <li>Gera trabalho e renda, transformando catadores em agentes recicladores.</li>
                    </ul>
                </div>
                <div className="main-links-uteis-flexbox">
                    <div className="main-links-uteis-flexbox__images">
                        <img src="../img/linksUteis/seletivo-1.png" alt="Foto da coleta convencional" className='main-links-uteis-flexbox__images__image'/>
                        <img src="../img/linksUteis/seletivo-2.png" alt="Foto da coleta convencional" className='main-links-uteis-flexbox__images__image'/>
                        <img src="../img/linksUteis/seletivo-3.png" alt="Foto da coleta convencional" className='main-links-uteis-flexbox__images__image'/>
                        <img src="../img/linksUteis/seletivo-3.png" alt="Foto da coleta convencional" className='main-links-uteis-flexbox__images__image'/>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default ColetaSeletiva