import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../Styles/cidadaoComponent/cidadaoComponent.css'

const ServicosPMSJ = () => {
  return (
    <div className="cidadao-component_container">
        <div className="main_cidadao-component">
          <Container>
            <div className="text_cidadao-component">
              <Link to="/" className='link_cidadao-component'>Home</Link> / <Link to='/carta-de-servicos' className='link_cidadao-component'>Carta Serviços</Link>

              <h4>Carta Serviços</h4>

              <h6>Links:</h6>

              <ul>
              <li><a href="/construcao">Serviços Oferecidos PMSJ</a></li>
              <li><a href="/construcao">Serviços Administração</a></li>
              <li><a href="/construcao">Serviços Assistência</a></li>
              <li><a href="/construcao">Serviços Comunicação</a></li>
              <li><a href="/construcao">Serviços Cultura</a></li>
              <li><a href="/construcao">Serviços Educação</a></li>
              <li><a href="/construcao">Serviços Esporte</a></li>
              <li><a href="/construcao">Serviços Governo</a></li>
              <li><a href="/construcao">Serviços Infraestrutura</a></li>
              <li><a href="/construcao">Serviços Meio Ambiente</a></li>
              <li><a href="/construcao">Serviços Receita</a></li>
              <li><a href="/construcao">Serviços Segurança - Trânsito - Defesa Civil e Procon</a></li>
              <li><a href="/construcao">Serviços Saúde</a></li>
              <li><a href="/construcao">Serviços Urbanismo e Serviços Públicos</a></li>
              <li><a href="/construcao">Serviços Transparência</a></li>
              </ul>
            </div>
          </Container>
        </div>
      </div>
  )
}

export default ServicosPMSJ