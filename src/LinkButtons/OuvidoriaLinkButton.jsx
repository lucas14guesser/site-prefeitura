import React from 'react'

import { BsChatDots } from 'react-icons/bs'

import '../Styles/OuvidoriaLinkButton.css'



const OuvidoriaLinkButton = () => {
  return (
    <div className='type_button_ouv'>
        <a href="https://saojose.sc.gov.br/ouvidoria/" className='button_ouv' target='_blank'><BsChatDots />Sistema Ouvidoria</a>
    </div>
  )
}

export default OuvidoriaLinkButton