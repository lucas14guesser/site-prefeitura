import React from 'react'

import { BsJournalBookmark } from 'react-icons/bs'

import '../Styles/DiOficialLinkButton.css'

const DiOficialLinkButton = () => {
  return (
    <div className='type_button_diario'>
        <a href="https://www.diariomunicipal.sc.gov.br/site/" className='button_diario' target='_blank'><BsJournalBookmark />Diário Oficial</a>
    </div>
  )
}

export default DiOficialLinkButton