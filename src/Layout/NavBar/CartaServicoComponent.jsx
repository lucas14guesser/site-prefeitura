import {  Nav } from 'react-bootstrap';

import '../../Styles/NavBar2.css'

const CartaServicoComponent = () => {

  return (
    <>
      <Nav.Item>
          <Nav.Link href='/servicos-pmsj' eventKey="link-2">Carta Serviços</Nav.Link>
      </Nav.Item>
    </>
  )
}
export default CartaServicoComponent