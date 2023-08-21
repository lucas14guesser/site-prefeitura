import React from 'react'

import { BsChatDots } from 'react-icons/bs'

import '../Styles/linkButtons/OuvidoriaLinkButton.css'
import { Link } from 'react-router-dom'



const OuvidoriaLinkButton = () => {
  return (
    <div className='type_button_ouv'>
        <Link to="/ouvidoria" className='button_ouv'><BsChatDots />Sistema Ouvidoria</Link>
    </div>
  )
}

export default OuvidoriaLinkButton