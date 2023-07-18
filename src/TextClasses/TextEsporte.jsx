import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../Styles/Esporte.css'

const TextEsporte = () => {
  return (
    <div className='esporte_container'>
        <div className="main_esporte">
            <Container>
                <div className="text_esporte">
                    <Link to="/" className='link_esporte'>Home</Link>/<Link to='/secretaria-de-esporte' className='link_esporte'>Secretaria Municipal de Esportes e Lazer</Link>

                    <h4>Secretaria Municipal de Esportes e Lazer</h4>
                    
                    <h6>Objetivos</h6>
                    <h6>Missão</h6>

                    <p>
                        Desenvolver projetos de inclusão social, formar atletas para bem representar o Município de São José a nível regional, estadual, nacional e internacional, através do esporte, além de agir de maneira pontual nas práticas de lazer por toda a cidade de São José.
                    </p>

                    <h6>visão</h6>

                    <p>
                        Ser referência estadual e nacional na produção e execução da política pública de esportes e lazer.
                    </p>

                    <h6>Valores</h6>

                    <p>
                        Respeito aos cidadãos; Trabalho em equipe; Eficiência e excelência; Responsabilidade; Sustentabilidade; Valorização; Saúde e Bem-estar social.
                    </p>

                    <h6>Equipe</h6>

                    <h6>Secretário Cleber Fabiano Goulart</h6>
                    
                    <div className="text_esporte__sec">
                        <img src="../img/other/cleber.png" alt="Foto do secetrário de esporte Cleber Fabiano Goulart" />
                    </div>

                    <h6>Contato</h6>

                    <p>
                        Telefone:
                        <br />
                        <a href="https://api.whatsapp.com/send?phone=48985040023" target='_blank'>(48)9 8504-0023</a>
                        <br />
                        <p>(48)3381-0000</p>
                        E-mail: <a href="mailto:esporte@pmsj.sc.gov.br">esporte@pmsj.sc.gov.br</a>
                        <br /><br />
                        Endereço: Arena Multiuso de São José, Avenida Acioni Souza Filho (Beira-Mar de São José), s/n, Campinas – São José – SC
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextEsporte