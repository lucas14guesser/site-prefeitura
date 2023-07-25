import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import FrameCidade from '../../FrameClasses/FrameCidade'

import '../../Styles/saoJoseComponent/saoJoseComponent.css'

const TextCidade = () => {
  return (
    <div className="sao-jose-component_container">
        <div className='main_sao-jose-component'>
          <Container>
            <div className='text_sao-jose-component'>
              <div>
                <Link to="/" className='link_sao-jose-component'>Home</Link>/<Link to='/cidade' className='link_sao-jose-component'>Cidade</Link>
              </div>

                <h4>A Cidade</h4>
                <p>
                    O município de São José, localizado na Grande Florianópolis,
                    é o quarto mais antigo de Santa Catarina e foi colonizado em
                    26 de outubro de 1750, por 182 casais açorianos, oriundos das
                    Ilhas do Pico, Terceira, São Jorge, Faial, Graciosa e
                    São Miguel. Em 1829, recebeu o primeiro núcleo de colonização
                    alemã do Estado.
                    <br /><br />
                    O rápido desenvolvimento, aliado ao aumento populacional
                    e poder econômico, fez com que, em 1º de março de 1833,
                    através da Resolução do Presidente da Província,
                    Feliciano Nunes Pires, São José passasse de freguesia
                    a vila (município) e, em 3 de maio de 1856, através da
                    lei Provincial nº 415, foi elevada à cidade.
                </p>
                <FrameCidade />
            </div>
          </Container>
        </div>
      </div>
  )
}

export default TextCidade