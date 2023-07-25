import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/projetosAcoes/ProjetosAcoes.css'

const TextLeisTransito = () => {
  return (
    <div className='projetos-acoes-container'>
        <div className="main-projetos-acoes">
            <Container>
                <div className="main-projetos-acoes__text">
                    <Link to="/" className='main-projetos-acoes__text__link'>Home</Link>/<Link to='/novas-leis-de-transito' className='main-projetos-acoes__text__link'>Novas leis de Trânsito</Link>

                    <h4>Novas leis de Trânsito</h4>

                    <p>
                        <img src="../img/projetosAcoes/transito-1.png" alt="Imagem 1 das novas leis de trânsito" className='main-projetos-acoes__text__image'/>
                    </p>

                    <h6>Transito Seguro-Conheça as novas leis de Trânsito</h6>

                    <p>
                        <img src="../img/projetosAcoes/transito-2.png" alt="Imagem 2 das novas leis de trânsito" className='main-projetos-acoes__text__image'/>
                    </p>

                    <p>
                        <a href="http://www.saojose.sc.gov.br/images/uploads/programas-acoes/Mudan%C3%A7a_C%C3%B3digo_Transito.pdf?_gl=1*odvy58*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY5MDE5NjgxOC4yNy4xLjE2OTAyMDAyMzEuMC4wLjA.&_ga=2.262285129.454589979.1690185344-2046960625.1688597347" target='_blank'>Download Mudanças Código Trânsito.</a>
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextLeisTransito