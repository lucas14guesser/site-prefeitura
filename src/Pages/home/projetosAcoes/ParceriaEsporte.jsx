import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/projetosAcoes/ProjetosAcoes.css'

const ParceriaEsporte = () => {
  return (
    <div className='projetos-acoes-container'>
        <div className="main-projetos-acoes">
            <Container>
                <div className="main-projetos-acoes__text">
                    <Link to="/" className='main-projetos-acoes__text__link'>Home</Link>/<Link to='/termos-de-parcerias-fundacao-esportes' className='main-projetos-acoes__text__link'>Termos de Parcerias Fundação Esportes</Link>

                    <h4>Termos de Parcerias Fundação Esportes</h4>

                    <p>
                        <img src="../img/projetosAcoes/logo-termos-convenios.png" alt="Logo da lista de espera sus" />
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default ParceriaEsporte