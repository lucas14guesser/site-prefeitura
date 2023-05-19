import { NavDropdown } from 'react-bootstrap';

import '../../Styles/NavBar.css'

const ServidorComponent = () => {
  return (
    <NavDropdown title="Servidor" className='navbar_item'>
        <NavDropdown.Item eventKey="1">Webmail</NavDropdown.Item>
        <NavDropdown.Item eventKey="2">Portal do Servidor</NavDropdown.Item>
        <NavDropdown.Item eventKey="3">Autoatendimento</NavDropdown.Item>
        <NavDropdown.Item eventKey="4">Intranet</NavDropdown.Item>
  </NavDropdown>
  )
}

export default ServidorComponent