import { NavDropdown } from 'react-bootstrap';

import '../../Styles/NavBar2.css'

const CidadaoComponent = () => {
  return (
    <>
        {/*Cidadão*/}
        <NavDropdown title="Cidadão">
            <NavDropdown.Item eventKey="1"><a href="#">Serviços ao Cidadão</a></NavDropdown.Item>
            <NavDropdown.Item eventKey="2"><a href="#">Serviços Oferecidos Pmsj</a></NavDropdown.Item>
            <NavDropdown.Item eventKey="3"><a href="#">Pedido de Fechamento de Vias</a></NavDropdown.Item>
            <NavDropdown.Item eventKey="4"><a href="#">Publicações Legais</a></NavDropdown.Item>
            <NavDropdown.Item eventKey="5"><a href="#">IPTU</a></NavDropdown.Item>
            <NavDropdown.Item eventKey="6"><a href="#">Procon Municipal de São José</a></NavDropdown.Item>
        </NavDropdown>
    </>
  )
}

export default CidadaoComponent