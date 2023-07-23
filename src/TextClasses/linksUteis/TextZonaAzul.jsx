import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../Styles/linksUteis/LinksUteis.css'

const TextZonaAzul = () => {
  return (
    <div className='links-uteis-container'>
        <div className="main-links-uteis">
            <Container>
                <div className="main-links-uteis__text">
                    <Link to="/" className='main-links-uteis__text__link'>Home</Link>/<Link to='/autorizacao-para-uso-de-vaga-zona-azul' className='main-links-uteis__text__link'>Autorização para uso de Vaga Zona Azul</Link>

                    <h4>Autorização para uso de Vaga Zona Azul</h4>

                    <p>
                    Para fazer a solicitação de autorização de uso de vaga de estacionamento rotativo Zona Azul acesse o link abaixo:
                    <br /><br /><br />
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdvw2ROkH6XOeMmBP7yZTbI0WZBuIaGuy4wRfCniU2sJCbFmg/closedform">https://forms.gle/Edw1ML4A7zacCcvRA</a>
                    </p>
                </div>

            </Container>
        </div>
    </div>
  )
}

export default TextZonaAzul