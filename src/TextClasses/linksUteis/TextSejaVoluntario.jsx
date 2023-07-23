import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../Styles/linksUteis/LinksUteis.css'

const TextSejaVoluntario = () => {
  return (
    <div className='links-uteis-container'>
        <div className="main-links-uteis">
            <Container>
                <div className="main-links-uteis__text">
                    <Link to="/" className='main-links-uteis__text__link'>Home</Link>/<Link to='/seja-um-voluntario' className='main-links-uteis__text__link'>Seja um Voluntário</Link>

                    <h4>Seja um Voluntário</h4>

                    <p>
                    A Prefeitura de São José está implantando o Banco de Oferta e Demanda de Serviços Voluntários (BODeSV). A medida está de acordo com a lei municipal 5433 de 26 de setembro de 2014. O Banco Local de Voluntários do Município de São José tem como objetivo constituir um espaço de aproximação entre as pessoas interessadas no trabalho voluntário e as organizações promotoras de voluntariado que desenvolvam projetos úteis na área da juventude, idosos, deficiência, violência e criminalidade, educação, alfabetização, ambiente, saúde, desporto, cultura, interculturidade, dependência de drogas, exploração de crianças e prostituição infantil, entre outros.
                    <br /><br />
                    São prestadores de serviço voluntário:
                    <br /><br />
                    <ul>
                        <li>a pessoa física ou grupo de pessoas a serviço de entidade pública de qualquer natureza;</li>
                        <li>a instituição privada de fins lucrativos, que tenha objetivos cívicos, culturais, educacionais, científicos, recreativos ou de assistência social.</li>
                    </ul>
                    O Banco de Oferta e Demanda de Serviços Voluntários (BODeSV)  receberá inscrições de interessados em atuar como voluntários na Central de Videomonitoramento, implantada pela Secretaria Municipal de Segurança, Defesa Social e Trânsito. Os voluntários, junto com outros profissionais, farão o videomonitoramento das câmeras de vigilância.
                    
                    <h6>Clique abaixo para realizar o cadastro:</h6>
                    <br />
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScfJTC9xmatB1DN_cUIw6sc-Oyqa4c079CxkfJxll2spoBI6Q/viewform" target='_blank'>Cadastro de Voluntários – Central de vídeo monitoramento</a>
                    <br /><br />
                    <a href="https://saojose.sc.gov.br/wp-content/uploads/2021/06/criterios-chamamento.pdf" target='_blank'>Critérios chamamento</a>
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextSejaVoluntario