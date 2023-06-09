import React from 'react'

import { BsSearch } from 'react-icons/bs'

import '../Styles/TransparenciaLinkButton.css'

const TransparenciaLinkButton = () => {
  return (
    <div className='type_button_transp'>
        <a href="https://saojose.atende.net/transparencia/" className='button_transp' target='_blank'><BsSearch />Portal da Transparência</a>
    </div>
  )
}

export default TransparenciaLinkButton