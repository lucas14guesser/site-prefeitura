import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/ServicosPMSJ.css'

const ServicosPMSJ = () => {
  return (
    <div className="servSj_container">
        <div className="main_servSj">
            <div className="text_servSj">
                <Link to="/">Home</Link>

                <h4>Direto no banco</h4>
            </div>
        </div>
    </div>
  )
}

export default ServicosPMSJ