import React from 'react'

import { Nav, Navbar } from 'react-bootstrap';

import SocialListNavBar from '../../Layout/SocialList/SocialListNavBar';

import '../../Styles/navbar/NavBar.css';

const TextNavBar = () => {
  return (
    <div className="navbar-main">
      <div class="navbar-intra">
        <Navbar>
          <Nav>
            <a href="http://intradis.pmsj.sc.gov.br/inicio">Intranet</a>
            <a href="/portal-servidor">Portal do Servidor</a>
            <a href="https://email.fecam.org.br/" target="_blank">Webmail</a>
            <a href="https://saojose.atende.net/autoatendimento" target="_blank">Autoatendimento</a>
          </Nav>
        </Navbar> 
      </div>
      <div className="social">
        <SocialListNavBar />
      </div>
    </div>
  )
}

export default TextNavBar