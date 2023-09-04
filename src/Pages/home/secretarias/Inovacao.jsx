import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/secretarias/Secretarias.css'

const Inovacao = () => {
  return (
    <div className='secretarias_container'>
        <div className="main_secretarias">
            <Container>
                <div className="text_secretarias">
                    <Link to="/" className='link_secretarias'>Home</Link>/<Link to='/secretaria-de-desenvolvimento-economico-e-inovacao' className='link_secretarias'>Secretaria de Desenvolvimento Econômico e Inovação</Link>

                    <h4>Secretaria de Desenvolvimento Econômico e Inovação</h4>
                    
                    <h6>Objetivos</h6>

                    <p>
                        Elaborar e coordenar a execução da política de fortalecimento das atividades econômicas, além da geração de oportunidades de trabalho e de renda, contribuindo com a melhoria da qualidade de vida da população.
                    </p>
                    
                    <h6>Secretário-Interino Rubens Pereira Júnior</h6>
                    <div className="text_secretarias__sec">
                        <img src="../img/other/rubens.png" alt="Foto de Rubens Pereira Júnior" />
                        <br /><br />
                        <p>Rubens Júnior é graduado em Engenharia Civil,  pós-graduado em Docência no Ensino Superior e atuou de forma efetiva em projetos e atividades envolvendo programas de Smart City e Regularização Fundiária.
                            <br /><br />
                            Iniciou sua atuação na administração pública em 2017, ocupando o cargo de Diretor de Obras de Luiz Alves, no Vale do Itajaí. Entre os anos de 2018 e 2022, no mesmo Município, ocupou a função de Secretário de Obras e Planejamento, garantindo atuação nas mais diversas áreas da administração pública, inclusive processos de regularização  fundiária através da Lei Federal nº13.465/2017, REURB. No ano de 2022, iniciou sua trajetória em São José, atuando como Assessor Técnico de Engenharia na Secretaria de Planejamento e Assuntos Estratégicos, desempenhando também a função de Presidente da Comissão de Regularização Fundiária,  viabilizando ações que tornaram possível o Município ser o primeiro da Região da Grande Florianópolis a realizar entregas de títulos imobiliários através de REURB na modalidade Social.
                        </p>
                    </div>

                    <h6>Secretário adjunto Samuel João Ancelmo</h6>
                    <div className="text_secretarias__sec">
                        <img src="../img/other/samuel.png" alt="Foto de Samuel João Ancelmo" />
                        <br /><br />
                        <p>Formado em Gestão Pública, Samuel João Ancelmo possui experiência na área pública. De 2005 a 2012, trabalhou como responsável pelo setor de transporte da Secretaria Municipal de Assistência Social de São José. Ainda na Prefeitura de São José atuou como assessor na Secretaria Municipal de Urbanismo e Serviços Públicos (Susp, 2016) e posteriormente na Secretaria de Desenvolvimento Econômico e Inovação (2017-2020). Samuel também exerceu a função de assessor parlamentar na Câmara de São José (2013-2015).</p>
                    </div>

                    <h6>Contato</h6>

                    <p>
                        Telefone: <a href="https://api.whatsapp.com/send?phone=4833810051" target='_blank'>(48)3381-0051</a>
                        <br /><br />
                        E-mail: <a href="mailto:desenvolvimentoeconomico@pmsj.sc.gov.br">desenvolvimentoeconomico@pmsj.sc.gov.br</a>
                        <br /><br />
                        Endereço: Av. Acioni Souza Filho, 403, 4º andar,
                        Centro – São José/SC – CEP 88.103-790
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Inovacao