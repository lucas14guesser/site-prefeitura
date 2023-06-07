import { NavDropdown, Nav } from 'react-bootstrap';

import '../../Styles/NavBar2.css'

const TurismoComponent = () => {
  return (
    <>
        <NavDropdown title="Turismo">
            <Nav.Link href="#">Iniciativas Turismo</Nav.Link>
            <Nav.Link href="#">Pontos Turísticos</Nav.Link>
            <Nav.Link href="#">Feira Freguesia</Nav.Link>
        </NavDropdown>
    </>
  )
}

export default TurismoComponent