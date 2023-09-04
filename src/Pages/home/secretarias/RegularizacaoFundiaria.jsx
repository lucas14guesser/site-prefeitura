import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/secretarias/Secretarias.css'

const RegularizacaoFundiaria = () => {
  return (
    <div className='secretarias_container'>
        <div className="main_secretarias">
            <Container>
                <div className="text_secretarias">
                    <Link to="/" className='link_secretarias'>Home</Link>/<Link to='/secretaria-de-regulacao-fundiaria' className='link_secretarias'>Secretaria de Regularização Fundiária</Link>

                    <h4>Secretaria de Regularização Fundiária</h4>
                    
                    <h6>Secretário Alexandre Rosa</h6>

                    <div className="text_secretarias__sec">
                        <img src="../img/other/alexandre.png" alt="Foto do secretário da regulação fundiaria Alexandre Rosa" />
                        <p>Alexandre Rosa, popularmente conhecido como “O Velha”, é natural de São José, tendo residido sempre em Barreiros, empresário do ramo de prestação de serviços automotivos, sempre atuante como líder comunitário, foi por três vezes candidato a uma vaga para o legislativo municipal, tendo alcançado êxito como o vereador mais votado do seu partido no pleito de 2016.
                        <br /><br />
                        Sua experiência na administração pública iniciou como gestor das atividades do Ginásio de Esportes Nedir Macedo entre os anos de 2008 á 2012. No ano de 2021, ocupou na Secretaria de Segurança, Defesa Civil e Trânsito a função de Consultor Geral de Segurança, ocupando posteriormente nesta pasta, também os cargos de Secretário e Secretário-Adjunto.</p>
                    </div>

                    <h6>Secretário Adjunto Rubens Pereira Júnior</h6>
                    <div className="text_secretarias__sec">
                        <img src="../img/other/rubens.png" alt="Foto do secretario adjunto da regulação fundiaria Rubens Pereira Junior" />
                        <p>Rubens Júnior é graduado em Engenharia Civil,  pós-graduado em Docência no Ensino Superior e atuou de forma efetiva em projetos e atividades envolvendo programas de Smart City e Regularização Fundiária.
                        <br /><br />
                        Iniciou sua atuação na administração pública em 2017, ocupando o cargo de Diretor de Obras de Luiz Alves, no Vale do Itajaí. Entre os anos de 2018 e 2022, no mesmo Município, ocupou a função de Secretário de Obras e Planejamento, garantindo atuação nas mais diversas áreas da administração pública, inclusive processos de regularização  fundiária através da Lei Federal nº13.465/2017, REURB. No ano de 2022, iniciou sua trajetória em São José, atuando como Assessor Técnico de Engenharia na Secretaria de Planejamento e Assuntos Estratégicos, desempenhando também a função de Presidente da Comissão de Regularização Fundiária,  viabilizando ações que tornaram possível o Município ser o primeiro da Região da Grande Florianópolis a realizar entregas de títulos imobiliários através de REURB na modalidade Social.</p>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default RegularizacaoFundiaria