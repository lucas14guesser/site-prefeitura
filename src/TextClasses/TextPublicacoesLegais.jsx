import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../Styles/PublicacoesLegais.css'

const TextPublicacoesLegais = () => {
  return (
    <div className="publi_container">
        <div className="main_publi">
          <Container>
            <div className="text_publi">
                <Link to="/" className='link_publi'>Home</Link>/<Link to='/publi-legais' className='link_publi'>Publicações Legais</Link>

                <h4>Direto no banco</h4>
              </div>
          </Container>
        </div>
    </div>
  )
}

export default TextPublicacoesLegais