import React from 'react'

import { Container } from 'react-bootstrap'

import '../Styles/Construcao.css'


const Construcao = () => {
  return (
    <Container>
        <div className="main_construcao">
            <h1 className='title_construcao'>Página em Construção</h1>
            <img src="../public/img/icons/construcao.png" alt="pagina em construcao" className='img_construcao' />
            <h4 className='subtitle_construcao'>Volte mais tarde</h4>
        </div>
    </Container>
  )
}

export default Construcao