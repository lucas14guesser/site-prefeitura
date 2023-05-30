import React from 'react'

import TextFeriados from '../TextClasses/TextFeriados'
import TableFeriados from '../TableClasses/TableFeriados'

import '../Styles/Feriados.css'

const Feriados = () => {
  return (
    <div className='feriado_container'>
        <div className="main_feriado">
            <TextFeriados />
            <TableFeriados />
        </div>
    </div>
  )
}

export default Feriados