import {Container} from "react-bootstrap";

import "../../Styles/GridServicesSec.css";

const GridServicesSec = () => {
        
    return (
        <>
        <div className="background_grid_service_sec">
            <Container>
                <h1 className="title_grid_service_sec">
                    Outros
                </h1>
                <div className="main_service_grid_sec">
                    <a href="https://saojose.sc.gov.br/declaracao-de-acidente-de-transito-dat/" className="item_service_grid_sec">
                        <small>DAT Acidente de Trânsito</small>
                    </a>
                    <a href="https://saojose.sc.gov.br/cati/" className="item_service_grid_sec">
                        <small>Cati</small>
                    </a>
                    <a href="https://saojose.sc.gov.br/vacinacao-covid-19/" className="item_service_grid_sec">
                        <small>Vacinação</small>
                    </a>
                    <a href="https://saojose.sc.gov.br/cidadao-portal/" className="item_service_grid_sec">
                        <small>Serviço para o Cidadão</small>
                    </a>
                    <a href="https://saojose.sc.gov.br/centro-atendimento-cidadao-portal/" className="item_service_grid_sec">
                        <small>Receita Online</small>
                    </a>
                    <a href="https://saojose.sc.gov.br/espaco-do-empreendedor/" className="item_service_grid_sec">
                        <small>Espaço do Empreendedor</small>
                    </a>
                    <a href="https://saojosemaisempregos.santacatarinapelaeducacao.com.br/oportunidades" className="item_service_grid_sec">
                        <small>São José + Empregos</small>
                    </a>
                </div>
            </Container>
        </div>
        </>
    );
} 
export default GridServicesSec;
