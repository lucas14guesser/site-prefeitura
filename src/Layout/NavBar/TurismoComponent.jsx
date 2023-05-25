import { NavDropdown } from 'react-bootstrap';

import '../../Styles/NavBar2.css'

const TurismoComponent = () => {
  return (
    <>
        <NavDropdown title="Turismo">
            <NavDropdown.Item eventKey="1"><a href="#">Iniciativas Turismo</a></NavDropdown.Item>
            <NavDropdown.Item eventKey="2"><a href="#">Pontos Turísticos</a></NavDropdown.Item>
            <NavDropdown.Item eventKey="3"><a href="#">Feira Freguesia</a></NavDropdown.Item>
        </NavDropdown>
    </>
  )
}

export default TurismoComponent