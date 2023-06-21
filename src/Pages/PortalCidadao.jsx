import React from 'react'

import TextPortalCidadao from '../TextClasses/TextPortalCidadao'

import { Link } from 'react-router-dom'

import '../Styles/PortalCidadao.css'
import { Container } from 'react-bootstrap'

const PortalCidadao = () => {
  return (
    <div className='port_cid_container'>
        <div className="main_port_cid">
          <Container>
            <div>
              <Link to="/" className='link_cid'>Home</Link>/<Link to='/portal-cidadao' className='link_cid'>Portal do Cidadão</Link>
            </div>
              <TextPortalCidadao />
          </Container>
        </div>
    </div>
  )
}

export default PortalCidadao