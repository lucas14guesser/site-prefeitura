import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/secretarias/Secretarias.css'

const ProcuradoriaGeral = () => {
  return (
    <div className='secretarias_container'>
        <div className="main_secretarias">
            <Container>
                <div className="text_secretarias">
                    <Link to="/" className='link_secretarias'>Home</Link>/<Link to='/procuradoria-geral' className='link_secretarias'>Procuradoria-Geral do Município</Link>

                    <h4>Procuradoria-Geral do Município</h4>
                    
                    <div className="text_secretarias__sec">
                        <img src="../img/other/leonardo-reis.png" alt="Foto do procurador Leonardo Reis de Oliveira" />
                        <p>Leonardo Reis de Oliveira é mestre em Direito Processual Civil pelo Programa de Pós-Graduação em Direito da UFSC (2020), especialista em Direito Material e Processual Civil pela Faculdade CESUSC (2004/2005) e graduado em Direito pela UFPEL (2000).
                        <br /><br />
                        Advogado há mais de 20 anos, atuou como gerente jurídico da Brasil Telecom e Oi, foi coordenador do escritório Rocha Marinho e Sales na Região Sul do Brasil e, posteriormente sócio fundador do escritório Reis e Torres Advogados. Foi Presidente do Conselho de Administração do Badesc. Foi eleito Conselheiro estadual da OAB/SC (Gestões 2013/2015, 2016/2018 e 2019/2021) e nomeado Presidente da Comissão Orçamentos na OAB/SC (Gestões 2016/2018 e 2019/2021).
                        <br /><br />
                        É Professor de Direito Processual Civil e Direito Empresarial do Curso de Graduação da Faculdade CESUSC e Pós Graduação em Direito Societário e Empresarial da Faculdade CESUSC. Professor Convidado Permanente da ESA (Escola Superior da Advocacia) – OAB/SC.</p>
                    </div>

                    <h6>Contato</h6>

                    <p>
                        Telefone:  <a href="https://api.whatsapp.com/send?phone=4833810101" target='_blank'>(48)3381-0101</a>
                        <br /><br />
                        Endereço: Sede da Administração: Avenida Acioni Souza Filho (Beira-Mar de São José), n° 403, 4º andar, Praia Comprida – São José.    
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default ProcuradoriaGeral