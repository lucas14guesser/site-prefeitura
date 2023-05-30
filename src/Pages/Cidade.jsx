import React from 'react'

import '../Styles/Cidade.css'

import TextCidade from '../TextClasses/TextCidade'
import FrameCidade from '../FrameClasses/FrameCidade'

const Cidade = () => {
  return (
    <div className="city_container">
        <div className='main_city'>
            <TextCidade />
            <FrameCidade />
        </div>
    </div>

  )
}

export default Cidade