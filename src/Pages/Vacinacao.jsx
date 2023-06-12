import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/Vacinacao.css'

const Vacinacao = () => {
    const studioLocker = 'https://lookerstudio.google.com/u/0/reporting/142c9183-168c-48bf-8cc1-01ac45f2ba75/page/1M'
  return (
    <div className='vacina_container'>
        <div className="main_vacina">
            <div className="text_vacina">
                <Link to="/">Home</Link>

                <h4>Vacinação</h4>

                <section>
                    <object data="../pdf/Avisos_Idade_Atual_Vacinação_PMSJ_2021.pdf"></object>
                </section>
                <h4>Documentos Necessários para a vacinação</h4>
                <p>
                    Os documentos são:
                    <ul>
                        <li>Documento de identificação</li>
                        <li>Carteira de vacinação (se possuir)</li>
                    </ul>
                </p>

                <p>
                    
                </p>

                <h6>Links:</h6>
                
                <div className="table_vacina_container">
                    <div className="table_vacina1">
                        <ul>
                            <li><a href="https://saojose.sc.gov.br/images/uploads/geral/90_mais.pdf">Download Lista de Imunizados acima de 90</a></li>
                            <li><a href="https://saojose.sc.gov.br/images/uploads/geral/85-89.pdf">Download Lista de Imunizados de 85 a 89 anos</a></li>
                            <li><a href="https://saojose.sc.gov.br/images/uploads/geral/80-84.pdf">Download Lista de Imunizados de 80 a 84 anos</a></li>
                            <li><a href="https://saojose.sc.gov.br/images/uploads/geral/76-79.pdf">Download Lista de Imunizados de 76 a 79 anos</a></li>
                        </ul>                    
                    </div>
                    <div className="table_vacina2">
                        <ul>
                            <li><a href="https://saojose.sc.gov.br/images/uploads/geral/SAUDE_geral.pdf">Download Lista de Imunizados Servidores da Saúde</a></li>
                            <li><a href="https://saojose.sc.gov.br/images/uploads/geral/PLANO_VACINACAO_COVID_SMS.pdf">Download Plano de Vacinação</a></li>
                            <li><a href="https://saojose.sc.gov.br/images/uploads/geral/Proposto_Protocolo_COVID_-_vers%C3%A3o_4.0.pdf">Protolo de Atenção à Saúde Novo Coronavírus (Covid 19)</a></li>
                        </ul>    
                    </div>
                    <div className="table_vacina3">
                        <ul>
                            <li><a href="https://www.saojose.sc.gov.br/images/uploads/publicacoes/PMSJ-protocolo-covid-19.pdf?_gl=1*170oekt*_ga*MTI5NjMzNTY3My4xNjg0NDM4Mjk3*_ga_Y6Q5YHNV0H*MTY4NjYwMTE2OS41My4xLjE2ODY2MDExNzUuMC4wLjA.&_ga=2.138540784.2135509081.1686584916-1296335673.1684438297">Protocolo Covid-19</a></li>
                        </ul>
                    </div>
                    <div className="table_vacina4">
                        <ul>
                            <li><a href="https://leismunicipais.com.br/a/sc/s/sao-jose/decreto/2021/1457/14567/decreto-n-14567-2021-dispoe-sobre-as-medidas-para-enfrentamento-da-emergencia-de-saude-publica-de-importancia-internacional-decorrente-da-infeccao-humana-pelo-novo-coronavirus-covid-19-e-da-outras-providencias">Medidas Restritivas - Descreto Nº 14567/2021.</a></li>
                        </ul>
                    </div>
                </div>

                <div className="frame_data">
                    <iframe src="https://lookerstudio.google.com/u/0/reporting/142c9183-168c-48bf-8cc1-01ac45f2ba75/page/1M" frameborder="0"></iframe>
                </div>

                <section>
                    <object data="../pdf/planoCovid.pdf"></object>                    
                </section>
            </div>
        </div>
    </div>
  )
}

export default Vacinacao