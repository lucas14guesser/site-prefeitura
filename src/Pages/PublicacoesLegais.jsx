import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/PublicacoesLegais.css'

const PublicacoesLegais = () => {
  return (
    <div className="publi_container">
        <div className="main_publi">
            <div className="text_publi">
                <Link to="/">Home</Link>

                <h4>Direto no banco</h4>
            </div>
        </div>
    </div>
  )
}

export default PublicacoesLegais