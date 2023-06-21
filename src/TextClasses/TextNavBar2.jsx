import React from 'react'

import {Image , Nav} from 'react-bootstrap';

import SaoJoseComponent from '../Layout/NavBar/SaoJoseComponent';
import CidadaoComponent from '../Layout/NavBar/CidadaoComponent';
import EmpresaComponent from '../Layout/NavBar/EmpresaComponent';
import TurismoComponent from '../Layout/NavBar/TurismoComponent';
import CartaServicoComponent from '../Layout/NavBar/CartaServicoComponent';
import TransparenciaComponent from '../Layout/NavBar/TransparenciaComponent';

import '../Styles/NavBar2.css'

const TextNavBar2 = () => {
  return (
    <div>
        <Nav>     
            <a href="/" className='link_logo'>
                <Image className='logo_navbar' src="./img/index/logo-pmsj-3.png" rounded />
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

            {/*Transparência*/}
            <TransparenciaComponent />
        </Nav>  
  </div>
  )
}

export default TextNavBar2