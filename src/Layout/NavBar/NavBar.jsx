import { Nav, Navbar } from 'react-bootstrap';

import SocialListNavBar from '../SocialList/SocialListNavBar';

import '../../Styles/NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar_main'>
      <Navbar>
        <Nav>
          <div className="navbar_intra">
            <a href="">Intranet</a>
            <a href="">Contatos</a>
            <a href="">Portal do Servidor</a>
            <a href="">Webmail</a>
            <a href="">Mapa de obras</a>
            <a href="">São José no ponto</a>
            <a href="">Somar SJ</a>
          </div>
          <SocialListNavBar />                   
        </Nav>  
      </Navbar> 
  </div>

  )
}
export default NavBar
