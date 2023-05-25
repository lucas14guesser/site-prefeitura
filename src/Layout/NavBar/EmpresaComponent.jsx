import { NavDropdown } from 'react-bootstrap';

import '../../Styles/NavBar2.css'

const EmpresaComponent = () => {
  return (
    <>
        <NavDropdown title="Empresa">
            <NavDropdown.Item eventKey="1"><a href="#">Nota Fiscal Eletrônica</a></NavDropdown.Item>
            <NavDropdown.Item eventKey="2"><a href="#">Documentos para Processos</a></NavDropdown.Item>
            <NavDropdown.Item eventKey="3"><a href="#">Abertura Processos</a></NavDropdown.Item>
            <NavDropdown.Item eventKey="4"><a href="#">Licitações</a></NavDropdown.Item>
            <NavDropdown.Item eventKey="5"><a href="#">TFPU</a></NavDropdown.Item>
        </NavDropdown>
    </>
  )
}

export default EmpresaComponent