import React, { useState } from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';

const TextTurismoComponent = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
      setShowDropdown(true);
    };
  
    const handleMouseLeave = () => {
      setShowDropdown(false);
    };

    const redirectToTurismo = () => {
      window.location.href='/construcao'
    }

  return (
    <NavDropdown
      title="Turismo"
      id="dropdown-menu-turismo"
      show={showDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={redirectToTurismo}
    >
      <Nav.Link href="/construcao">Iniciativas Turismo</Nav.Link>
      <Nav.Link href="/construcao">Pontos Turísticos</Nav.Link>
      <Nav.Link href="/construcao">Feira Freguesia</Nav.Link>
    </NavDropdown>
  )
}

export default TextTurismoComponent