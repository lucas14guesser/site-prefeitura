import { NavDropdown, Nav } from 'react-bootstrap';

import '../../Styles/NavBar2.css'

const CidadaoComponent = () => {
  return (
    <>
        {/*Cidadão*/}
        <NavDropdown title="Cidadão">
            <Nav.Link href='/portal-cidadao'>Portal do Cidadão</Nav.Link>
            <Nav.Link href="https://saojose.atende.net/autoatendimento/servicos/emissao-de-processo-digital" target='_blank'>Serviços ao Cidadão</Nav.Link>
            <Nav.Link href="/servicos-pmsj">Serviços Oferecidos Pmsj</Nav.Link>
            <Nav.Link href='/vias'>Pedido de Fechamento de Vias</Nav.Link>
            <Nav.Link href="/publi-legais">Publicações Legais</Nav.Link>
            <Nav.Link href="https://saojose.atende.net/autoatendimento/servicos/guias-de-iptu/detalhar/1" target='_blank'>IPTU</Nav.Link>
            <Nav.Link href="/procon">Procon Municipal de São José</Nav.Link>
        </NavDropdown>
    </>
  )
}

export default CidadaoComponent