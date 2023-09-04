import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/projetosAcoes/ProjetosAcoes.css'

const PlanoVacinacao = () => {
  return (
    <div className='projetos-acoes-container'>
        <div className="main-projetos-acoes">
            <Container>
                <div className="main-projetos-acoes__text">
                    <Link to="/" className='main-projetos-acoes__text__link'>Home</Link>/<Link to='/plano-municipal-de-vacinacao' className='main-projetos-acoes__text__link'>Plano Municipal de Vacinação</Link>

                    <h4>Plano Municipal de Vacinação</h4>

                    <p>
                        <img src="../img/projetosAcoes/plano-vacina.png" alt="foto do Cati" />
                    </p>

                    <h6>Plano Municipal de Vacinação</h6>

                    <p>
                        <a href="https://www.saojose.sc.gov.br/images/uploads/sao-jose/PLANO_VACINACAO_COVID_SMS.pdf?_ga=2.103597125.454589979.1690185344-2046960625.1688597347&_gl=1*126ru3k*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY5MDE5NjgxOC4yNy4xLjE2OTAxOTkzMTcuMC4wLjA." target='_blank'>Acesse aqui o Plano Municipal de Vacinação contra a Covid-19 na íntegra</a>
                    </p>

                    <h6>Confira também o Plano Nacional e  Estadual de vacinação contra a Covid-19</h6>

                    <p>
                        <a href="https://www.saojose.sc.gov.br/images/uploads/sao-jose/plano_vacinacao_versao_eletronica-MS.pdf?_ga=2.136908277.454589979.1690185344-2046960625.1688597347&_gl=1*1txe8ze*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY5MDE5NjgxOC4yNy4xLjE2OTAxOTkzMTcuMC4wLjA." target='_blank'>Acesse aqui o Plano Nacional de Vacinação contra a Covid-19 na íntegra</a>
                        <br /><br />
                        <a href="https://www.saojose.sc.gov.br/images/uploads/sao-jose/plano_vacina_SC.pdf?_ga=2.136908277.454589979.1690185344-2046960625.1688597347&_gl=1*1txe8ze*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY5MDE5NjgxOC4yNy4xLjE2OTAxOTkzMTcuMC4wLjA." target='_blank'>Acesse aqui o Plano Estadual de Vacinação contra a Covid-19 na íntegra</a>
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default PlanoVacinacao