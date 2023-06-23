import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../Styles/Licitacoes.css'

const TextLicitacoes = () => {
  return (
    <div className='licitacao_container'>
        <div className="main_licitacao">
            <Container>
                <div className="text_licitacao">
                    <div>
                        <Link to="/" className='link_licitacao'>Home</Link>/<Link to='/licitacoes' className='link_licitacao'>Licitações</Link>
                    </div>

                    <h4>Licitações</h4>

                    <h5>Avisos:</h5>
                    <div className="links_licitacao">
                        <p>
                            <a href="https://www.youtube.com/channel/UClRIGoKiJWitdktZGAKHCDw">Link para sessão pública: Modalidades Tradicionais</a>
                            <br /><br />
                            <a href="https://saojose.sc.gov.br/wp-content/uploads/2021/08/Portaria-Conjunta-PGM-001.pdf">Portaria Conjunta PGM 001</a>
                            <br /><br />
                            <a href="https://www.saojose.sc.gov.br/images/uploads/publicacoes/Portaria_n._616,_de_28_de_maio_de_2018.pdf?_gl=1*13xha56*_ga*MTI5NjMzNTY3My4xNjg0NDM4Mjk3*_ga_Y6Q5YHNV0H*MTY4NTU1MjMwMS4zMC4xLjE2ODU1NTcwMzkuMC4wLjA.&_ga=2.21324027.1186840495.1685376409-1296335673.1684438297">Portaria SADM/PMSJ nº 616, de 28 de maio de 2018 suspende todos os prazos licitatórios no município de São José nos dias 28, 29 e 30 de maio de 2018</a>
                            <br /><br />
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Preg%C3%A3o_Eletr%C3%B4nico_-_Manual_do_Fornecedor_.pdf?_gl=1*1tflk5c*_ga*MTI5NjMzNTY3My4xNjg0NDM4Mjk3*_ga_Y6Q5YHNV0H*MTY4NTU1MjMwMS4zMC4xLjE2ODU1NTcwMzkuMC4wLjA.&_ga=2.259827786.1186840495.1685376409-1296335673.1684438297">Manual do Fornecedor – de acordo com Decreto 10.024/2019</a>
                        </p>
                    </div>

                    <h5>Documentos necessários para cadastro de fornecedores – licitações presenciais</h5>

                    <div className="links_licitacao">
                        <p>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Instru%C3%A7%C3%A3o_normativa_001.2021_(2).docx?_gl=1*3c2n7r*_ga*MTI5NjMzNTY3My4xNjg0NDM4Mjk3*_ga_Y6Q5YHNV0H*MTY4NTU1MjMwMS4zMC4xLjE2ODU1NTcwMzkuMC4wLjA.&_ga=2.54381544.1186840495.1685376409-1296335673.1684438297">Documentos para Cadastro de Fornecedores</a>
                        </p>
                    </div>

                    <h5>Kit proposta</h5>

                    <div className="links_licitacao">
                        <p>
                            <a href="https://drive.google.com/file/d/1p4tQzsmv-VriDidSj6rEd16BkkkVQ01T/view">GOVBR_Kit Proposta</a>
                        </p>
                    </div>

                    <h5>Acesso WBC / Sistema de Pregão Eletrônico</h5>

                    <div className="links_licitacao">
                        <p>
                            <a href="https://egov.paradigmabs.com.br/saojose/Default.aspx">Acesso ao sistema</a>
                        </p>
                    </div>

                    <h5>Guia do Fornecedor</h5>

                    <div className="links_licitacao">
                        <p>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Preg%C3%A3o_Eletr%C3%B4nico_-_Manual_do_Fornecedor_.pdf?_gl=1*18h5pih*_ga*MTI5NjMzNTY3My4xNjg0NDM4Mjk3*_ga_Y6Q5YHNV0H*MTY4NTU1MjMwMS4zMC4xLjE2ODU1NTcwMzkuMC4wLjA.&_ga=2.958833.1186840495.1685376409-1296335673.1684438297">Guia do Fornecedor</a>
                        </p>
                    </div>

                    <h5>Acesso Editais</h5>

                    <div className='links_licitacao'>
                        <p>
                            <a href="https://egov.paradigmabs.com.br/saojose/portal/Mural.aspx?nNmTela=E">Clique aqui para acessar os  editais disponíveis </a>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextLicitacoes