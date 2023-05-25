import {Container} from "react-bootstrap";

import "../../Styles/GridService.css";

const GridServices = () => {
        
    return (
        <>
        <div className="background_grid_service">
            <Container>
                <h1 className="title_grid_service">
                    Serviços Atende.NET
                </h1>
                <div className="main_service_grid">
                    <a href="https://nfse-saojose.atende.net/autoatendimento/servicos/autenticidade-de-documentos-e-relatorios" className="item_service_grid">
                        <small>Autenticidade de Documentos e Relatórios</small>
                    </a>
                    <a href="https://saojose.atende.net/autoatendimento/servicos/ficha-cadastral-do-imovel" className="item_service_grid">
                        <small>Espelho Cadastral IPTU</small>
                    </a>
                    <a href="https://saojose.atende.net/autoatendimento/servicos/certidao-de-baixa-da-inscricao-municipal" className="item_service_grid">
                        <small>Certidão de Baixa de Empresa</small>
                    </a>
                    <a href="https://saojose.atende.net/autoatendimento/servicos/autenticidade-de-certidao-negativa-de-debitos" className="item_service_grid">
                        <small>Consulta e Autenticidade da Certidão Negativa de Débitos - CND</small>
                    </a>
                    <a href="https://saojose.atende.net/autoatendimento/servicos/comprovante-de-inscricao-municipal" className="item_service_grid">
                        <small>Espelho Econômico</small>
                    </a>
                    <a href="https://saojose.atende.net/autoatendimento/servicos/consulta-de-processo-digital" className="item_service_grid">
                        <small>Consulta de Processo</small>
                    </a>
                    <a href="https://saojose.atende.net/autoatendimento/servicos/consulta-a-ouvidoria" className="item_service_grid">
                        <small>Consulta a Ouvidoria</small>
                    </a>
                    <a href="https://saojose.atende.net/autoatendimento/servicos/certidao-negativa-de-debitos" className="item_service_grid">
                        <small>Emissão da Certidão Negativa de Débitos - CND</small>
                    </a>
                    <a href="https://saojose.atende.net/autoatendimento/servicos/guias-itbi" className="item_service_grid">
                        <small>Emissão de Guias ITBI</small>
                    </a>
                    <a href="https://saojose.atende.net/autoatendimento/servicos/guias-divida-ativa" className="item_service_grid">
                        <small>Emissão de Guias Dívida Ativa</small>
                    </a>
                </div>
            </Container>         
        </div>
        </>
    );
}
 
export default GridServices;