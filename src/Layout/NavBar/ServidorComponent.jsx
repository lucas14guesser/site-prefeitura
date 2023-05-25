import { NavDropdown } from 'react-bootstrap';

import '../../Styles/NavBar2.css'

const ServidorComponent = () => {
  return (
    <NavDropdown title="Servidor">
        <NavDropdown.Item eventKey="1"><a href="#">Webmail</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="2"><a href="#">Portal do Servidor</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="3"><a href="#">Autoatendimento</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="4"><a href="#">Intranet</a></NavDropdown.Item>
  </NavDropdown>
  )
}

export default ServidorComponent