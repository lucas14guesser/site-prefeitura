import { NavDropdown, Nav } from 'react-bootstrap';

import '../../Styles/NavBar2.css'

const EmpresaComponent = () => {
  return (
    <>
        <NavDropdown title="Empresa">
            <Nav.Link href="https://saojose.atende.net/autoatendimento/servicos/acesso-ao-sistema-fiscal-web-novo" target='_blank'>Nota Fiscal Eletrônica</Nav.Link>
            <Nav.Link href="/docs-processos">Documentos para Processos</Nav.Link>
            <Nav.Link href="https://saojose.atende.net/autoatendimento/servicos/emissao-de-processo-digital" target='_blank'>Abertura Processos</Nav.Link>
            <Nav.Link href="/licitacoes">Licitações</Nav.Link>
        </NavDropdown>
    </>
  )
}

export default EmpresaComponent