import React from 'react'

import CarouselSlogan from "../Layout/Carousel/CarouselSlogan"
import GridServices from "../Layout/GridServicesMain/GridServices"
import GridServicesSec from "../Layout/GridServicesMain/GridServicesSec"
import News from "../Layout/News/News"
import NewsSec from "../Layout/News/NewsSec"
import Secretarias from '../Pages/Secretarias'

import '../Styles/Home.css'
const TextHome = () => {
  return (
    <div>
        <GridServices />
        <CarouselSlogan />
        <GridServicesSec />
        <Secretarias />
        <News/>
        <NewsSec />
  </div>
  )
}

export default TextHome