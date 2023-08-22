import React, { useState } from 'react'

import {Image , Nav} from 'react-bootstrap';

import { RxHamburgerMenu } from 'react-icons/rx'

import SaoJoseComponent from '../../Layout/NavBar/SaoJoseComponent';
import CidadaoComponent from '../../Layout/NavBar/CidadaoComponent';
import EmpresaComponent from '../../Layout/NavBar/EmpresaComponent';
import TransparenciaComponent from '../../Layout/NavBar/TransparenciaComponent';
import EmpreendedorComponent from '../../Layout/NavBar/EmpreendedorComponent';
import CartaServiçosComponent from '../../Layout/NavBar/CartaServiçosComponent';
import NoticiasComponent from '../../Layout/NavBar/NoticiasComponent';
import SearchBar from '../../Layout/NavBar/SearchBar';

import '../../Styles/navbar/NavBar.css'


const TextNavBar2 = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
        <Nav className={menuOpen ? 'menu-open' : ''}>
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <RxHamburgerMenu size={50} />
          </div>                      
            {menuOpen && (
            <>
              <a href="/" className='link_logo'>
                <Image className='logo_navbar' src="./img/index/logo-pmsj-2.png" rounded />
              </a> 
              <SaoJoseComponent />
              <CidadaoComponent />
              <EmpresaComponent />
              <EmpreendedorComponent />
              <CartaServiçosComponent />
              <NoticiasComponent />
              <TransparenciaComponent />
              <SearchBar />
            </>
        )}
        </Nav>  
  </div>
  )

}


export default TextNavBar2