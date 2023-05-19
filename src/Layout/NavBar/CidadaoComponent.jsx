import { NavDropdown } from 'react-bootstrap';

import '../../Styles/NavBar.css'

const CidadaoComponent = () => {
  return (
    <>
        {/*Cidadão*/}
        <NavDropdown title="Cidadão" className='navbar_item'>
            <NavDropdown.Item eventKey="1">Serviços ao Cidadão</NavDropdown.Item>
            <NavDropdown.Item eventKey="2">Serviços Oferecidos Pmsj</NavDropdown.Item>
            <NavDropdown.Item eventKey="3">Pedido de Fechamento de Vias</NavDropdown.Item>
            <NavDropdown.Item eventKey="4">Publicações Legais</NavDropdown.Item>
            <NavDropdown.Item eventKey="5">IPTU</NavDropdown.Item>
            <NavDropdown.Item eventKey="6">Procon Municipal de São José</NavDropdown.Item>
        </NavDropdown>
    </>
  )
}

export default CidadaoComponent