import React, { useState } from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';

const TextEmpreendedorComponent = () => {
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

  return (
    <NavDropdown
      title="Espaço do Empreendedor"
      id="dropdown-menu-empreendedor"
      show={showDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={redirectToEmpreendedor}
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

export default TextEmpreendedorComponent