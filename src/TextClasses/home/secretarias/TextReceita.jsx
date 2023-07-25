import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/secretarias/Secretarias.css'

const TextReceita = () => {
  return (
    <div className='secretarias_container'>
        <div className="main_secretarias">
            <Container>
                <div className="text_secretarias">
                    <Link to="/" className='link_secretarias'>Home</Link>/<Link to='/secretaria-da-receita' className='link_secretarias'>Secretaria da Receita</Link>

                    <h4>Secretaria da Receita</h4>
                    
                    <h6>Objetivos</h6>

                    <p>
                        Empreender estudos e ações para maximizar a arrecadação e garantir o seu recolhimento aos cofres municipais.
                    </p>

                    <h6>Secretário Constâncio Krummel Maciel Neto</h6>
                    <div className="text_secretarias__sec">
                        <img src="../img/other/constancio.png" alt="Foto do secretário da receita Constâncio Krummel" />
                        <ul>
                        <h6>Formação</h6>
                            <li>Graduação em Direito no ano de 2004 pela Universidade do Vale do Itajaí.</li>
                            <li>Especialização em regime próprio de previdência.</li>
                            <li>MBA em Gestão Pública.</li>
                            <li>Pós-graduando em Direito Administrativo.</li>
                        <p>
                        <br /><br />
                        <h6>Atuação Profissional</h6>
                        Advogado e empresário no município de São José há mais de 15 anos, exercendo nesse período as funções de consultor do SEBRAE, Procurador do Instituto Previdência em Jaraguá do Sul e presidente da Autarquia São José Previdência onde multiplicou por cinco o patrimônio através de uma gestão técnica e transparente.
                        </p>
                        </ul>
                    </div>
                    <h6>Secretário Adjunto Jamir Machado Pimenta Junior</h6>
                    <div className="text_secretarias__sec">
                        <img src="../img/other/jamir.png" alt="Foto do secretrário adjunto da receita Jamir Machado Pimenta Junior" />
                        <p>
                        Jamir Machado Pimenta Junior é graduado em Engenharia Civil (Universidade Estácio de Sá), nascido no município de São José. Tem experiência na área pública atuando na Prefeitura desde 2007, ocupando diversos cargos. Foi Assessor Administrativo, Supervisor do Centro de Atendimento ao Cidadão, Supervisor da Base Tributária, Diretor da Base Tributária e Diretor Geral de Administração Tributária.
                        </p>
                    </div>

                    <h6>Contato</h6>

                    <p>
                        Telefone: <a href="https://api.whatsapp.com/send?phone=4833810135" target='_blank'>(48)3381-0135</a>
                        <br /><br />
                        E-mail: <a href="mailto:receita.gabinete@pmsj.sc.gov.br">receita.gabinete@pmsj.sc.gov.br</a>
                        <br /><br />
                        Endereço: Sede da Administração: Avenida Acioni Souza Filho (Beira-Mar de São José), n° 403, Térreo, Praia Comprida – São José.
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextReceita