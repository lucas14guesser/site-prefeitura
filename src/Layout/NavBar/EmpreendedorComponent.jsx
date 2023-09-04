import React, { useState } from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';

const EmpreendedorComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
      
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const redirectToEmpreendedor = () => {
    window.location.href='/empreendedor';
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

  const isMobile = window.innerWidth <= 1279; // Defina o valor apropriado

  const handleDropdownClick = () => {
    if (isMobile) {
      setShowDropdown(!showDropdown);
    } else {
      redirectToEmpreendedor();
    }
  };

  return (
    <NavDropdown
      title="Empreendedor"
      id="dropdown-menu-empreendedor"
      show={showDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleDropdownClick}
    >
      <Nav.Link href="/sou-empresa">Sou Empresa</Nav.Link>
      <Nav.Link href="/sou-mei">Sou Mei</Nav.Link>
      <Nav.Link
        href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei"
        target="_blank"
        onClick={(e) =>
          redirectToExternalLink(
            e,
            'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei'
          )
        }
      >
        Quero ser Mei
      </Nav.Link>
      <Nav.Link
        href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/perguntas-frequentes"
        target='_blank'   
        onClick={(e) => 
        redirectToExternalLink(
            e,
            'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/perguntas-frequentes'
        )}   
        >    
            Dúvidas Mei
        </Nav.Link>
        
    </NavDropdown>
  )
}

export default EmpreendedorComponent