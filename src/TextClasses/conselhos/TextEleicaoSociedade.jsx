import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../Styles/conselhos/Conselho.css'

const TextEleicaoSociedade = () => {
  return (
    <div className='conselho-container'>
        <div className="main-conselho">
            <Container>
                <div className="main-conselho__text">
                    <Link to="/" className='main-conselho__text__link'>Home</Link>/ <Link to='/conselho-municipal-antidrogas' className='main-conselho__text__link'>Conselho Municipal Antidrogas de São José</Link>/ 
                    <Link to='/eleicao-da-sociedade-civil-2023' className='main-conselho__text__link'>Eleição da Sociedade Civil 2023</Link>

                    <h4>Eleição da Sociedade Civil 2023</h4>

                    <img src="./img/conselhos/eleicao-comad.png" alt="Cartaz das eleições COMAD 2023" className='main-conselho__text__image'/>

                    <ul>
                        <li>
                            <a href="https://saojose.sc.gov.br/wp-content/uploads/2023/06/RESULTADO-DA-ELEICAO-DA-SOCIEDADE-CIVIL-PARA-COMPOR-O-COMADSJ-GESTAO-2023-2025.pdf">RESULTADO DA ELEIÇÃO DA SOCIEDADE CIVIL PARA COMPOR O COMADSJ – GESTÃO 2023-2025.PDF</a>
                        </li>
                        <li>
                            <a href="https://saojose.sc.gov.br/wp-content/uploads/2023/06/RESULTADO-DO-PROCESSO-DE-HABILITACAO-PARA-O-FORUM-ELETIVO-SOCIEDADE-CIVIL-COMADSJ.pdf">RESULTADO DO PROCESSO DE HABILITAÇÃO PARA O FÓRUM ELETIVO SOCIEDADE CIVIL COMADSJ.PDF</a>
                        </li>
                    </ul>     
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextEleicaoSociedade