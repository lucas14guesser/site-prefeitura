import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../Styles/conselhos/Conselho.css'

const TextContribuintes = () => {
  return (
    <div className='conselho-container'>
        <div className="main-conselho">
            <Container>
                <div className="main-conselho__text">
                    <Link to="/" className='main-conselho__text__link'>Home</Link>/<Link to='/conselho-municipal-dos-contribuintes' className='main-conselho__text__link'>Conselho Municipal dos Contribuintes</Link>

                    <h4>Conselho Municipal dos Contribuintes</h4>


                    <p>
                        Telefone: (48) 3381.0195
                        <br /><br />
                        E-mail: <a href="mailto:conselhodecontribuintes@gmail.com">conselhodecontribuintes@gmail.com</a>
                        <br /><br /><br />
                        Titulares
                        <br />
                        Presidente: Junior Spies
                        <br /><br />
                        Secretária Geral:  Graziela BesenPetryMariot
                        <br /><br /><br />
                        Conselheiro Representante da Prefeitura: Mário Antônio Vieira
                        <br /><br /> 
                        Conselheiro Representante da Prefeitura: Lânea Aparecida Madeira 
                        <br /><br /> 
                        Conselheiro Representante dos Contribuintes: Valdeci Sagaz
                        Indicação: CRC
                        <br /><br />
                        Conselheiro Representante dos Contribuintes:  Rodrigo Koerich da Silva
                        Indicação: AEMFLO
                        <br /><br /><br />
                        Suplentes
                        <br />
                        Conselheiro Representante da Prefeitura:  Miguel Armando Pereira Junior
                        <br /><br />
                        Conselheiro Representante da Prefeitura: Cristina Zart de Souza
                        <br /><br /> 
                        Conselheiro Representante dos Contribuintes: Thiago Buss Coelho
                        <br />
                        Indicação: AEMFLO
                        <br /><br /><br />
                        Conselheiro Representante dos Contribuintes:  Sérgio da Silva
                        <br />
                        Indicação: CRC
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextContribuintes