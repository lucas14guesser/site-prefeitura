import React from 'react'

import TextPortalCidadao from '../TextClasses/TextPortalCidadao'

import { Link } from 'react-router-dom'

import '../Styles/PortalCidadao.css'

const PortalCidadao = () => {
  return (
    <div className='port_cid_container'>
        <div className="main_port_cid">
          <div>
            <Link to="/" className='link_cid'>Home</Link>/<Link to='/portal-cidadao' className='link_cid'>Portal do Cidadão</Link>
          </div>
            <TextPortalCidadao />
        </div>
    </div>
  )
}

export default PortalCidadao