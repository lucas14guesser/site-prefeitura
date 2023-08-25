import React, { useState } from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';

const TextSaoJoseComponent = () => {
        const [showDropdown, setShowDropdown] = useState(false);
      
        const handleMouseEnter = () => {
          setShowDropdown(true);
        };
      
        const handleMouseLeave = () => {
          setShowDropdown(false);
        };

        const redirectToHomePage = () => {
          window.location.href='/';
        }

          // Função para detectar se é um dispositivo móvel
        const isMobile = window.innerWidth <= 1279; // Defina o valor apropriado

        const handleDropdownClick = () => {
          if (isMobile) {
            setShowDropdown(!showDropdown);
          } else {
            redirectToHomePage();
          }
        };
  return (
    <NavDropdown
      title="São José"
      id="dropdown-menu-sao-jose"
      show={showDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleDropdownClick}
    >
      <Nav.Link href="/cidade">A Cidade</Nav.Link>
      <Nav.Link href="/feriados-municipais">Feriados Municipais</Nav.Link>
      <Nav.Link href="/prefeitos">Relação de Prefeitos</Nav.Link>
      <Nav.Link href="/dados">São José em Dados</Nav.Link>
      <Nav.Link href="/simbol">Símbolos do Municípios</Nav.Link>
      <Nav.Link href="/turismo">Turismo</Nav.Link>
    </NavDropdown>
  )
}

export default TextSaoJoseComponent