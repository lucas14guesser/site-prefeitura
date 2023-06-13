import { Nav } from 'react-bootstrap';

import '../../Styles/NavBar2.css'



const TransparenciaComponent = () => {
  return (
    <Nav.Item>
        <Nav.Link href='/portal-transparencia' eventKey="link-2" className='indent_font'>Transparência</Nav.Link>
    </Nav.Item>
  )
}

export default TransparenciaComponent