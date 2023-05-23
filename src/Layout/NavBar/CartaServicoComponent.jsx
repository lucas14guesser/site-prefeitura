import { NavDropdown } from 'react-bootstrap';

import '../../Styles/NavBar.css'

const CartaServicoComponent = () => {
  return (
    <>
        <NavDropdown title="Carta Serviço" className='itens_nav2'>
            <NavDropdown.Item eventKey="1">Serviços Oferecidos PMSJ</NavDropdown.Item>
            <NavDropdown.Item eventKey="2">Serviços Administração</NavDropdown.Item>
            <NavDropdown.Item eventKey="3">Serviços Assistência Social</NavDropdown.Item>
            <NavDropdown.Item eventKey="4">Serviços Comunicação</NavDropdown.Item>
            <NavDropdown.Item eventKey="5">Serviços Cultura</NavDropdown.Item>
            <NavDropdown.Item eventKey="6">Serviços Educação</NavDropdown.Item>
            <NavDropdown.Item eventKey="7">Serviços Esportes</NavDropdown.Item>
            <NavDropdown.Item eventKey="8">Serviços Governo</NavDropdown.Item>
            <NavDropdown.Item eventKey="9">Serviços Infraestrutura</NavDropdown.Item>
            <NavDropdown.Item eventKey="10">Serviços Meio Ambiente</NavDropdown.Item>
            <NavDropdown.Item eventKey="11">Serviços Receita</NavDropdown.Item>
            <NavDropdown.Item eventKey="12">Serviços Segurança - Transito - Defesa Civil e Procon</NavDropdown.Item>
            <NavDropdown.Item eventKey="13">Serviços Saúde</NavDropdown.Item>
            <NavDropdown.Item eventKey="14">Secretaria de Urbanismo e Serviços Públicos</NavDropdown.Item>
            <NavDropdown.Item eventKey="15">Serviços Transparência</NavDropdown.Item>
        </NavDropdown>
    </>
  )
}

export default CartaServicoComponent