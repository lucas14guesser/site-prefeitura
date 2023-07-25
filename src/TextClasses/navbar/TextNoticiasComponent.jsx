import React, { useState } from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';

const TextNoticiasComponent = () => {
    const [showDropdown, setShowDropdown] = useState(false);
      
    const handleMouseEnter = () => {
      setShowDropdown(true);
    };
  
    const handleMouseLeave = () => {
      setShowDropdown(false);
    };

    const redirectToNoticias = () => {
      window.location.href='/todas-as-noticias';
    }

    const redirectToExternalLink = (e, url) => {
        e.preventDefault()
        if (url.startsWith('http')) {
            window.open(url, '_blank')
        }
        else {
            window.location.href = url
        }
    }

  return (
    <NavDropdown
      title="Notícias"
      id="dropdown-menu-noticias"
      show={showDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={redirectToNoticias}
    >
      <Nav.Link href="/todas-as-noticias">Todas as Notícias</Nav.Link>
      <Nav.Link href='/construcao'>Iniciativas e Destaques</Nav.Link>
      <Nav.Link
        href='https://www.diariomunicipal.sc.gov.br/?r=site/portal&q=&id=&categoria=&dataInicial=&dataFinal=&excluiTermos=&codigoEntidade=251'
        target='_blank'
        onClick={(e) => 
        redirectToExternalLink(
            e,
            'https://www.diariomunicipal.sc.gov.br/?r=site/portal&q=&id=&categoria=&dataInicial=&dataFinal=&excluiTermos=&codigoEntidade=251'
        )}
    >
        Diário Oficial
    </Nav.Link>          
    </NavDropdown>
  )
}

export default TextNoticiasComponent