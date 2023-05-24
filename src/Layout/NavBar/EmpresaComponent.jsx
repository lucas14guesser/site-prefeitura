import { NavDropdown } from 'react-bootstrap';

import '../../Styles/NavBar2.css'

const EmpresaComponent = () => {
  return (
    <>
        <NavDropdown title="Empresa" className='itens_nav_2'>
            <NavDropdown.Item eventKey="1">Nota Fiscal Eletrônica</NavDropdown.Item>
            <NavDropdown.Item eventKey="2">Documentos para Processos</NavDropdown.Item>
            <NavDropdown.Item eventKey="3">Abertura Processos</NavDropdown.Item>
            <NavDropdown.Item eventKey="4">Licitações</NavDropdown.Item>
            <NavDropdown.Item eventKey="5">TFPU</NavDropdown.Item>
        </NavDropdown>
    </>
  )
}

export default EmpresaComponent