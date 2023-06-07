import { NavDropdown, Nav } from 'react-bootstrap';

import '../../Styles/NavBar2.css'

const CartaServicoComponent = () => {

  return (
    <>
      <NavDropdown title="Carta Serviços">
        <Nav.Link href="#">Serviços Oferecidos PMSJ</Nav.Link>
        <Nav.Link href="#">Serviços Administração</Nav.Link>
        <Nav.Link href="#">Serviços Assistência Social</Nav.Link>
        <Nav.Link href="#">Serviços Comunicação</Nav.Link>
        <Nav.Link href="#">Serviços Cultura</Nav.Link>
        <Nav.Link href="#">Serviços Educação</Nav.Link>
        <Nav.Link href="#">Serviços Esportes</Nav.Link>
        <Nav.Link href="#">Serviços Governo</Nav.Link>
        <Nav.Link href="#">Serviços Infraestrutura</Nav.Link>
        <Nav.Link href="#">Serviços Meio Ambiente</Nav.Link>
        <Nav.Link href="#">Serviços Receita</Nav.Link>
        <Nav.Link href="#">Serviços Segurança - Transito - Defesa Civil e Procon</Nav.Link>
        <Nav.Link href="#">Serviços Saúde</Nav.Link>
        <Nav.Link href="#">Secretaria de Urbanismo e Serviços Públicos</Nav.Link>
        <Nav.Link href="#">Serviços Transparência</Nav.Link>
      </NavDropdown>
    </>
  )
}
export default CartaServicoComponent