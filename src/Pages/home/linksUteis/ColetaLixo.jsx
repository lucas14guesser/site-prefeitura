import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/linksUteis/LinksUteis.css'

const ColetaLixo = () => {
  return (
    <div className='links-uteis-container'>
        <div className="main-links-uteis">
            <Container>
                <div className="main-links-uteis__text">
                    <Link to="/" className='main-links-uteis__text__link'>Home</Link>/<Link to='/horarios-coleta-de-lixo-(seletiva-e-convencional)' className='main-links-uteis__text__link'>Horários Coleta de Lixo (Seletiva e Convencional)</Link>

                    <h4>Horários Coleta de Lixo (Seletiva e Convencional)</h4>

                    <h6>Segue os horários de Coleta de Lixo Seletiva e Convencional</h6>
                </div>
                <div className="main-links-uteis-flexbox">
                    <div className="main-links-uteis-flexbox__images">
                        <img src="../img/linksUteis/lixo-1.png" alt="Foto da coleta convencional" className='main-links-uteis-flexbox__images__image'/>
                        <img src="../img/linksUteis/lixo-2.png" alt="Foto da coleta convencional" className='main-links-uteis-flexbox__images__image'/>
                        <img src="../img/linksUteis/lixo-3.png" alt="Foto da coleta convencional" className='main-links-uteis-flexbox__images__image'/>
                        <img src="../img/linksUteis/lixo-4.png" alt="Foto da coleta convencional" className='main-links-uteis-flexbox__images__image'/>
                        <img src="../img/linksUteis/lixo-5.png" alt="Foto da coleta convencional" className='main-links-uteis-flexbox__images__image'/>
                        <img src="../img/linksUteis/lixo-6.png" alt="Foto da coleta convencional" className='main-links-uteis-flexbox__images__image'/>
                        <img src="../img/linksUteis/lixo-7.png" alt="Foto da coleta convencional" className='main-links-uteis-flexbox__images__image'/>
                        <img src="../img/linksUteis/lixo-8.png" alt="Foto da coleta convencional" className='main-links-uteis-flexbox__images__image'/>
                        <img src="../img/linksUteis/lixo-9.png" alt="Foto da coleta convencional" className='main-links-uteis-flexbox__images__image'/>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default ColetaLixo