import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/linksUteis/LinksUteis.css'

const TextParceriaSociedadeCivil = () => {
  return (
    <div className='links-uteis-container'>
        <div className="main-links-uteis">
            <Container>
                <div className="main-links-uteis__text">
                    <Link to="/" className='main-links-uteis__text__link'>Home</Link>/<Link to='/parcerias-com-a-sociedade-civil' className='main-links-uteis__text__link'>Parcerias com a Sociedade Civil</Link>

                    <h4>Parcerias com a Sociedade Civil</h4>

                    <p>
                    Conforme <a href="http://www.saojose.sc.gov.br/images/uploads/publicacoes/Decreto_8623_-_Marco_Regulatorio-correto.pdf?_ga=2.204768336.1904247959.1689599992-2046960625.1688597347&_gl=1*1d35nu2*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY5MDA5MzYxOC4yNC4xLjE2OTAwOTU4NzguMC4wLjA." target='_blank'>Decreto 8623/2017</a>, que regulamenta as parcerias entre o município de São José e as Organizações da Sociedade Civil, para a consecução de finalidades de interesse público e recíproco, mediante a execução de projetos e atividades previamente estabelecidos em planos de trabalho, nos termos da <a href="http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l13019.htm" target='_blank'>lei federal n. 13.019, de 2014</a>, a prefeitura de São José torna público as informções das parcerias com a Sociedade Civil.

                    <h6>Acesse as informações das parcerias entre a Prefeitura de São José conforme àreas de atuação listadas abaixo:</h6>

                    <ul>
                        <li>Assistência Social</li>
                        <li>Desenvolvimento Econômico</li>
                        <li>
                            <a href="http://www.saojose.sc.gov.br/index.php/sao-jose/secretarias-e-orgaos-desc/secretaria-de-educacaeo/prestacao-civil-educacao?_ga=2.131883087.1904247959.1689599992-2046960625.1688597347&_gl=1*1haco3j*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY5MDA5MzYxOC4yNC4xLjE2OTAwOTU4NzguMC4wLjA." target='_blank'>Educação</a>
                        </li>
                        <li>Saúde</li>
                    </ul>
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextParceriaSociedadeCivil