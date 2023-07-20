import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../Styles/conselhos/Conselho.css'

const TextConferenciaSas = () => {
  return (
    <div className='conselho-container'>
        <div className="main-conselho">
            <Container>
                <div className="main-conselho__text">
                    <Link to="/" className='main-conselho__text__link'>Home</Link>/<Link to='/conselho-municipal-de-assistencia-social-de-sao-jose-(cmas-sj)' className='main-conselho__text__link'>Conselho Municipal de Assistência Social De São José (CMAS-SJ)</Link>/<Link to='/14a-conferencia-municipal-de-assistencia-social' className='main-conselho__text__link'>14ª Conferência Municipal de Assistência Social</Link>

                    <h4>14ª Conferência Municipal de Assistência Social</h4>

                    <p>
                    A 14ª Conferência Municipal da Assistência Social de São José que será realizada nos dias 13 e 14 de julho terá como tema: “Reconstrução do SUAS: O SUAS que temos e o SUAS que queremos” e será antecedida de pré-conferências em todos os territórios e com diferentes públicos do campo da política pública de Assistência Social. Saiba mais! Participe! Vamos debater e fortalecer o SUAS em São José!
                    <br /><br />

                    <div className="main-conselho__text__sec">
                        <img src="./img/conselhos/conferencia-cmas.png" alt="Foto 14º conferencia sas"/>
                    </div>

                    <p>
                        Data: 13/07/2023 das 18h às 22h e 14/07/2023 das 08h:30min às 17h:30min
                        <br /><br />
                        Local: CATI – Centro de Atenção a Terceira Idade de São José
                        <br /><br />
                        Endereço: Av. Acioni Souza Filho, s/n – Praia Comprida, São José – SC, 88103-600

                        <a href="https://saojose.sc.gov.br/wp-content/uploads/2023/06/Resolucao-13-Convoca-14o-Conferencia-Municipal-de-Assistencia-Social.pdf" target='_blank'>Resolução 13/0203 </a>Clique para conhecer a Resolução do Conselho Municipal de Assistência Social que convoca a 14º Conferência Municipal de Assistência Social.

                        <h6>CALENDÁRIO PRÉ-CONFERÊNCIAS MUNICIPAIS:</h6>

                        Eventos preparatórios para a 14a. Conferência que ocorrerão em todos os territórios do município. Conheça, divulgue e participe: <a href="https://saojose.sc.gov.br/wp-content/uploads/2023/06/tabelapreconferencias.pdf" target='_blank'>Faça o Download aqui do calendário</a>

                        <h6>Faça as Inscrições para participar da Pré-conferência Trabalhadores do SUAS no seguinte link</h6>

                        <a href="https://forms.gle/8JXsuBZXStFQHDxx6" target='_blank'>https://forms.gle/8JXsuBZXStFQHDxx6</a>

                        <h6>Faça as Inscrições para participar da Pré-conferência da Entidades do SUAS no seguinte link:</h6>

                        <a href="https://forms.gle/nqWMUwtG1Cqt3Laj9" target='_blank'>https://forms.gle/nqWMUwtG1Cqt3Laj9</a>

                        <h6>PARTICIPE DA 14a. CONFERÊNCIA MUNICIPAL DE ASSISTÊNCIA SOCIAL. Faça sua inscrição no seguinte link:</h6>

                        <a href="https://forms.gle/fzogovbhhxmy2ww56" target='_blank'>https://forms.gle/fzogovbhhxmy2ww56</a>

                        <h6>Conheça a Minuta do Regimento Interno da 14a. Conferência Municipal Avalie e faça as sugestões que achar conveniente:</h6>

                        <a href="https://forms.gle/PYtkEgxzAxH1SNuU6">https://forms.gle/PYtkEgxzAxH1SNuU6</a>
                    </p>
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextConferenciaSas