import React, { useState } from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';

const EmpresaComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <NavDropdown
      title="Empresa"
      id="dropdown-menu-empresa"
      show={showDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Nav.Link href="https://saojose.atende.net/autoatendimento/servicos/acesso-ao-sistema-fiscal-web-novo" target="_blank">Nota Fiscal Eletrônica</Nav.Link>
      <Nav.Link href="/docs-processos">Documentos para Processos</Nav.Link>
      <Nav.Link href="https://saojose.atende.net/autoatendimento/servicos/emissao-de-processo-digital" target="_blank">Abertura Processos</Nav.Link>
      <Nav.Link href="/licitacoes">Licitações</Nav.Link>
    </NavDropdown>
  );
};

export default EmpresaComponent;
