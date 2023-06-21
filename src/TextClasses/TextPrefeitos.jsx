import React from 'react'

import { Link } from 'react-router-dom'


import '../Styles/Prefeitos.css'
import { Container } from 'react-bootstrap'

const TextPrefeitos = () => {
  return (
    <Container>
      <div className='pref_text'>
        <div>
          <Link to="/" className='link_pref'>Home</Link>/<Link to='/prefeitos' className='link_pref'>Relação de Prefeitos</Link>
        </div>

          <h4>Relação de Prefeitos</h4>
      </div>
    </Container>
  )
}

export default TextPrefeitos