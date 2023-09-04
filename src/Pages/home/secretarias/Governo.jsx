import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/secretarias/Secretarias.css'

const Governo = () => {
  return (
    <div className='secretarias_container'>
        <div className="main_secretarias">
            <Container>
                <div className="text_secretarias">
                    <Link to="/" className='link_secretarias'>Home</Link>/<Link to='/secretaria-de-governo' className='link_secretarias'>Secretaria de Governo</Link>

                    <h4>Secretaria de Governo</h4>

                    <h6>Atribuições</h6>
                    
                    <p>
                    Exercer as funções inerentes ao gerenciamento e gestão da respectiva Secretaria, objetivando o cumprimento de todas as atribuições e responsabilidades do respectivo órgão;
                    <br /><br />
                    Executar atribuições decorrentes de outras leis ou que lhe forem designadas.
                    </p>

                    <h6>Secretário da Casa Civil Luiz Fernando Verdine Salomon</h6>
                    <div className="text_secretarias__sec">
                        <img src="../img/other/luiz.png" alt="Foto do secretário da casa civil Luiz Fernando Verdine Salomon" />
                        <p>Luiz Fernando Verdine Salomon é graduado em Engenharia Elétrica (Universidade Federal de Itajubá, Unifei/MG), estudou também no curso Especial de Administração (FGV), formou-se no curso de Altos Estudos Internacionais (Ministério das Relações Exteriores da Espanha) e participou de diversos seminários, como o Grid de Desenvolvimento Gerencial.
                        <br /><br />
                        Verdine, como é popularmente conhecido, possui ampla experiência profissional no setor público e em empresas de economia mista. Foi secretário municipal de Receita de São José (2005); secretário de Estado de Planejamento e Fazenda (1992-1994), época em que presidiu os Conselhos de Administração do Badesc e do Besc; diretor-presidente da Celesc (1991-1992), companhia em que também exerceu a função de chefe do Departamento de Operação e Manutenção da Agência Regional de Tubarão (1975-1978) e da Agência Regional de Joaçaba (1973), além disso atuou como diretor-presidente da Companhia de Armazenamento de Santa Catarina (Cocar, 1982-1986).</p>
                    </div>
                    <h6>Secretário adjunto Junior Spies</h6>
                    <div className="text_secretarias__sec">
                        <img src="../img/other/junior-spies.png" alt="Foto do secretário adjunto da casa civil Júnior Spies" />
                        <p>Junior Spies é advogado, graduado pela Universidade Regional de Blumenau (FURB, 2011). Ingressou na Prefeitura de São José em 2013 como assessor jurídico e posteriormente assumiu como secretário adjunto da Casa Civil (2017 a 2020). Atuou interinamente como procurador-geral do Município de São José e secretário adjunto da Receita.</p>
                    </div>

                    <h6>Contato</h6>

                    <p>
                        E-mail: <a href="mailto:gabinete@pmsj.sc.gov.br">gabinete@pmsj.sc.gov.br</a>
                        <br /><br />
                        Endereço: Sede da Administração: Avenida Acioni Souza Filho (Beira-Mar de São José), n° 403, 4º andar, Praia Comprida – São José.
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Governo