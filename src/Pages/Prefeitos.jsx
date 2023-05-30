import React from 'react'

import TablePrefeitos from '../TableClasses/TablePrefeitos'
import TextPrefeitos from '../TextClasses/TextPrefeitos'

const Prefeitos = () => {
  return (
    <div className='pref_container'>
        <div className='pref_main'>
            <TextPrefeitos />
            <TablePrefeitos />
        </div>
    </div>
  )
}

export default Prefeitos