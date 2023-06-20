import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/GridServiceLinkButton.css'


const GridServiceLinkButton = () => {
  return (
    <div className='type_button_grid'>
        <Link to='/todos-os-servicos' className='button_grid'>Todos os Serviços</Link>
    </div>
  )
}

export default GridServiceLinkButton