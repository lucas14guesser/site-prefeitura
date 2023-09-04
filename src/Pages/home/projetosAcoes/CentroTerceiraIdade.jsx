import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/projetosAcoes/ProjetosAcoes.css'

const CentroTerceiraIdade = () => {
  return (
    <div className='projetos-acoes-container'>
        <div className="main-projetos-acoes">
            <Container>
                <div className="main-projetos-acoes__text">
                    <Link to="/" className='main-projetos-acoes__text__link'>Home</Link>/<Link to='/centro-de-atencao-a-terceira-idade' className='main-projetos-acoes__text__link'>Centro de Atenção à Terceira Idade</Link>

                    <h4>Centro de Atenção à Terceira Idade</h4>

                    <p>
                        <img src="../img/projetosAcoes/cati-fachada.png" alt="foto do Cati" />
                    </p>
                    <p>
                    No CATI são ofertados aos Idosos, oficinas de alongamento, canto, informática, italiano, dança, dentre outras atividades. Atualmente são atendidos aproximadamente 3.000 idosos.
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default CentroTerceiraIdade