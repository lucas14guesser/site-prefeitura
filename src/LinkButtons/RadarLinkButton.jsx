import React from 'react'

import { RiRadarLine } from 'react-icons/ri'

import '../Styles/linkButtons/RadarLinkButton.css'

const RadarLinkButton = () => {
  return (
    <div className='type_button_radar'>
        <a href="https://radar.tce.mt.gov.br/extensions/radar-da-transparencia-publica/panel.html" className='button_radar' target='_blank'><RiRadarLine />Radar de Transparência Pública</a>
    </div>
  )
}

export default RadarLinkButton