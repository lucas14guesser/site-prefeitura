import {Image , Nav, Navbar, Container} from 'react-bootstrap';

import SaoJoseComponent from './SaoJoseComponent';
import CidadaoComponent from './CidadaoComponent';
import EmpresaComponent from './EmpresaComponent';
import TurismoComponent from './TurismoComponent';
import CartaServicoComponent from './CartaServicoComponent';
import ServidorComponent from './ServidorComponent';
import TransparenciaComponent from './TransparenciaComponent';

import '../../Styles/NavBar2.css'

const NavBar2 = () => {
  return (
    <div>
        <Nav className='navbar_2'>     
            <a href="/">
                <Image className='logo_navbar' src="./img/logo-topo.png" rounded />
            </a>                        
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
  </div>
  )
}

export default NavBar2