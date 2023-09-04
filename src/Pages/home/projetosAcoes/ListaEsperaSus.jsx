import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/projetosAcoes/ProjetosAcoes.css'

const ListaEsperaSus = () => {
  return (
    <div className='projetos-acoes-container'>
        <div className="main-projetos-acoes">
            <Container>
                <div className="main-projetos-acoes__text">
                    <Link to="/" className='main-projetos-acoes__text__link'>Home</Link>/<Link to='/lista-de-espera-do-sistema-unico-de-saude-(sus)' className='main-projetos-acoes__text__link'>Lista de Espera do Sistema Único de Saúde (SUS)</Link>

                    <h4>Lista de Espera do Sistema Único de Saúde (SUS)</h4>

                    <p>
                        <img src="../img/projetosAcoes/lista-sus.png" alt="Logo da lista de espera sus" className='main-projetos-acoes__text__image'/>
                    </p>
                    <p>
                        Este portal foi desenvolvido para que o cidadão catarinense tenha acesso às informações sobre a sua posição e previsão de atendimento nas listas de espera por serviços de saúde no Sistema Único de Saúde (SUS), em cumprimento à Lei Estadual 17.066 de 2017 e ao Decreto Estadual nº 1.118/2017.
                        <br /><br />
                        As pesquisas poderão ser realizadas pelo documento do paciente (CPF ou Cartão Nacional do SUS) ou por Central de Regulação e Procedimento.
                        <br /><br />
                        As informações inseridas nas listas de espera e nas listas de pacientes agendados e atendidos serão atualizadas semanalmente (todas as segundas-feiras).
                        <br /><br />
                        A ordem de agendamento e atendimento dos usuários é definida a partir de critério cronológico ou avaliação da situação clínica do paciente, visando, assim, atender a população catarinense de acordo com os princípios da universalidade e equidade no acesso aos serviços do SUS.
                        <br /><br />
                        Dessa forma, eventual alteração na ordem de atendimento dos pacientes sem a observância dos parâmetros acima, ou, excepcionalmente, por ordem judicial, ensejará na investigação do responsável pela prática dos crimes de corrupção (art. 317 do Código Penal) e de inserção de dados falsos em sistema de informações (art. 313-A do Código Penal).
                        <br /><br />
                        <a href="https://listadeespera.saude.sc.gov.br/" target='_blank'>Clique aqui para acessar a lista.</a>
                    </p>

                    <h6>Acompanhe o fluxograma de atendimento no SUS pelas portas de entrada do paciente:</h6>

                    <p>
                        <img src="../img/projetosAcoes/fluxograma-site-scaled.png" alt="Fluxograma Scaled" />
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default ListaEsperaSus