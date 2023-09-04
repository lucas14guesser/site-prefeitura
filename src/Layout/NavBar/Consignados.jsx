import React from 'react'

import { Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import '../../Styles/navbar/PaginasNav.css'

const Consignados = () => {
  return (
    <div className="pag-nav_container">
        <div className="main_pag-nav">
            <Container>
                <div className="text_pag-nav">
                    <Link to='/' className='link_pag-nav'>Home</Link>/<Link to='/portal-servidor' className='link_pag-nav'>Portal do Servidor</Link>/<Link to='/consignados' className='link_pag-nav'>Consignados</Link>

                    <h4>Consignados</h4>

                    <h5 className='text-uppercase'>Comunicado</h5>

                    <p>
                        Senhores servidores,
                        <br /><br />
                        Comunicamos que o gerenciamento das consignações na folha de pagamento, a partir desta data, será realizado pela empresa ConsigLog.
                        <br /><br />
                        A Prefeitura e a nova empresa, ConsigLog, já estão trabalhando para realizar as operações de consignado.
                        <br /><br />
                        Para acessar o novo sistema, <a href="https://saec.consiglog.com.br/">clique aqui</a>
                        <br /><br />
                        Servidores aposentados/pensionistas/ativos da São José Previdência, <a href="https://saec.consiglog.com.br/">clique neste link.</a>
                        <br /><br />
                        Dúvidas, ligar na Diretoria de Recursos Humanos, no telefone:  3381-0000 – Ramal 0440
                        <br /><br />
                        Atenciosamente,
                        <br /><br />
                        Secretária de Administração
                    </p>
                    <h5 className='text-uppercase'>Instruções</h5>
                    
                    <p>
                        Criando o primeiro acesso
                        <br />
                        Para acessar o sistema o servidor deverá digitar o Login (CPF) e mátricula, e cadastras uma senha de uso pessoal e intransferível no órgão em que esteja lotado.
                    </p>

                    <div className="boxes_pag-nav">
                        <img src="../img/icons/linkConsig1.png" alt="" />
                    </div>
                    
                    <div className="boxes_pag-nav">
                        <img src="../img/icons/linkConsig2.png" alt="" />
                    </div>

                    <p>
                        Após digitar as informações acima o sistema irá apresentar a tela abaixo para criar o seu primeiro acesso ao portal
                        <br />
                        Após a criação da senha poderá acessar o portal do servidor com a senha criada
                    </p>

                    <div className="boxes_pag-nav">
                        <img src="../img/icons/linkConsig3.png" alt="" />
                    </div>

                    <h5>Cuidados no cadastramento da senha:</h5>

                    <p>
                        É imprescindível que a senha seja elaborada de acordo com critérios determinados pelo sistema ou seja:
                    </p>
                    <ul>
                        <li>Tamanho mínimo da senha 8 caracteres</li>
                        <li>A senha deve conter no mínimo um caractere alfabético (A-Z)</li>
                        <li>A senha deve conter no mínimo um caractere numérico (0-9)</li>
                        <li>A senha deve conter no mínimo um caractere especial</li>
                        <li>Senhas facilmente dedutíveis com caracteres repetidos por exemplo 111111 0 não serão aceitas para concessão de acesso ao sistema</li>
                        <li>Evite senhas vinculadas a data de nascimento ou CPF.  A boa qualidade de sua senha é condição indispensável para a segurança do seu acesso</li>
                        <li>Evite ainda o registro de senha que esteja relacionado com os dados de usuários: nome, data de nascimento etc</li>
                    </ul>

                    <p>
                        Após este cadastramento o servidor poderá cessar o site do portal da ConsigLog para efetuar suas consultas de margem e consignação.
                    </p>

                    <h5>Suporte Consiglog: (11)4082-4664/0800-0004664</h5>

                    <h5>Sobre as consignações:</h5>

                    <p>
                        As consignações em folha de pagamento dos servidores públicos civis, ativos, inativos e pensionistas da administração direta, autárquica e fundacional, são classificadas em compulsórias e facultativas.
                        <br /><br />
                        Consignações compulsórias são descontos e recolhimentos incidentes sobre a remuneração, subsídio, provento ou pensão, efetuados por força de lei ou decisão judicial, compreendendo:
                    </p>
                    <ul>
                        <li>contribuições previdenciárias;</li>
                        <li>pensão alimentícia;</li>
                        <li>imposto sobre a renda e proventos de qualquer natureza;</li>
                        <li>restituições e indenizações ao erário; e</li>
                        <li>benefícios e auxílios prestados aos servidores pela Administração Pública Municipal.</li>
                    </ul>

                    <p>
                        Consignações facultativas são descontos incidentes sobre a remuneração, subsidio, provento ou pensão efetuados mediante autorização do consignado, em decorrência de contrato, acordo, convenção, convênio ou outra forma regular de ajuste entre o consignado e determinada entidade consignatária.
                        <br /><br />
                        Somente poderão ser admitidas como entidades consignatárias, para efeito das consignações facultativas:
                    </p>
                    <ul>
                        <li>entidades de classe, associações e clubes constituídos exclusivamente de servidores públicos municipais;</li>
                        <li>entidades beneficentes;</li>
                        <li>entidades sindicais representativas de servidores públicos municipais;</li>
                        <li>entidades fechadas ou abertas de previdência complementar, de planos de pecúlio, de capitalização e de saúde;</li>
                        <li>sociedades seguradoras;</li>
                        <li>entidades administradoras de plano de saúde;</li>
                        <li>entidades administradoras de cartões de serviço destinados à aquisição de medicamentos;</li>
                        <li>instituições financeiras cujo controle acionário seja exercido por quaisquer dos entes da Federação;</li>
                        <li>cooperativas de créditos constituídas por servidores públicos autorizadas pelo Banco Central do Brasil; e</li>
                        <li>instituições financeiras autorizadas pelo Banco Central do Brasil.</li>
                    </ul>

                    <p>
                        As consignações compulsórias terão prioridade sobre as facultativas e, em nenhum caso, poderá resultar saldo negativo na folha de pagamento do servidor público.
                        <br /><br />
                        A soma mensal das consignações facultativas de cada servidor não poderá exceder ao valor equivalente a 30% (trinta por cento) do resultado encontrado pela subtração das consignações compulsórias da remuneração bruta.
                        <br /><br />
                        Não serão computadas na remuneração bruta as seguintes vantagens pecuniárias:
                    </p>
                    <ul>
                        <li>salário-família;</li>
                        <li>diárias;</li>
                        <li>ajuda de custo;</li>
                        <li>gratificação natalina;</li>
                        <li>horário noturno;</li>
                        <li>1/3 (um terço) constitucional pelo usufruto de férias;</li>
                        <li>serviço extraordinário, sobreaviso ou hora plantão;</li>
                        <li>substituição de cargo em comissão ou função de confiança</li>
                        <li>importâncias pretéritas</li>
                    </ul>

                    <p>
                        Será admitida liberação da margem adicional equivalente a 10% (dez por cento), além da margem consignável prevista, destinada exclusivamente para:
                    </p>
                    <ul>
                        <li>desconto de valores resultante de convênios com instituições financeiras administradoras de cartão de crédito; e</li>
                        <li>desconto de valores decorrentes de convênios para aquisição de medicamentos.</li>
                    </ul>

                    <p>
                        Os prazos das consignações de empréstimos bancários não poderão exceder a 72 (setenta e duas) parcelas, com exceção aos casos de ocorrência da perda de margem consignável no contracheque do servidor e de sua inadimplência, para fins de enquadramento de margem consignável, poderão as instituições financeiras prolongar o prazo de amortização de empréstimo pessoal e financiamento até o limite de 120 (cento e vinte) meses, vedada a majoração dos encargos inicialmente pactuados.
                        <br /><br />
                        Mais detalhes no:
                    </p>
                    <p>
                        <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Decreto_2016-2014.pdf?_gl=1*1b0gj1a*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTc0MTUuMC4wLjA.&_ga=2.30349183.1518638583.1687451403-1318598864.1684797233">Decreto nº_2016/2014</a>
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Consignados