import React from 'react'

import { BsChatDots } from 'react-icons/bs'

import '../Styles/linkButtons/OuvidoriaAccessButton.css'

const OuvidoriaAccessButton = () => {
  return (
    <div className='type_button_ouv_acc'>
        <a href="https://saojose.atende.net/autoatendimento/servicos/ouvidoria-municipal" className='button_ouv_acc' target='_blank'><BsChatDots />Sistema Ouvidoria</a>
    </div>
  )
}

export default OuvidoriaAccessButton