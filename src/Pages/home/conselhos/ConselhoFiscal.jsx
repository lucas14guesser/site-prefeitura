import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/conselhos/Conselho.css'

const ConselhoFiscal = () => {
  return (
    <div className='conselho-container'>
        <div className="main-conselho">
            <Container>
                <div className="main-conselho__text">
                    <Link to="/" className='main-conselho__text__link'>Home</Link>/<Link to='/conselho-fiscal-–-sjprev' className='main-conselho__text__link'>Conselho Fiscal – SJPREV</Link>

                    <h4>Conselho Fiscal – SJPREV</h4>

                    <p>
                    Conselho Fiscal da Autarquia São José Previdência
                    <br />
                    Guilherme ClasenGagliotti (Presidente)
                    <br /><br />
                    Adriana Maciel Pereira (Suplente)
                    <br /><br />
                    Gustavo Duarte do Valle Pereira (Membro)
                    <br /><br />
                    Marília Gomes Formento (Suplente)
                    <br /><br />
                    Marcus Vinicius de Andrade (Membro)
                    <br /><br />
                    Maiko Martins Saldano (Suplente)
                    <br /><br />
                    Ana Paula Lemos Souza (Membro)
                    <br /><br />
                    Jamil Paulo Elias (Suplente)
                    </p>
                    
                    <h6>Downloads:</h6>

                    <ul>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Ata_006-15_-_Reuni_o_Ordin%C3%A1ria_Conselho_Fiscal.pdf?_gl=1*4f0802*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY4OTkyNDczNS4yMC4xLjE2ODk5Mjk5OTcuMC4wLjA.&_ga=2.170232928.1904247959.1689599992-2046960625.1688597347" target='_blank'>Ata 006/15 – Reunião Ordinária Conselho Fiscal</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Ata_005-15_-_Reuni_o_Ordin%C3%A1ria_Conselho_Fiscal.pdf?_gl=1*4f0802*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY4OTkyNDczNS4yMC4xLjE2ODk5Mjk5OTcuMC4wLjA.&_ga=2.170232928.1904247959.1689599992-2046960625.1688597347" target='_blank'>Ata 005/15 – Reunião Ordinária Conselho Fiscal</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Ata_004-15_-_Reuni_o_Ordin%C3%A1ria_Conselho_Fiscal.pdf?_gl=1*19emcx8*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY4OTkyNDczNS4yMC4xLjE2ODk5Mjk5OTcuMC4wLjA.&_ga=2.230149212.1904247959.1689599992-2046960625.1688597347" target='_blank'>Ata 004/15 – Reunião Ordinária Conselho Fiscal</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Ata_003-15_-_Reuni_o_Ordin%C3%A1ria_Conselho_Fiscal.pdf?_gl=1*19emcx8*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY4OTkyNDczNS4yMC4xLjE2ODk5Mjk5OTcuMC4wLjA.&_ga=2.230149212.1904247959.1689599992-2046960625.1688597347" target='_blank'>Ata 003/15 – Reunião Ordinária Conselho Fiscal</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Ata_002-15_-_Reuni_o_Ordin%C3%A1ria_Conselho_Fiscal.pdf?_gl=1*19emcx8*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY4OTkyNDczNS4yMC4xLjE2ODk5Mjk5OTcuMC4wLjA.&_ga=2.230149212.1904247959.1689599992-2046960625.1688597347" target='_blank'>Ata 002/15 – Reunião Ordinária Conselho Fiscal</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Ata_001-15_-_Reuni_o_Ordin%C3%A1ria_Conselho_Fiscal.pdf?_gl=1*19emcx8*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY4OTkyNDczNS4yMC4xLjE2ODk5Mjk5OTcuMC4wLjA.&_ga=2.230149212.1904247959.1689599992-2046960625.1688597347" target='_blank'>Ata 001/15 – Reunião Ordinária Conselho Fiscal</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default ConselhoFiscal