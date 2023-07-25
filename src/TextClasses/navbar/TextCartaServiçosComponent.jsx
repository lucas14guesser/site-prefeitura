import React, { useState } from 'react'

import { NavDropdown, Nav } from 'react-bootstrap';

const TextCartaServiçosComponent = () => {
    const [showDropdown, setShowDropdown] = useState(false);
      
    const handleMouseEnter = () => {
      setShowDropdown(true);
    };
  
    const handleMouseLeave = () => {
      setShowDropdown(false);
    };

    const redirectToCartaServico = () => {
      window.location.href='/carta-de-servicos'
    }
  return (
    <NavDropdown
      title="Carta Serviços"
      id="dropdown-menu-carta-servicos"
      show={showDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={redirectToCartaServico}
    >
      <Nav.Link href="/construcao">Serviços Oferecidos PMSJ</Nav.Link>
      <Nav.Link href="/construcao">Serviços Administração</Nav.Link>
      <Nav.Link href="/construcao">Serviços Assistência Social</Nav.Link>
      <Nav.Link href="/construcao">Serviços Comunicação</Nav.Link>
      <Nav.Link href="/construcao">Serviços Cultura</Nav.Link>
      <Nav.Link href="/construcao">Serviços Educação</Nav.Link>
      <Nav.Link href="/construcao">Serviços Esportes</Nav.Link>
      <Nav.Link href="/construcao">Serviços Governo</Nav.Link>
      <Nav.Link href="/construcao">Serviços Infraestrutura</Nav.Link>
      <Nav.Link href="/construcao">Serviços Meio Ambiente</Nav.Link>
      <Nav.Link href="/construcao">Serviços Receita</Nav.Link>
      <Nav.Link href="/construcao">Serviços Segurança - Trânsito - Defesa Civil - Procon</Nav.Link>
      <Nav.Link href="/construcao">Serviços Saúde</Nav.Link>
      <Nav.Link href="/construcao">Secretaria de Urbanismo e Serviços Públicos</Nav.Link>
      <Nav.Link href="/construcao">Serviços Transparência</Nav.Link>
    </NavDropdown>
  )
}

export default TextCartaServiçosComponent