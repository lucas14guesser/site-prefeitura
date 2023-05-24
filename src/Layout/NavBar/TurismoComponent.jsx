import { NavDropdown } from 'react-bootstrap';

import '../../Styles/NavBar2.css'

const TurismoComponent = () => {
  return (
    <>
        <NavDropdown title="Turismo" className='itens_nav_2'>
            <NavDropdown.Item eventKey="1">Iniciativas Turismo</NavDropdown.Item>
            <NavDropdown.Item eventKey="2">Pontos Turísticos</NavDropdown.Item>
            <NavDropdown.Item eventKey="3">Feira Freguesia</NavDropdown.Item>
        </NavDropdown>
    </>
  )
}

export default TurismoComponent