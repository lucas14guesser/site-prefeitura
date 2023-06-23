import React from 'react'

import { IoLogoWhatsapp } from 'react-icons/io'

import { Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import '../Styles/PortalCidadao.css'

const TextPortalCidadao = () => {
  return (
    <div className='port_cid_container'>
        <div className="main_port_cid">
          <Container>
            <div className="text_port_cid">
              <Link to="/" className='link_cid'>Home</Link>/<Link to='/portal-cidadao' className='link_cid'>Portal do Cidadão</Link>

              <h4>Portal do Cidadão</h4>

              <p>
                Atendimento no prédio sede da Prefeitura, somente com agendamento que pode ser feito <a href="https://agendamento.saojose.sc.gov.br/?&_ga=2.70401811.203932701.1686368654-1318598864.1684797233&_gl=1*eblojp*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NjQzOTg5OC4yMy4xLjE2ODY0Mzk5NjYuMC4wLjA.#/login" target='_blank'>neste link</a>
                <br /><br />
                Informações do Centro de Atendimento ao Cidadão <a href="/centro-atendimento">neste link</a>
                <br /><br />
                Atendimento via WhatsApp: <a href="https://api.whatsapp.com/send/?phone=5548988141815&text&type=phone_number&app_absent=0" target='_blank'><IoLogoWhatsapp />(48) 98814-1815</a>
                <br /><br />
                <a href="https://saojose.atende.net/autoatendimento" target='_blank'>Acesse os serviços ao cidadão aqui</a>
              </p>
            </div>
          </Container>
        </div>
      </div>
  )
}

export default TextPortalCidadao