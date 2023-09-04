import React from 'react'

import { Container } from 'react-bootstrap'

import CarouselSlogan from "../../Layout/Carousel/CarouselSlogan"
import GridServices from "../../Layout/GridServicesMain/GridServices"
import GridServicesSec from "../../Layout/GridServicesMain/GridServicesSec"
import News from "../../Pages/home/noticias/News"
import NewsSec from "../../Pages/home/noticias/NewsSec"

import Secretarias from '../../Pages/selectBox/Secretarias'
import Conselhos from '../../Pages/selectBox/Conselhos'
import LinksUteis from '../../Pages/selectBox/LinksUteis'
import ProgramaMetas from '../../Pages/home/programaMetas/ProgramaMetas'
import ProjetosAcoes from '../../Pages/selectBox/ProjetosAcoes'
import PublicacoesLegais from '../../Pages/home/publicacoesLegais/PublicacoesLegais'

import '../../Styles/home/Home.css'

const Home = () => {
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
        <PublicacoesLegais />
    </div>
  )
}
    
export default Home