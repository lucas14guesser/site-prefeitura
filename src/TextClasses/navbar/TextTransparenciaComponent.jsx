import React, { useState } from 'react'

import { Nav, NavDropdown } from 'react-bootstrap';

const TextTransparenciaComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const redirectToTransparencia = () => {
    window.location.href='/portal-transparencia'
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
    redirectToTransparencia();
  }
};

  return (
    <NavDropdown
    title="Transparência"
    id="dropdown-menu-transparencia"
    show={showDropdown}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={handleDropdownClick}
    >
      <Nav.Link href='/portal-transparencia'>Portal da Transparência</Nav.Link>
      <Nav.Link href='/ouvidoria'>Sistema Ouvidoria</Nav.Link>
      <Nav.Link
        href='https://www.diariomunicipal.sc.gov.br/site/'
        target='_blank'
        onClick={(e) =>
        redirectToExternalLink(
          e,
          'https://www.diariomunicipal.sc.gov.br/site/'
        )}
      >
        Diário Oficial</Nav.Link>
    </NavDropdown>
  )
}

export default TextTransparenciaComponent