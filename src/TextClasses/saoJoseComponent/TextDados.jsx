import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../Styles/saoJoseComponent/saoJoseComponent.css'

const TextDados = () => {
  return (
    <div className='sao-jose-component_container'>
        <div className="main_sao-jose-component">
          <Container>
            <div className="text_sao-jose-component">
              <div>
                <Link to="/" className='link_sao-jose-component'>Home</Link>/<Link to='/dados' className='link_sao-jose-component'>São José em Dados</Link>
              </div>

                <h4>São José em Dados</h4>

                <p>
                    São José possui uma extensão territorial de 113,6km² e está localizada nas coordenadas geográficas 27º36’55 de latitude e 48º37’39 de longitude. É banhada pelas águas das baías norte e sul de Santa Catarina e é seccionada pela BR101, rodovia de importância internacional.
                    <br /><br />
                    Segundo dados do IBGE (estimativa 2009), a população de São José é de 209.804 habitantes, o que destaca como o quarto mais populoso de Santa Catarina.
                    <br /><br />
                    A base de sustentação da economia josefense está fundamentada no comércio, indústria e atividade de prestação de serviços, mantendo ainda a pesca artesanal, maricultura, produção de cerâmica utilitária e agropecuária como atividades geradoras de renda. Possui mais de 1.200 indústrias, cerca de 6.300 estabelecimentos comerciais, 4.800 empresas prestadoras de serviços e 5.300 autônomos. São José apresenta ainda um enorme potencial turístico, histórico, cultural e arquitetônico, tendo como destaque o complexo histórico-arquitetônico do Centro Histórico com casarios de origem luso-brasileira dos séculos XVIII, XIX e XX e de construções isoladas associado a inúmeras belezas naturais-paisagísticas e aos centros gastronômicos.
                </p>
            </div>
          </Container>
        </div>
      </div>
  )
}

export default TextDados