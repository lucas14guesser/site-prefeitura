import { Nav, Navbar } from 'react-bootstrap';

import SocialListNavBar from '../SocialList/SocialListNavBar';

import '../../Styles/NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar_main'>
      <Navbar>
        <Nav>
          <a href="">Intranet</a>
          <a href="">Portal do Servidor</a>
          <a href="https://email.fecam.org.br/" target='_blank'>Webmail</a>
          <a href="https://saojose.atende.net/autoatendimento" target='_blank'>Autoatendimento</a>
        </Nav> 
      </Navbar>
      <SocialListNavBar />   
  </div>
  )
}
export default NavBar
