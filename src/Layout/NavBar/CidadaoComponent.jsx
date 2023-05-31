import { NavDropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom'

import '../../Styles/NavBar2.css'

const CidadaoComponent = () => {
  return (
    <>
        {/*Cidadão*/}
        <NavDropdown title="Cidadão">
            <NavDropdown.Item eventKey="1"><a href="https://saojose.atende.net/autoatendimento/servicos/emissao-de-processo-digital">Serviços ao Cidadão</a></NavDropdown.Item>
            <NavDropdown.Item eventKey="2"><Link to="/servicos-pmsj">Serviços Oferecidos Pmsj</Link></NavDropdown.Item>
            <NavDropdown.Item eventKey="3"><Link to='/vias'>Pedido de Fechamento de Vias</Link></NavDropdown.Item>
            <NavDropdown.Item eventKey="4"><Link to="/publi-legais">Publicações Legais</Link></NavDropdown.Item>
            <NavDropdown.Item eventKey="5"><a href="https://saojose.atende.net/autoatendimento/servicos/guias-de-iptu/detalhar/1">IPTU</a></NavDropdown.Item>
            <NavDropdown.Item eventKey="6"><Link to="/procon">Procon Municipal de São José</Link></NavDropdown.Item>
        </NavDropdown>
    </>
  )
}

export default CidadaoComponent