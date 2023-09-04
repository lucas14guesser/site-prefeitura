import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/secretarias/Secretarias.css'

const FundacaoEducacional = () => {
  return (
    <div className='secretarias_container'>
        <div className="main_secretarias">
            <Container>
                <div className="text_secretarias">
                    <Link to="/" className='link_secretarias'>Home</Link>/<Link to='/fundacao-educacional-municipal' className='link_secretarias'>Fundação Educacional Municipal</Link>

                    <h4>Fundação Educacional Municipal</h4>
                    
                    <h6>Objetivos</h6>

                    <p>
                    Promover a oferta da educação complementar a fim de ampliar as oportunidades de formação e aperfeiçoamento técnico, profissionalizante e universitário, em especial, aos munícipes de baixa renda, e indispensáveis para a inclusão no mercado de trabalho com melhores rendimentos.
                    </p>

                    <h6>Superintendente Maria Helena Kruger</h6>
                    <div className="text_secretarias__sec">
                        <img src="../img/other/maria-helena.png" alt="Foto da secretária da fundação educacional Maria Helena" />
                        <p>Maria Helena Kruger é mestre em Gestão Estratégica das Organizações (Esag-Udesc/SC); especialista em Marketing (Esag-Udesc/SC); graduada em Biblioteconomia e Documentação (Ufsc).
                        <br /><br />
                        Ao longo de sua trajetória profissional, atuou em instituições de ensino superior públicas e privadas. Antes de assumir a Superintendência da Fundação Educacional de São José, trabalhou como assessora técnica de ensino superior e vice-reitora do Centro Universitário Municipal de São José (USJ).
                        <br /><br />
                        Em 2009, recebeu o Prêmio Top Educacional da Associação Brasileira de Mantenedoras de Ensino Superior (ABMES) com o Projeto Mão de Via Dupla, desenvolvido em São Paulo. Em 2013, presidiu o II Encontro Nacional de CPAS – HUMUS/SP. De 2013 a 2018, foi Coordenadora Nacional de Educação Básica e Superior Comunitária – CNEC/Brasília-DF. Em 2019, foi conferencista do LXIX Congresso Permanente sobre Credenciamento e Recredenciamento de Pós-Graduação.</p>
                    </div>
                    
                    <h6>Superintendente Ellen Prim Campos</h6>
                    <div className="text_secretarias__sec">
                        <img src="../img/other/ellen.png" alt="Foto da superintendente da fundação educacional Ellen Prim" />
                        <p>Formada em Serviço Social (Ufsc, 2004), Ellen Prim Campos está concluindo o curso de Direito (Univali). Ela também estudou Antropologia na Universidade de Salamanca, na Espanha.
                        <br /><br />
                        Assim que se formou em Serviço Social, Ellen trabalhou no Núcleo de Serviço Social da empresa Embraco, em Joinville. Mais tarde atuou como funcionária da Fundação Educacional Municipal de São José (Fundesj), assumindo inclusive o comando da pasta. De 2013 a 2022, trabalhou como secretária Municipal de Assistência Social em Governador Celso Ramos</p>
                    </div>
                    
                    <h6>Contato</h6>

                    <p>
                        Telefone: <a href="https://api.whatsapp.com/send?phone=4833817465" target='_blank'>(48)3381-7465</a>
                        <br /><br />
                        Endereço: Av. Acioni Souza Filho, 403, 1º andar, Centro, São José. CEP 88.103-790
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default FundacaoEducacional