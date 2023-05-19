import { NavDropdown } from 'react-bootstrap';

import '../../Styles/NavBar.css'

const TurismoComponent = () => {
  return (
    <>
        <NavDropdown title="Turismo" className='navbar_item'>
            <NavDropdown.Item eventKey="1">Iniciativas Turismo</NavDropdown.Item>
            <NavDropdown.Item eventKey="2">Pontos Turísticos</NavDropdown.Item>
            <NavDropdown.Item eventKey="3">Feira Freguesia</NavDropdown.Item>
        </NavDropdown>
    </>
  )
}

export default TurismoComponent