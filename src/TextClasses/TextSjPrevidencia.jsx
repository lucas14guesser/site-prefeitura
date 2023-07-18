import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../Styles/SjPrevidencia.css'

const TextSjPrevidencia = () => {
  return (
    <div className='sao-prev_container'>
        <div className="main_sao-prev">
            <Container>
                <div className="text_sao-prev">
                    <Link to="/" className='link_sao-prev'>Home</Link>/<Link to='/autarquia-sao-jose-previdencia' className='link_sao-prev'>Autarquia São José Previdência</Link>

                    <h4>Autarquia São José Previdência</h4>
                    
                    <div className="text_sao-prev__sec">
                        <img src="../img/other/gustavo.png" alt="Foto do secretario Gustavo Duarte" />
                        <p>Graduado em Ciências da Computação (Udesc), Gustavo Duarte do Valle Pereira cursa especialização em Licitação. Em 2004 realizou curso de aperfeiçoamento em Tecnologia da Informação em Brisbane, Austrália, também participou de diversos cursos de capacitação promovidos, pelos órgãos de controle, como Ministério Público e Tribunal de Contas , já sendo palestrante em evento do Ministério Público e do Observatório Social de São José.
                        <br /><br />
                        Desde 2008 é servidor efetivo da Prefeitura de São José, lotado na Secretaria Executiva de Controle Interno. Assumiu o comando da pasta em 2014, no início de forma interina e permanece como titular até os dias atuais.
                        <br /><br />
                        Integra o Conselho Fiscal da Autarquia São José Previdência, onde já foi presidente por dois anos. Durante quatro anos, atuou como membro do Conselho de Administração da Autarquia São José Previdência (2014-2018), presidindo o Conselho no período de 2015-2018.</p>
                    </div>

                    <h6>Contato</h6>

                    <p>
                        Telefone: <a href="https://api.whatsapp.com/send?phone=4833810004" target='_blank'>(48)3381-0004</a>
                        <br /><br />
                        Endereço: Rua Ten. Leovegildo Pinheiro, 1100, sala 31 – Fazenda Santo Antônio.
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextSjPrevidencia