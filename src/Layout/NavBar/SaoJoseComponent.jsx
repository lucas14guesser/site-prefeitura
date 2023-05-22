import { NavDropdown } from 'react-bootstrap';

import '../../Styles/NavBar.css'

const SaoJoseComponent = () => {
  return (
    <>
        <NavDropdown title="São José" className='itens_nav2'>
        <NavDropdown.Item eventKey="1">A Cidade</NavDropdown.Item>
        <NavDropdown.Item eventKey="2">Feriados Municipais</NavDropdown.Item>
        <NavDropdown.Item eventKey="3">Relação de Prefeitos</NavDropdown.Item>
        <NavDropdown.Item eventKey="4">São José em Dados</NavDropdown.Item>
        <NavDropdown.Item eventKey="5">Símbolos do Municípios</NavDropdown.Item>
        </NavDropdown>
    </>
  )
}

export default SaoJoseComponent
