import React, { useEffect, useState } from 'react'

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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }


  useEffect(() => {
    // Verifica a largura da janela e atualiza o estado do menuOpen
    const handleWindowResize = () => {
      setMenuOpen(window.innerWidth > 1366);
    };

    // Adiciona o listener para o evento de redimensionamento da janela
    window.addEventListener('resize', handleWindowResize);

    // Executa a função de redimensionamento inicialmente
    handleWindowResize();

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


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