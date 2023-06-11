import React from 'react'

import TextPortalCidadao from '../TextClasses/TextPortalCidadao'

import { Link } from 'react-router-dom'

import '../Styles/PortalCidadao.css'

const PortalCidadao = () => {
  return (
    <div className='port_cid_container'>
        <div className="main_port_cid">
            <Link to='/'>Home</Link>
            <TextPortalCidadao />
        </div>
    </div>
  )
}

export default PortalCidadao