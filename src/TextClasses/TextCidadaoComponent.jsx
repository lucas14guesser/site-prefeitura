import React, { useState } from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';

const TextCidadaoComponent = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
      setShowDropdown(true);
    };
  
    const handleMouseLeave = () => {
      setShowDropdown(false);
    };

    const redirectToCidadao = () => {
      window.location.href='/portal-cidadao'
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
      title="Cidadão"
      id="dropdown-menu-cidadao"
      show={showDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={redirectToCidadao}
    >
      <Nav.Link href="/portal-cidadao">Portal do Cidadão</Nav.Link>
      <Nav.Link
        href="https://saojose.atende.net/autoatendimento/servicos/emissao-de-processo-digital"
        target="_blank"
        onClick={(e) =>
        redirectToExternalLink(
          e,
          'https://saojose.atende.net/autoatendimento/servicos/emissao-de-processo-digital'
        )}
        >
          Serviços ao Cidadão        
      </Nav.Link>
      <Nav.Link href="/servicos-pmsj">Serviços Oferecidos Pmsj</Nav.Link>
      <Nav.Link
        href="https://saojose.atende.net/autoatendimento/servicos/e-pedido-de-fechamento-de-vias"
        target='_blank'
        onClick={(e) =>
        redirectToExternalLink(
          e,
          'https://saojose.atende.net/autoatendimento/servicos/e-pedido-de-fechamento-de-vias'
        )}
        >
          Pedido de Fechamento de Vias
      </Nav.Link>
      <Nav.Link href="/construcao">Publicações Legais</Nav.Link>
      <Nav.Link
        href="https://saojose.atende.net/autoatendimento/servicos/guias-de-iptu/detalhar/1"
        target="_blank"
        onClick={(e) => 
        redirectToExternalLink(
          e,
          'https://saojose.atende.net/autoatendimento/servicos/guias-de-iptu/detalhar/1'
        )}
        >IPTU
      </Nav.Link>
      <Nav.Link href="/procon">Procon Municipal de São José</Nav.Link>
    </NavDropdown>
  )
}

export default TextCidadaoComponent