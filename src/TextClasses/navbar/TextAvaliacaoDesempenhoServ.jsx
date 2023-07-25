import React from 'react'

import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../../Styles/navbar/PaginasNav.css'

const TextAvaliacaoDesempenhoServ = () => {
  return (
    <div className='pag-nav_container'>
        <div className="main_pag-nav">
            <Container>
                <div className="text_pag-nav">
                    <Link to='/' className='link_pag-nav'>Home</Link>/<Link to='/portal-servidor' className='link_pag-nav'>Portal do Servidor</Link>/<Link to='/avaliacao-de-desempenho-de-servidores' className='link_pag-nav'>Avaliação de Desempenho de Servidores</Link>

                    <h4>Avaliação de Desempenho de Servidores</h4>

                    <ul>
                        <p>Decreto:</p>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Decreto-3125.2014.pdf?_ga=2.258235466.1518638583.1687451403-1318598864.1684797233&_gl=1*1yxqnr*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTY2ODAuMC4wLjA.">Decreto 3125.2014</a>
                        </li>
                        <li>
                            <a href="http://www.saojose.sc.gov.br/images/uploads/geral/Decreto-3432.pdf?_ga=2.258235466.1518638583.1687451403-1318598864.1684797233&_gl=1*1yxqnr*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTY2ODAuMC4wLjA.">Decreto 3432</a>
                        </li>
                        ( Decreto N.º 3432 de 19 de novembro de 2014, que altera o Decreto o Decreto N.º 3125/2014 )
                    </ul>
                    <ul>
                        <p>Circular:</p>
                        <li>
                            <a href="https://www.saojose.sc.gov.br/images/uploads/geral/desempenho_anual_(2).pdf?_ga=2.27218429.1518638583.1687451403-1318598864.1684797233&_gl=1*ri5crx*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTY2ODAuMC4wLjA.">Circular Interna Gratificação de Desempenho</a>
                        </li>
                    </ul>
                    <ul>
                        <p>Formulários:</p>
                        <li>
                            <a href="http://www.saojose.sc.gov.br/images/uploads/geral/Anexos-de-avaliac%CC%A7a%CC%83o-de-desempenho-Comissa%CC%83o.pdf?_ga=2.59708653.1518638583.1687451403-1318598864.1684797233&_gl=1*1ljzjwj*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTY2ODAuMC4wLjA.">Anexos de avaliação de desempenho – Comissão</a>
                        </li>
                        <li>
                            <a href="http://www.saojose.sc.gov.br/images/uploads/geral/Anexos-de-avaliac%CC%A7a%CC%83o-de-desempenho-Autoavaliac%CC%A7a%CC%83o.pdf?_ga=2.59708653.1518638583.1687451403-1318598864.1684797233&_gl=1*1ljzjwj*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTY2ODAuMC4wLjA.">Anexos de avaliação de desempenho – Autoavaliação</a>
                        </li>
                        <li>
                            <a href="http://www.saojose.sc.gov.br/images/uploads/geral/Anexos-de-avaliac%CC%A7a%CC%83o-de-desempenho-Chefia.pdf?_ga=2.59708653.1518638583.1687451403-1318598864.1684797233&_gl=1*1ljzjwj*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTY2ODAuMC4wLjA.">Anexos de avaliação de desempenho – Chefia</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextAvaliacaoDesempenhoServ