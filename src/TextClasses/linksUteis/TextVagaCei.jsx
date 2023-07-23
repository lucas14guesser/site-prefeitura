import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../Styles/linksUteis/LinksUteis.css'

const TextVagaCei = () => {
  return (
    <div className='links-uteis-container'>
        <div className="main-links-uteis">
            <Container>
                <div className="main-links-uteis__text">
                    <Link to="/" className='main-links-uteis__text__link'>Home</Link>/<Link to='/solicitacoes-de-vaga-cei/cem' className='main-links-uteis__text__link'>Solicitações de vaga CEI/CEM</Link>

                    <h4>Solicitações de vaga CEI/CEM</h4>

                    <p>
                    SOLICITAÇÃO DE VAGA EDUCAÇÃO INFANTIL E ENSINO FUNDAMENTAL
                    <br /><br /><br />
                    <a href="https://saojose.educarweb.net.br/servicoexterno/matricula-2023">https://saojose.educarweb.net.br/servicoexterno/matricula-2023</a>
                    </p>
                </div>

            </Container>
        </div>
    </div>
  )
}

export default TextVagaCei