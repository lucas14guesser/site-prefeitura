import React from 'react'

import CarouselSlogan from "../Layout/Carousel/CarouselSlogan"
import GridServices from "../Layout/GridServicesMain/GridServices"
import GridServicesSec from "../Layout/GridServicesMain/GridServicesSec"
import News from "../Layout/News/News"
import NewsSec from "../Layout/News/NewsSec"
import Secretarias from '../Pages/Secretarias'
import Conselhos from '../Pages/conselhos/Conselhos'
import { Container } from 'react-bootstrap'

import '../Styles/Home.css'

const TextHome = () => {
  return (
    <div>
        <GridServices />
        <CarouselSlogan />
        <Container>
          <div className='flexbox-home'>
            <Secretarias />
            <Conselhos />
          </div>
        </Container>
        <GridServicesSec />
        <News/>
        <NewsSec />
  </div>
  )
}

export default TextHome