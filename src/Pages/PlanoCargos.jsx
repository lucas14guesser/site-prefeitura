import React from 'react'

import { Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import '../Styles/PlanoCargos.css'

const PlanoCargos = () => {
  return (
    <div className="pl_carg_container">
        <div className="main_pl_carg">
            <Container>
                <div className="text_pl_carg">
                    <Link to='/' className='link_pl_carg'>Home</Link>/<Link to='/portal-servidor' className='link_pl_carg'>Portal do Servidor</Link>/<Link to='/plano-de-cargos' className='link_pl_carg'>Plano de Cargos</Link>

                    <h4>Plano de Cargos</h4>

                    <ul>
                        <p>Geral:</p>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Lei-Complementar-n-053-2011.pdf?_ga=2.60773613.1518638583.1687451403-1318598864.1684797233&_gl=1*e0pxqo*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTk4ODcuMC4wLjA." target='_blank'>Lei Complementar nº 053-2011</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Anexo-I-LC-n-053-2011.pdf?_ga=2.265777231.1518638583.1687451403-1318598864.1684797233&_gl=1*18239fi*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTk4ODcuMC4wLjA." target='_blank'>Anexo I – LC nº 053-2011</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Anexos-I-A-I-B-I-C-I-D-II-III-IV-V-VII-LC-n-053-2011.pdf?_ga=2.265777231.1518638583.1687451403-1318598864.1684797233&_gl=1*18239fi*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTk4ODcuMC4wLjA." target='_blank'>Anexos I -A, I-B, I-C, I-D, II, III, IV, V, VII – LC nº 053-2011</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Anexo-V-LC-n-053-2011.pdf?_ga=2.30751615.1518638583.1687451403-1318598864.1684797233&_gl=1*1xmopt0*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTk4ODcuMC4wLjA." target='_blank'>Anexo V – LC nº 053-2011</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Anexo-VI-Manual-de-Ocupacoes-LC-n-053-2011.pdf?_ga=2.30751615.1518638583.1687451403-1318598864.1684797233&_gl=1*1xmopt0*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTk4ODcuMC4wLjA." target='_blank'>Anexo VI – Manual de Ocupações – LC nº 053-2011</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Anexo-VI-A-Manual-Ocupacoes-Quadro-Suplementar-LC-n-053-2011.pdf?_ga=2.30751615.1518638583.1687451403-1318598864.1684797233&_gl=1*1xmopt0*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTk4ODcuMC4wLjA." target='_blank'>Anexo VI-A – Manual Ocupações – Quadro Suplementar – LC nº 053-2011</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/ANEXO-VIII-LC-n-53-2011.pdf?_ga=2.59596013.1518638583.1687451403-1318598864.1684797233&_gl=1*12b90oh*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTk4ODcuMC4wLjA." target='_blank'>Anexo VIII – LC nº 53-2011</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Anexo-IX-LC-n-053-2011.pdf?_ga=2.59596013.1518638583.1687451403-1318598864.1684797233&_gl=1*12b90oh*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTk4ODcuMC4wLjA." target='_blank'>Anexo IX – LC nº 053-2011</a>
                        </li>
                        <li>
                            <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/08/QUADRO-SALARIAL-SERVIDORES-EXECUTIVO-ATUALIZADO-2022.pdf" target='_blank'>Quadro salarial servidores executivo 2022</a>
                        </li>
                    </ul>
                    <ul>
                        <p>Saúde:</p>

                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Lei-Complementar-n-054-2011.pdf?_ga=2.22893819.1518638583.1687451403-1318598864.1684797233&_gl=1*1w40puu*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTk4ODcuMC4wLjA.">Lei Complementar nº 054-2011</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Anexos-Saude-Anexo-I-LC-n-54-2011.pdf?_ga=2.22893819.1518638583.1687451403-1318598864.1684797233&_gl=1*1w40puu*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTk4ODcuMC4wLjA.">Anexos Saúde Anexo I – LC nº 54-2011</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Anexo-I-A-LC-n-054-2011.pdf?_ga=2.22893819.1518638583.1687451403-1318598864.1684797233&_gl=1*1w40puu*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTk4ODcuMC4wLjA.">Anexo I-A – LC nº 054-2011</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Anexo-II-Manual-de-Ocupacoes-LC-054-2011.pdf?_ga=2.30423295.1518638583.1687451403-1318598864.1684797233&_gl=1*14awcak*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTk4ODcuMC4wLjA.">Anexo II – Manual de Ocupações – LC 054-2011</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Anexo-II-A-Manual-de-Ocupacoes-Quadro-Suplementar-LC-n-54-2011.pdf?_ga=2.30423295.1518638583.1687451403-1318598864.1684797233&_gl=1*14awcak*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTk4ODcuMC4wLjA.">Anexo II-A – Manual de Ocupações – Quadro Suplementar – LC nº 54-2011</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Anexo-III-LC-n-054-2011.pdf?_ga=2.30423295.1518638583.1687451403-1318598864.1684797233&_gl=1*14awcak*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTk4ODcuMC4wLjA.">Anexo III – LC nº 054-2011</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/ANEXO-IV-LC-n-054-2011.pdf?_ga=2.30423295.1518638583.1687451403-1318598864.1684797233&_gl=1*14awcak*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTk4ODcuMC4wLjA.">Anexo IV – LC nº 054-2011</a>
                        </li>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Anexo-V-LC-n-054-2011.pdf?_ga=2.39145699.1518638583.1687451403-1318598864.1684797233&_gl=1*gxvec2*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTk4ODcuMC4wLjA.">Anexo V – LC nº 054-2011</a>
                        </li>
                        <li>
                            <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/07/QUADRO-SALARIAL-SERVIDORES-DA-SAUDE-2022.pdf">Quadro salarial servidores da saúde 2022</a>
                        </li>
                    </ul>
                    <ul>
                        <p>Magistério:</p>
                        <li>
                            <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/07/Lei-Ordinaria-no-4422-2006.pdf">Lei Ordinária nº 4422-2006</a>
                        </li>
                        <li>
                            <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/07/FaixaSalarial.pdf">Faixa Salarial</a>
                        </li>
                    </ul>
                    <ul>
                        <p>Estatutos:</p>
                        <li>
                            <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/07/Estatuto-dos-Servidores-de-Sao-Jose-Lei-2248-atualizacao-setembro.2012.pdf">Estatuto dos Servidores de São José – Lei 2248 – atualização setembro 2012</a>
                        </li>
                        <li>
                            <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/07/Estatuto-do-Magisterio-de-Sao-Jose-Lei-2761-.pdf">Estatuto do Magistério de São José – Lei 2761</a>
                        </li>
                    </ul>
                </div>
                </Container>
        </div>
    </div>
  )
}

export default PlanoCargos