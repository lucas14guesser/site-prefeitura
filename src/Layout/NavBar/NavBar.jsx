import {Image , Navbar, Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


import SaoJoseComponent from './SaoJoseComponent';
import CidadaoComponent from './CidadaoComponent';
import EmpresaComponent from './EmpresaComponent';


const NavBar = () => {
  return (
    <div className="navbar_main">
      <div className="d-flex justify-content-center">
          <Image className='logo_navbar m-4' src="./public/img/logo-topo.png" rounded />
      </div>
      <Navbar>
        <Container className='d-flex justify-content-center'>
            <Nav className='navbar'>
              
              {/*São José*/}
              <SaoJoseComponent />

              {/*Cidadão*/}
              <CidadaoComponent />

              {/*Empresa*/}
              <EmpresaComponent />

              {/*Turismo*/}
              <NavDropdown title="Turismo" id="nav-dropdown-turismo" className='font_navbar'>
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              {/*Carta Serviços*/}
              <NavDropdown title="Carta Serviços" id="nav-dropdown-carta-serv" className='font_navbar'>
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
              </NavDropdown>
          
              {/*Servidor*/}
              <NavDropdown title="Servidor" id="nav-dropdown-servidor" className='font_navbar'>
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              {/*Transparência*/}
              <NavDropdown title="Transparência" id="nav-dropdown-transparencia" className='font_navbar'>
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
              </NavDropdown>
          </Nav>  
        </Container>
      </Navbar>



  </div>

  )
}

export default NavBar


