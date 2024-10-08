import {Image , Nav, Navbar, Container} from 'react-bootstrap';

import SaoJoseComponent from './SaoJoseComponent';
import CidadaoComponent from './CidadaoComponent';
import EmpresaComponent from './EmpresaComponent';
import TurismoComponent from './TurismoComponent';
import CartaServicoComponent from './CartaServicoComponent';
import ServidorComponent from './ServidorComponent';
import TransparenciaComponent from './TransparenciaComponent';

import '../../Styles/NavBar.css'


const NavBar = () => {
  return (
    <div>
      <div className="logo_ident">
          <a href="/">
            <Image className='logo_navbar' src="./img/logo-topo.png" rounded />
          </a> 
      </div>
      <Navbar>
        <Container className='container'>
            <Nav className='navbar'>                            
              {/*São José*/}
              <SaoJoseComponent />

              {/*Cidadão*/}
              <CidadaoComponent />

              {/*Empresa*/}
              <EmpresaComponent />

              {/*Turismo*/}
              <TurismoComponent />

              {/*Carta Serviços*/}
              <CartaServicoComponent />
          
              {/*Servidor*/}
              <ServidorComponent />

              {/*Transparência*/}
              <TransparenciaComponent />
          </Nav>  
        </Container>
      </Navbar>
  </div>

  )
}
export default NavBar
