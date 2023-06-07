import { NavDropdown, Nav } from 'react-bootstrap';

import '../../Styles/NavBar2.css'

const SaoJoseComponent = () => {
  return (
    <>
        <NavDropdown title="São José">
          <Nav.Link href="/cidade">A Cidade</Nav.Link>
          <Nav.Link href="/feriados">Feriados Municipais</Nav.Link>
          <Nav.Link href="/prefeitos">Relação de Prefeitos</Nav.Link>
          <Nav.Link href="/dados">São José em Dados</Nav.Link>
          <Nav.Link href="/simbol">Símbolos do Municípios</Nav.Link>
        </NavDropdown>
    </>
  )
}
export default SaoJoseComponent
