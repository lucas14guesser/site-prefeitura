import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/secretarias/Secretarias.css'

const TextAssistenciaSocial = () => {
    return (
        <div className='secretarias_container'>
            <div className="main_secretarias">
                <Container>
                    <div className="text_secretarias">
                        <Link to="/" className='link_secretarias'>Home</Link>/<Link to='/assistencia-social' className='link_secretarias'>Secretaria de Assistência Social</Link>
    
                        <h4>Secretaria de Assistência Social</h4>
                        
                        <h6>Secretária Rita de Cassia Faversani</h6>
                        <div className="text_secretarias__sec">
                            <img src="../img/other/rita.png" alt="Foto da Rita de Cássia" />
                            <p>Rita de Cássia Faversani Furtado é graduada em Serviço Social (UFSC) e pós-graduanda em Política de Assistência Social (UNINTER, previsão de conclusão em 2021). Desde 2014, atua na Secretaria Municipal de Assistência Social de São José. Trabalhou como assistente social do Programa Cadastro Único/Bolsa Família (2018-2019), coordenadora municipal do Programa de Erradicação do Trabalho Infantil (PETI, 2017), representante da Secretaria de Assistência Social no Grupo Intersetorial na elaboração da Proposta do Plano Diretor Participativo de São José (2016), diretora de Proteção Social Básica (2014-2015) e coordenadora geral dos Centros de Referência de Assistência Social (CRAS) de São José (2014). Em 2016, assumiu como secretária Municipal de Assistência Social de São José e anteriormente como secretária adjunta da Secretaria de Assistência Social (2015-2016). Ainda na área social, Rita de Cássia presidiu o Conselho Municipal de Assistência Social (2016), trabalhou como gerente de planejamento e avaliação da Fundação Catarinense de Educação Especial (FCEE, 2012 – 2013), atuou como assistente social do CREAS em Palhoça (2011-2012) e gerente geral da Associação Florianopolitana de Voluntários (Aflov, 2009 – 2012).</p>
                        </div>
                        <h6>Secretária Adjunta Luciana Pereira da Silva</h6>
                        <div className="text_secretarias__sec">
                            <img src="../img/other/luciana.png" alt="Foto da Luciana Pereira da Silva" />
                            <p>Nascida em Florianópolis/SC, moradora do Município de São José há mais de 40 anos, formada em Serviço Social pela Universidade Federal de Santa Catarina – UFSC, Especialista em Metodologias de Atendimento a Crianças e Adolescentes em Situação de Risco pela Universidade do Estado de Santa Catarina – UDESC, Especialista em Violência Doméstica contra Criança e Adolescente pela Universidade de São Paulo – USP, Perita Social, Professora Universitária em Serviço Social, Supervisora Acadêmica de Estagio, atualmente é Assistente Social efetiva da PMSJ, onde trabalha há mais de 28 anos, esteve a frente da Coordenação do Projeto Criança SIM – Sistema Integrado Municipal, Programa de Erradicação do trabalho Infantil e o Programa Sentinela, Coordenação do Centro Integrado de Atendimento a Criança e Adolescente Cidade da Criança, Presidente do Conselho Municipal de Assistência Social, Presidente do Conselho Municipal dos Direitos da Criança e Adolescente, foi Conselheira Tutelar, Gerente de Planejamento, Monitoramento e Avaliação, Supervisão Geral de Regularização Fundiária – Projeto Lar Legal, Secretária Adjunta de Assistência Social de São José no ano de 2013/2014, Coordenação do Programa BPC na escola, Assessora Técnica de Assistência Social, Integrante do Colegiado Estadual de Gestores Municipais de Assistência Social – COEGEMAS, Integrante da Câmara Técnica da Comissão Intergestores Bipartite – CIB/SC. Em 2022. Assumiu a vice-presidência do Conselho Municipal de Assistência Social de São José – CMAS/SJ e no dia 01 de junho deste ano assumiu a Secretaria Adjunta de Assistência Social de São José.</p>
                        </div>
    
                        <h6>Contato</h6>
    
                        <p>Telefone: <a href="https://api.whatsapp.com/send?phone=4833810112" target='_blank'>(48)3381-0112</a>
                        <br /><br />
                        Endereço: Sede da Administração: Avenida Acioni Souza Filho (Beira-Mar de São José), n° 403, 2º andar, Praia Comprida – São José.</p>
                    </div>
                </Container>
            </div>
        </div>
  )
}

export default TextAssistenciaSocial