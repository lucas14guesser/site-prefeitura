import React from 'react'

import CarouselSlogan from "../Layout/Carousel/CarouselSlogan"
import GridServices from "../Layout/GridServicesMain/GridServices"
import GridServicesSec from "../Layout/GridServicesMain/GridServicesSec"
import News from "../Layout/News/News"
import NewsSec from "../Layout/News/NewsSec"
import Secretarias from '../Pages/Secretarias'
import Conselhos from '../Pages/conselhos/Conselhos'
import { Container } from 'react-bootstrap'
import LinksUteis from '../Pages/linksUteis/LinksUteis'
import ProgramaMetas from '../Pages/home/ProgramaMetas'

import '../Styles/Home.css'
import ProjetosAcoes from '../Pages/projetosAcoes/ProjetosAcoes'

const TextHome = () => {
  return (
    <div>
        <GridServices />
        <CarouselSlogan />
        <Container>
          <div className='flexbox-home'>
            <Secretarias />
            <Conselhos />
            <LinksUteis />
            <ProjetosAcoes />
          </div>
        </Container>
        <GridServicesSec />
        <ProgramaMetas />
        <News/>
        <NewsSec />
  </div>
  )
}

export default TextHome