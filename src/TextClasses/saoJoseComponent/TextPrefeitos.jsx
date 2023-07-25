import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import TablePrefeitos from '../../TableClasses/TablePrefeitos'

import '../../Styles/saoJoseComponent/saoJoseComponent.css'

const TextPrefeitos = () => {
  return (
    <div className='sao-jose-component_container'>
        <div className='main_sao-jose-component'>
          <Container>
            <div className='text_sao-jose-component'>
                <Link to="/" className='link_sao-jose-component'>Home</Link>/<Link to='/prefeitos' className='link_sao-jose-component'>Relação de Prefeitos</Link>

                <h4>Relação de Prefeitos</h4>
            </div>
            <TablePrefeitos />
          </Container>
        </div>
      </div>
  )
}

export default TextPrefeitos