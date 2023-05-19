import { Nav } from 'react-bootstrap';

import '../../Styles/NavBar.css'



const TransparenciaComponent = () => {
  return (
    <Nav.Item>
        <Nav.Link href='https://saojose.sc.gov.br/portal-da-transparencia/' eventKey="link-2" className='link_navbar'>Transparência</Nav.Link>
    </Nav.Item>
  )
}

export default TransparenciaComponent