import React from 'react'

import { Link } from 'react-router-dom'


import '../Styles/Prefeitos.css'

const TextPrefeitos = () => {
  return (
    <div className='pref_text'>
      <div>
        <Link to="/" className='link_pref'>Home</Link>/<Link to='/prefeitos' className='link_pref'>Relação de Prefeitos</Link>
      </div>

        <h4>Relação de Prefeitos</h4>
    </div>
  )
}

export default TextPrefeitos