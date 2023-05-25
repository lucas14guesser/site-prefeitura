import { NavDropdown } from 'react-bootstrap';

import '../../Styles/NavBar2.css'

const CartaServicoComponent = () => {

  return (
    <>
      <NavDropdown title="Carta Serviços">
        <NavDropdown.Item eventKey="1"><a href="#">Serviços Oferecidos PMSJ</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="2"><a href="#">Serviços Administração</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="3"><a href="#">Serviços Assistência Social</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="4"><a href="#">Serviços Comunicação</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="5"><a href="#">Serviços Cultura</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="6"><a href="#">Serviços Educação</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="7"><a href="#">Serviços Esportes</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="8"><a href="#">Serviços Governo</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="9"><a href="#">Serviços Infraestrutura</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="10"><a href="#">Serviços Meio Ambiente</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="11"><a href="#">Serviços Receita</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="12"><a href="#">Serviços Segurança - Transito - Defesa Civil e Procon</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="13"><a href="#">Serviços Saúde</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="14"><a href="#">Secretaria de Urbanismo e Serviços Públicos</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="15"><a href="#">Serviços Transparência</a></NavDropdown.Item>
      </NavDropdown>
    </>
  )
}
export default CartaServicoComponent