import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/secretarias/Secretarias.css'

const Infraestrutura = () => {
  return (
    <div className='secretarias_container'>
        <div className="main_secretarias">
            <Container>
                <div className="text_secretarias">
                    <Link to="/" className='link_secretarias'>Home</Link>/<Link to='/secretaria-de-infraestrutura' className='link_secretarias'>Secretaria de Infraestrutura</Link>

                    <h4>Secretaria de Infraestrutura</h4>
                    
                    <h6>Objetivos</h6>

                    <p>
                        Administrar, coordenar e executar os serviços públicos inerentes ao sistema viário; limpeza pública; coleta de lixo; manutenção e reparos de vias e obras públicas.
                    </p>

                    <h6>Secretário Nardi Arruda</h6>
                    <div className="text_secretarias__sec">
                        <img src="../img/other/nardi.png" alt="Foto do secretário de infraestrutura Nardi Arruda" />
                        <p>Nardi Francisco de Sousa Arruda nasceu em 1º de outubro de 1971. Com 22 anos, formou-se em Engenharia Civil pela Furb. Anos depois, concluiu a especialização em Engenharia de Avaliações e Inovações Tecnológicas pela UFSC. Foi presidente da Associação de Engenheiros e Arquitetos de São José e professor no Centro Universitário Estácio de Sá, em Barreiros.
                        <br /><br />
                        Atuou em diversas empresas do setor privado. Iniciou no serviço público em 2008, após aprovação em concurso para engenheiro civil da Prefeitura de São José. É casado com Alessandra Arruda, advogada e enfermeira. O casal tem dois filhos: Bianca e Leonardo.
                        <br /><br />
                        Em 2016, concorreu pela primeira vez ao cargo de vereador e foi eleito com 1.609 votos pelo PSD. Em 2020, concorreu novamente e foi reeleito com 2.161 votos, sendo o 5º mais votado. No Legislativo, integrou, como vice-presidente a Comissão de Finanças e Orçamento (2017-2018); foi vice-presidente da Câmara de São José (2019-2020) e presidiu a Comissão de Constituição, Justiça e Redação (2021-2022).</p>
                    </div>
                    
                    <h6>Secretário Adjunto Júlio César da Silva</h6>
                    
                    <h6>Contato</h6>

                    <p>
                        Telefone: <a href="https://api.whatsapp.com/send?phone=4832816700" target='_blank'>(48) 3281-6700</a>
                        <br /><br />
                        E-mail: <a href="mailto:infra@pmsj.sc.gov.br">infra@pmsj.sc.gov.br</a>
                        <br /><br />
                        Endereço: Rua Oscarlino Romão Weber, 101, Areias – São José
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Infraestrutura