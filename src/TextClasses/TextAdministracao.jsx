import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../Styles/Administracao.css'

const TextAdministracao = () => {
  return (
    <div className='administracao_container'>
        <div className="main_administracao">
            <Container>
                <div className="text_administracao">
                    <Link to="/" className='link_administracao'>Home</Link>/<Link to='/secretaria-de-administracao' className='link_administracao'>Secretaria de Administração</Link>

                    <h4>Secretaria de Administração</h4>

                    <p>Responsável pela formulação de diretrizes básicas para a política de organização, de modernização administrativa e de desenvolvimento dos recursos humanos, além de exercer outras atividades inerentes à administração.</p>
                    
                    <h4>Secretária Adriana Isolete de Souza</h4>
                    <div className="text_administracao__sec">
                        <img src="../img/other/adriana.png" alt="Foto da Adriana Isolete de Souza" />
                        <p>Adriana Isolete de Souza ocupou diversos cargos na administração pública de São José. Na Prefeitura Municipal, foi diretora administrativa operacional e diretora do Centro de Saúde Lisboa em 2009. Também foi coordenadora legislativa da Presidência da Câmara Municipal de São José de 2011 a 2013, diretora administrativa e chefe de Gabinete da Presidência de 2015 a 2018. Atuou também como chefe de Gabinete Parlamentar de 2019 a 2020.</p>
                    </div>

                    <h6>Secretário Adjunto Wallace Avanir de Souza</h6>

                    <p>Telefone:  <a href="https://api.whatsapp.com/send?phone=4833810000" target='_blank'>(48)3381-0000</a> E-mail: <a href="mailto:administracao@pmsj.sc.gov.br">administracao@pmsj.sc.gov.br</a>
                    <br /><br />
                    Endereço: Sede da Administração: Avenida Acioni Souza Filho (Beira-Mar de São José), n° 403, 3º andar, Praia Comprida – São José.</p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextAdministracao