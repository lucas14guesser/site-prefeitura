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

  return (
    <NavDropdown
      title="Turismo"
      id="dropdown-menu-turismo"
      show={showDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Nav.Link href="#">Iniciativas Turismo</Nav.Link>
      <Nav.Link href="#">Pontos Turísticos</Nav.Link>
      <Nav.Link href="#">Feira Freguesia</Nav.Link>
    </NavDropdown>
  )
}

export default TextTurismoComponent