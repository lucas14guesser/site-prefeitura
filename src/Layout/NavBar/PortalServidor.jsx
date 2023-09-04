import React from 'react'

import { Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import '../../Styles/navbar/PaginasNav.css'

const PortalServidor = () => {
  return (
    <div className="pag-nav_container">
        <div className="main_pag-nav">
            <Container>
                <div className="text_pag-nav">
                    <Link to='/' className='link_pag-nav'>Home</Link>/<Link to='/portal-servidor' className='link_pag-nav'>Portal do Servidor</Link>

                    <h4>Portal do Servidor</h4>

                    <ul>
                        <li>
                            <a href="https://saojose.atende.net/cidadao" target='_blank'>Atendimento Geral</a>
                        </li>
                        <li>
                            <a href="/contra-cheque">Contra-Cheque</a>
                        </li>
                        <li>
                            <a href="/espelho-ponto" >Espelho Ponto</a>
                        </li>
                        <li>
                            <a href="/avaliacao-de-desempenho-de-servidores" >Avaliação de Desempenho de Servidores</a>
                        </li>
                        <li>
                            <a href="/consignados" >Consignados</a>
                        </li>
                        <li>
                            <a href="/normas-do-patrimonio" >Normas do Patrimônio</a>
                        </li>
                        <li>
                            <a href="/sjprev-2" >SJPREV</a>
                        </li>
                        <li>
                            <a href="/plano-de-saude" >Plano de Saúde</a>
                        </li>
                        <li>
                            <a href="/plano-de-cargos" >Plano de Cargos</a>
                        </li>
                        <li>
                            <a href="https://Intradis.pmsj.sc.gov.br/inicio" >Intranet</a>
                        </li>
                    </ul>

                    <h4>Importante!</h4>

                    <p>
                        Comunicado aos servidores da Prefeitura Municipal de São José
                        <br /><br />
                        Com a implantação do programa do e-social na Administração Pública é imprescindível o servidor consultar os seus dados cadastrais no link: <a href="http://consultacadastral.inss.gov.br/Esocial/pages/index.xhtml">http://consultacadastral.inss.gov.br/Esocial/pages/index.xhtml</a>
                        <br /><br />
                        Havendo divergências nos seus dados é obrigatório regularizar, sendo estas informações de cunho pessoal e responsabilidade do servidor.
                        <br /><br />
                        Daremos o suporte e orientação para a regularização, mas a efetiva correção dos seus dados somente ocorrerá com a presença do servidor no órgão indicado no relatório gerado no link acima.
                        <br /><br />
                        Contamos com a colaboração para a regularização até o dia 31/05/2022, evitando transtornos.
                    </p>

                    <h4>Direção RH</h4>
                    
                    <h5>Secretária Adriana Isolete de Souza</h5>
                    <p>Secretária de Administração</p>

                    <h5>Heriberto Alzerino Flores</h5>
                    <p>Diretor de Diretoria – DRH</p>

                    <p>Contato Telefone: 48 3381 0000 E-mail: administracao@pmsj.sc.gov.b</p>

                    <h5 className='text-uppercase'>Legislação</h5>
                    <div className="boxes_pag-nav">
                        <a href="/legislacao">
                            <img src="../img/icons/legislacao.png" alt="" />
                        </a>
                    </div>
                    <h5 className='text-uppercase'>Plano de Saúde</h5>
                    <div className="boxes_pag-nav">
                        <a href="/plano-de-saude">
                            <img src="../img/icons/planosaude1.png" alt="" />
                        </a>
                    </div>
                    <h5 className='text-uppercase'>Feriados e Pontos Facultativos</h5>
                    <div className="boxes_pag-nav">
                        <a href="/feriados-municipais">
                            <img src="../img/icons/feriadospontos.png" alt="" />
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default PortalServidor