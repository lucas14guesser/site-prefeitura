import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import TablePrefeitos from '../TableClasses/TablePrefeitos'

import '../Styles/Prefeitos.css'

const TextPrefeitos = () => {
  return (
    <div className='pref_container'>
        <div className='pref_main'>
          <Container>
            <div className='pref_text'>
                <Link to="/" className='link_pref'>Home</Link>/<Link to='/prefeitos' className='link_pref'>Relação de Prefeitos</Link>

                <h4>Relação de Prefeitos</h4>
            </div>
            <TablePrefeitos />
          </Container>
        </div>
      </div>
  )
}

export default TextPrefeitos