import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/secretarias/Secretarias.css'

const TextUrbanismo = () => {
  return (
    <div className='secretarias_container'>
        <div className="main_secretarias">
            <Container>
                <div className="text_secretarias">
                    <Link to="/" className='link_secretarias'>Home</Link>/<Link to='/secretaria-de-urbanismo' className='link_secretarias'>Secretaria de Urbanismo e Serviços Públicos</Link>

                    <h4>Secretaria de Urbanismo e Serviços Públicos</h4>
                    
                    <h6>Objetivos</h6>

                    <p>
                    Cumprir e fazer cumprir o Plano Diretor do Município, código de obras, código de postura e demais legislações que tratam da fiscalização e do licenciamento no âmbito do território municipal.
                    </p>

                    <h6>Secretário Michel da Silva Schlemper</h6>
                    <div className="text_secretarias__sec">
                        <img src="../img/prefeitos/vice-prefeito.png" alt="Foto do secretário de urbanismo Michel Schlemper" />
                        <p>O vice-prefeito Michel Schlemper assume o cargo de secretário de Urbanismo e Serviços Públicos. Formado em Gestão Pública, Michel Schlemper foi eleito vereador por São José em 2012 e reeleito em 2016. Em 2019, Michel Schlemper assumiu a presidência da Câmara, modernizando a gestão e proporcionando mais conectividade com o cidadão, a exemplo da implantação do Parlamento Digital e do retorno da TV Câmara. No Executivo Municipal, atuou como secretário de Administração; de Transporte; de Comunicação Social; de Governo; de Desenvolvimento Econômico, Ciência e Tecnologia e chefe de Gabinete.</p>
                    </div>

                    <h6>Secretário adjunto Michael Pedro Rosanelli</h6>
                    <div className="text_secretarias__sec">
                        <img src="../img/other/michael.png" alt="Foto do secretário adjunto de urbanismo Michael Rosanelli" />
                        <p>Michael Pedro Rosanelli é advogado e possui pós-graduação em Meio Ambiente e Desenvolvimento Sustentável, e também em Políticas Públicas e Municipalidade. Michael possui experiência na área pública. Na Prefeitura de São José, atuou como secretário de Governo, secretário de Urbanismo e Serviços Públicos, secretário adjunto de Urbanismo e Serviços Públicos, Diretor-Geral de Vigilância em Saúde e Diretor da Vigilância Sanitária.</p>
                    </div>

                    <h6>Contato</h6>

                    <p>
                        Telefone: <a href="https://api.whatsapp.com/send?phone=4833810020" target='_blank'>(48)3381-0020</a>
                        <br /><br />
                        Endereço: Sede da Administração: Avenida Acioni Souza Filho (Beira-Mar de São José), n° 403, Térreo, Praia Comprida – São José.
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextUrbanismo