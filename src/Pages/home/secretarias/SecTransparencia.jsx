import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/secretarias/Secretarias.css'

const SecTransparencia = () => {
  return (
    <div className='secretarias_container'>
        <div className="main_secretarias">
            <Container>
                <div className="text_secretarias">
                    <Link to="/" className='link_secretarias'>Home</Link>/<Link to='/secretaria-de-transparencia' className='link_secretarias'>Secretaria de Transparência</Link>

                    <h4>Secretaria de Transparência</h4>
                    
                    <h6>Objetivos</h6>

                    <p>
                    Realizar auditoria interna nas atividades de todas as secretarias municipais e dos demais órgãos da administração direta e indireta.
                    </p>

                    <h6>Secretária Alini da Silva Castro</h6>

                    <h6>Iriberto Antônio Moschetta Junior (Controlador-Geral)</h6>

                    <h6>Contato</h6>

                    <p>
                        Telefone: <a href="https://api.whatsapp.com/send?phone=4833810101" target='_blank'>(48)3381-0101</a>
                        <br /><br />
                        Endereço: Sede da Administração: Avenida Acioni Souza Filho (Beira-Mar de São José), n° 403, 4º andar, Praia Comprida – São José.
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default SecTransparencia