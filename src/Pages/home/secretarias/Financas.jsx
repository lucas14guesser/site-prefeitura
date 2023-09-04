import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/secretarias/Secretarias.css'

const Financas = () => {
  return (
    <div className='secretarias_container'>
        <div className="main_secretarias">
            <Container>
                <div className="text_secretarias">
                    <Link to="/" className='link_secretarias'>Home</Link>/<Link to='/secretaria-de-financas' className='link_secretarias'>Secretaria de Finanças</Link>

                    <h4>Secretaria de Finanças</h4>
                    
                    <h6>Objetivos</h6>

                    <p>
                        Planejar e executar a administração financeira, o registro de todos os atos e fatos da administração municipal, bem como o planejamento orçamentário e seu acompanhamento.
                    </p>
                    <div className="text_secretarias__sec">
                        <img src="../img/other/guido.png" alt="Foto de Guido Luiz Hinckel" />
                        <p>Graduado em Administração – Gestão Pública, formado em Contabilidade, funcionário efetivo de carreira, lotado na Secretária de Finanças do Município. Ocupou cargo de contador em várias gestões, Contador Geral no período de 2013 a 2019, bem como o cargo de Secretário Adjunto de Finanças no exercício de 2019 a 2020.</p>
                    </div>

                    <h6>Contato</h6>

                    <p>
                        Telefone: <a href="https://api.whatsapp.com/send?phone=4833810013" target='_blank'>(48)3381-0013</a>
                        <br /><br />
                        Endereço: Sede da Administração: Avenida Acioni Souza Filho (Beira-Mar de São José), n° 403, Térreo, Praia Comprida – São José.
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Financas