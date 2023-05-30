import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/Prefeitos.css'

const TextPrefeitos = () => {
  return (
    <div className='pref_text'>
        <Link to="/">Home</Link>

        <h4>Relação de Prefeitos</h4>
    </div>
  )
}

export default TextPrefeitos