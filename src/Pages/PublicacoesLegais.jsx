import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/PublicacoesLegais.css'

const PublicacoesLegais = () => {
  return (
    <div className="publi_container">
        <div className="main_publi">
            <div className="text_publi">
              <div>
                <Link to="/" className='link_publi'>Home</Link>/<Link to='/publi-legais' className='link_publi'>Publicações Legais</Link>
              </div>

                <h4>Direto no banco</h4>
            </div>
        </div>
    </div>
  )
}

export default PublicacoesLegais