import React from 'react'

import {Image , Nav} from 'react-bootstrap';

import SaoJoseComponent from '../Layout/NavBar/SaoJoseComponent';
import CidadaoComponent from '../Layout/NavBar/CidadaoComponent';
import EmpresaComponent from '../Layout/NavBar/EmpresaComponent';
import TransparenciaComponent from '../Layout/NavBar/TransparenciaComponent';
import EmpreendedorComponent from '../Layout/NavBar/EmpreendedorComponent';
import NoticiasComponent from '../Layout/NavBar/NoticiasComponent';
import SearchBar from '../Layout/NavBar/SearchBar';

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

            {/*Espaço do Empreendedor*/}
            <EmpreendedorComponent />

            {/*Notícias*/}
            <NoticiasComponent />

            {/*Transparência*/}
            <TransparenciaComponent />

            {/*Barra de Busca*/}
            <SearchBar />
        </Nav>  
  </div>
  )
}

export default TextNavBar2