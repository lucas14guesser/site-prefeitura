import React from 'react'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/programaMetas/ProgramaMetas.css'

const TextProgramaMetas = () => {
  return (
    <Container>
        <h1 className="title">
            Programa de Metas
        </h1>
        <div className="retrato">
            <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/02/Programa-de-Metas-Compilado.pdf" target='_blank'>
                <img src="../img/index/programa-metas.png" alt="Banner do programa de metas" className='retrato__image'/>
            </a>
        </div>
    </Container>
  )
}

export default TextProgramaMetas