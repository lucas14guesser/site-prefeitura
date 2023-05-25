import { NavDropdown } from 'react-bootstrap';

import '../../Styles/NavBar2.css'

const SaoJoseComponent = () => {
  return (
    <>
        <NavDropdown title="São José">
        <NavDropdown.Item eventKey="1"><a href="#">A Cidade</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="2"><a href="#">Feriados Municipais</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="3"><a href="#">Relação de Prefeitos</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="4"><a href="#">São José em Dados</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="5"><a href="#">Símbolos do Municípios</a></NavDropdown.Item>
        </NavDropdown>
    </>
  )
}
export default SaoJoseComponent
