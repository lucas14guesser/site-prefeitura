import { NavDropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import '../../Styles/NavBar2.css'

const SaoJoseComponent = () => {
  return (
    <>
        <NavDropdown title="São José">
        <NavDropdown.Item eventKey="1"><Link to="/cidade">A Cidade</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="2"><Link to="/feriados">Feriados Municipais</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="3"><Link to="/prefeitos">Relação de Prefeitos</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="4"><Link to="/dados">São José em Dados</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="5"><Link to="/simbol">Símbolos do Municípios</Link></NavDropdown.Item>
        </NavDropdown>
    </>
  )
}
export default SaoJoseComponent
