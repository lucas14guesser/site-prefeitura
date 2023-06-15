import {Container} from "react-bootstrap";

import "../../Styles/GridServicesSec.css";

const GridServicesSec = () => {
        
    return (
        <>
        <div className="background_grid_service_sec">
            <Container>
                <h1 className="title_grid_service_sec">
                    Mais serviços
                </h1>
                <div className="main_service_grid_sec">
                    <a href="/dat" className="item_service_grid_sec">
                        <img src="../img/icons/dat.png"/>
                        <small>DAT – Acidente de Trânsito</small>
                    </a>
                    <a href="/cati" className="item_service_grid_sec">
                        <img src="../img/icons/cati.png"/>
                        <small>Cati</small>
                    </a>                  
                    {/*<a href="/vacinacao" className="item_service_grid_sec">
                        <img src="../img/icons/vacina.png"/>
                        <small>Vacinação</small>
                    </a>*/}
                    <a href="/portal-cidadao" className="item_service_grid_sec">
                        <img src="../img/icons/cidadao.png"/>
                        <small>Serviço para o Cidadão</small>
                    </a>
                    <a href="/centro-atendimento" className="item_service_grid_sec">
                        <img src="../img/icons/receita.png"/>
                        <small>Receita <br />Online</small>
                    </a>
                    <a href="/empreendedor" className="item_service_grid_sec">
                        <img src="../img/icons/empreendedor.png"/>
                        <small>Espaço do Empreendedor</small>
                    </a>
                    <a href="https://saojosemaisempregos.santacatarinapelaeducacao.com.br/oportunidades" className="item_service_grid_sec" target="_blank">
                        <img src="../img/icons/emprego.png"/>
                        <small>São José + Empregos</small>
                    </a>
                </div>
            </Container>
        </div>
        </>
    );
} 
export default GridServicesSec;
