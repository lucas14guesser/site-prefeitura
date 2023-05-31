import { NavDropdown } from 'react-bootstrap';

import '../../Styles/NavBar2.css'

const ServidorComponent = () => {
  return (
    <NavDropdown title="Servidor">
        <NavDropdown.Item eventKey="2"><a href="#">Portal do Servidor</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="1"><a href="https://email.fecam.org.br/">Webmail</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="3"><a href="https://saojose.atende.net/autoatendimento">Autoatendimento</a></NavDropdown.Item>
  </NavDropdown>
  )
}

export default ServidorComponent