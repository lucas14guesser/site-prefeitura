import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/projetosAcoes/ProjetosAcoes.css'

const HorariosFunesj = () => {
  return (
    <div className='projetos-acoes-container'>
        <div className="main-projetos-acoes">
            <Container>
                <div className="main-projetos-acoes__text">
                    <Link to="/" className='main-projetos-acoes__text__link'>Home</Link>/<Link to='/horarios-de-atividades-da-funesj' className='main-projetos-acoes__text__link'>Horários de atividades da FUNESJ</Link>

                    <h4>Horários de atividades da FUNESJ</h4>

                    <p>
                        <img src="../img/projetosAcoes/horario-atividades-funesj.png" alt="Icone atividade da funesj" />
                    </p>

                    <h6>Dúvidas:</h6>
                    <p>
                    A Fundação Municipal de Esportes e Lazer de São José agora possui um novo canal de comunicação com a população. Por meio do aplicativo WhatsApp, no número (48) 98504-0023, a equipe vai solucionar dúvidas sobre as aulas das modalidades comunitárias, assim como a utilização de ginásios e quadras.
                    <br /><br />
                    <a href="https://saojose.sc.gov.br/wp-content/uploads/2021/04/Horarios-Comunitario-2023_-Atualizado.xlsx-2023.pdf" target='_blank'>Horários Comunitário 2023- 2023</a>
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default HorariosFunesj