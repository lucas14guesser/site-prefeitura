import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/secretarias/Secretarias.css'

const TextCultura = () => {
  return (
    <div className='secretarias_container'>
        <div className="main_secretarias">
            <Container>
                <div className="text_secretarias">
                    <Link to="/" className='link_secretarias'>Home</Link>/<Link to='/cultura-e-turismo' className='link_secretarias'>Secretaria Municipal de Cultura e Turismo</Link>

                    <h4>Secretaria Municipal de Cultura e Turismo</h4>

                    <h6>Objetivos</h6> 
                    <p>
                        Fomentar projetos, políticas e normas relativas à cultura e ao turismo, assegurando a preservação, a recuperação do patrimônio histórico e o desenvolvimento do turismo como agente do crescimento econômico, gerador de emprego, renda e melhor qualidade de vida.
                    </p>                  
                    <div className="text_secretarias__sec">
                        <img src="../img/other/charles.png" alt="Foto de Charles Alexandre Colzani" />
                        <p>
                            Charles Alexandre Colzani possui graduação em Gestão de Turismo e é especialista em Gestão de Eventos. Tem experiência na área pública. Iniciou como diretor de cultura da Fundação Municipal de Cultura e Turismo de São José. Anos mais tarde assumiu como superintendente adjunto da pasta e chegou a ser titular. Em sua trajetória profissional, coordenou o desenvolvimento de projetos importantes, como: Carnaval Zé Folia, Natal Mágico, oficinas do Theatro Adolpho Mello e Baile Comunitário de Debutantes. Na Câmara de São José, trabalhou como assessor parlamentar (2018) e assessor de cerimonial (2019-2020).
                        </p>
                    </div>

                    <h6>Contato</h6>

                    <p>
                        Telefone: <a href="https://api.whatsapp.com/send?phone=4833810048" target='_blank'>(48)3381-0048</a>
                        <br /><br />
                        E-mail: <a href="mailto:secretaria.smct@pmsj.sc.gov.br">secretaria.smct@pmsj.sc.gov.br</a>
                        <br /><br />
                        Endereço: Rua Padre Macário, 10 – CEP: 88103-020, Centro Histórico de São José.
                        <br /><br />
                        ● Theatro Adolpho Mello Praça Hercílio Luz, s/n, Centro Histórico
                        <br />
                        ● Casa da Cultura ​Nésia Melo da Silveira Rua Praça Hercílio Luz, 04, Centro Histórico
                        <br />
                        ● Museu Histórico Municipal de São José Rua Gaspar Neves, 3175, Centro Histórico
                        <br />
                        ● Biblioteca Pública Albertina Ramos de Araújo Rua Gaspar Neves, 3175, (piso inferior), Centro Histórico
                        <br />
                        ● Escolas de Oleiros Joaquim Antônio de Medeiros Rua Frederico Afonso, 5545, Ponta de Baixo – <a href="https://api.whatsapp.com/send?phone=4833433487" target='_blank'>(48)3343-3487</a>
                        <br />
                        ● Teatro ​Hermelinda Izabel Merize Avenida Acioni Souza Filho, s/n – Campinas, Centro de Eventos Multiuso – <a href="https://api.whatsapp.com/send?phone=4832412506"target='_blank'>(48)3241-2506</a>
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextCultura