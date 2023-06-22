import React from 'react'

import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../Styles/NormasPatrimonio.css'

const NormasPatrimonio = () => {
  return (
    <div className='norm_pat_container'>
        <div className="main_norm_pat">
            <Container>
                <div className="text_norm_pat">
                    <Link to='/' className='link_norm_pat'>Home</Link>/<Link to='/portal-servidor' className='link_norm_pat'>Portal do Servidor</Link>/<Link to='/normas-do-patrimonio' className='link_norm_pat'>Normas do Patrimônio</Link>

                    <h4>Normas do Patrimônio</h4>

                    <p>
                        A Coordenadoria de Patrimônio tem como competência realizar procedimentos administrativos para efetuar o controle do uso, a conservação e a guarda de materiais pemanentes pelos agentes públicos designados como gestores patrimoniais lotados nas diversas unidades adminstrativas e em cada centro de custo deste Órgão Público Municipal.
                    </p>

                    <ul>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/NORMAS_DO_PATRIM%C3%94NIO.pdf?_ga=2.56496619.1518638583.1687451403-1318598864.1684797233&_gl=1*1yygwvo*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTg4NDQuMC4wLjA.">Instrução Normativa 01/2019 – DOM/SC 11/06/2019, edição nº 2848, publicação nº 2051934</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Formul%C3%A1rio_%28Modelo_Padr%C3%A3o%29_para_Termo_de_Doa%C3%A7%C3%A3o_de_Bens_M%C3%B3veis_Permanentes_com_Fim_Espec%C3%ADfico_-_APP%60s_e_outros_fins.docx?_ga=2.236330433.1518638583.1687451403-1318598864.1684797233&_gl=1*1a2smbs*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTg4NDQuMC4wLjA.">Formulário (Modelo Padrão) para Termo de Doação de Bens Móveis Permanentes com Fim Específico – APP`s e outros fins</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Formul%C3%A1rio_%28Modelo_Padr%C3%A3o%29_para_Termo_de_Doa%C3%A7%C3%A3o_de_Bens_M%C3%B3veis_Permanentes_sem_Fim_Espec%C3%ADfico.docx?_ga=2.1981937.1518638583.1687451403-1318598864.1684797233&_gl=1*1hvibbm*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTg4NDQuMC4wLjA.">Formulário (Modelo Padrão) para Termo de Doação de Bens Móveis Permanentes sem Fim Específico</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Formul%C3%A1rio_%28Modelo_Padr%C3%A3o%29_para_Transfer%C3%AAncia_de_Bens_M%C3%B3veis_Permanentes.docx?_ga=2.23018363.1518638583.1687451403-1318598864.1684797233&_gl=1*umqe2k*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTg4NDQuMC4wLjA.">Formulário (Modelo Padrão) para Transferência de Bens Móveis Permanentes</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Formul%C3%A1rio_%28Modelo_Padr%C3%A3o%29_paraTermo_de_Responsabilidade_Particular_de_Bens_M%C3%B3veis_Permanentes.odt?_ga=2.69082321.1518638583.1687451403-1318598864.1684797233&_gl=1*2vmcti*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTg4NDQuMC4wLjA.">Formulário (Modelo Padrão) paraTermo de Responsabilidade Particular de Bens Móveis Permanentes</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default NormasPatrimonio