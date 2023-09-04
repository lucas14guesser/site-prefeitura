import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/secretarias/Secretarias.css'

const PlanejamentoEstrategico = () => {
  return (
    <div className='secretarias_container'>
        <div className="main_secretarias">
            <Container>
                <div className="text_secretarias">
                    <Link to="/" className='link_secretarias'>Home</Link>/<Link to='/secretaria-de-planejamento-e-assuntos-estrategicos' className='link_secretarias'>Secretaria de Planejamento e Assuntos Estratégicos</Link>

                    <h4>Secretaria de Planejamento e Assuntos Estratégicos</h4>
                    

                    <h6>Secretário Pedro Paulo Duarte da Silva</h6>

                    <div className="text_secretarias__sec">
                        <img src="../img/other/pedro-paulo.png" alt="Foto do secretario do planejamento-estrategico Pedro Paulo Duarte da Silva" />
                        <p>Secretário Pedro Paulo Duarte da Silva Técnico em Agrimensor/Estradas formado na Escola Técnica de Santa Catarina no ano de 1981. É Engenheiro Civil, formado pela Universidade Federal de Santa Catarina (UFSC) em 1991. Cursou a especialização em Gerenciamento de Projetos e Construção, no Japão, em 2001. É empresário na área de engenharia em projetos e construções desde 1987 até os dias atuais, além de atuar em projetos de loteamentos e condomínios, bem como em edificações.
                        <br /><br />
                        <h6>Atribuições</h6>
                        Exercer as funções inerentes ao gerenciamento e gestão da respectiva Secretaria, objetivando o cumprimento de todas as atribuições e responsabilidades do respectivo órgão; Executar atribuições decorrentes de outras leis ou que lhe forem designadas.</p>
                    </div>

                    <h6>Secretário Adjunto Gabriel Nienchotter</h6>

                    <h6>Contato</h6>

                    <p>
                        Telefone: <a href="https://api.whatsapp.com/send?phone=4833810034" target='_blank'>Telefone: (48)3381-0034</a>
                        <br /><br />
                        E-mail: <a href="mailto:planejamento@pmsj.sc.gov.br">planejamento@pmsj.sc.gov.br</a>
                        <br /><br />
                        Endereço: Sede da Administração: Avenida Acioni Souza Filho (Beira-Mar de São José), n° 403, 4º andar, Praia Comprida – São José.
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default PlanejamentoEstrategico