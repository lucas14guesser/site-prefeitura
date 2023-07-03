import React, { useState } from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';

const TextEmpresaComponent = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
      setShowDropdown(true);
    };
  
    const handleMouseLeave = () => {
      setShowDropdown(false);
    };

    const redirectToEmpresa = () => {
      window.location.href='/docs-processos'
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
      title="Empresa"
      id="dropdown-menu-empresa"
      show={showDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={redirectToEmpresa}
    >
      <Nav.Link
        href="https://saojose.atende.net/autoatendimento/servicos/acesso-ao-sistema-fiscal-web-novo"
        target="_blank"
        onClick={(e) => 
        redirectToExternalLink(
          e,
          'https://saojose.atende.net/autoatendimento/servicos/acesso-ao-sistema-fiscal-web-novo'
        )}
        >
          Nota Fiscal Eletrônica
      </Nav.Link>
      <Nav.Link href="/docs-processos">Documentos para Processos</Nav.Link>
      <Nav.Link
        href="https://saojose.atende.net/autoatendimento/servicos/emissao-de-processo-digital"
        target="_blank"
        onClick={(e) =>
        redirectToExternalLink(
          e,
          'https://saojose.atende.net/autoatendimento/servicos/emissao-de-processo-digital'
        )}
        >
          Abertura Processos
      </Nav.Link>
      <Nav.Link href="/licitacoes">Licitações</Nav.Link>
    </NavDropdown>
  )
}

export default TextEmpresaComponent