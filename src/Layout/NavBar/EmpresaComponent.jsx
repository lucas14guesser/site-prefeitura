import { NavDropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom'

import '../../Styles/NavBar2.css'

const EmpresaComponent = () => {
  return (
    <>
        <NavDropdown title="Empresa">
            <NavDropdown.Item eventKey="1"><a href="https://saojose.atende.net/autoatendimento/servicos/acesso-ao-sistema-fiscal-web-novo">Nota Fiscal Eletrônica</a></NavDropdown.Item>
            <NavDropdown.Item eventKey="2"><Link to="/docs-processos">Documentos para Processos</Link></NavDropdown.Item>
            <NavDropdown.Item eventKey="3"><a href="https://saojose.atende.net/autoatendimento/servicos/emissao-de-processo-digital">Abertura Processos</a></NavDropdown.Item>
            <NavDropdown.Item eventKey="4"><Link to="/licitacoes">Licitações</Link></NavDropdown.Item>
        </NavDropdown>
    </>
  )
}

export default EmpresaComponent