import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../Styles/Saude.css'

const TextSaude = () => {
  return (
    <div className='saude_container'>
        <div className="main_saude">
            <Container>
                <div className="text_saude">
                    <Link to="/" className='link_saude'>Home</Link>/<Link to='/secretaria-de-saude' className='link_saude'>Secretaria de Saúde</Link>

                    <h4>Secretaria de Saúde</h4>
                    

                    <h6>Objetivos</h6>

                    <p>
                    Promover a política de saúde preventiva e corretiva em benefício de toda a população, a prevenção e combate de epidemias, com especial atenção às comunidades mais carentes do Município.
                    </p>

                    <h6>Secretária Sinara Regina Simioni</h6>
                    <div className="text_saude__sec">
                        <img src="../img/other/sinara.png" alt="Foto da secretária de saude Sinara" />
                        <p>Graduada em Tecnologia da Gestão Pública na Universidade do Sul de Santa Catarina (Unisul), ocupou o cargo de Diretora-administrativa na Assembleia Legislativa de Santa Catarina. Foi Consultora Administrativa da Prefeitura de Florianópolis e secretária municipal de Administração de São José.</p>
                    </div>

                    <h6>Secretária Adjunta Fabricia Martins</h6>
                    <div className="text_saude__sec">
                        <img src="../img/other/fabricia.png" alt="Foto da secretária adjunta de saude fabrícia" />
                        <p>Enfermeira, graduada pela Universidade Federal de Santa Catarina – UFSC. Doutoranda pelo Programa de Pós-Graduação Doutorado Profissional em Gestão do Cuidado em Enfermagem – UFSC. Mestre pelo Programa de Pós-Graduação Mestrado Profissional em Gestão do Cuidado em Enfermagem – UFSC. Especialista em Saúde da Família pela UFSC.
                        <br /><br />
                        Enfermeira de Estratégia de Saúde da Família na Prefeitura Municipal de São José, tendo atuado diretamente na assistência de enfermagem e na gestão enquanto coordenadora de Unidade Básica de Saúde, supervisora de Distrito Sanitário, e Diretora de Atenção Primária à Saúde.</p>
                    </div>

                    <h6>Contato</h6>

                    <p>
                        Telefone: <a href="https://api.whatsapp.com/send?phone=4832816800" target='_blank'>(48)3281-6800</a>
                        <br /><br />
                        E-mail: <a href="mailto:gabinete.saude2@pmsj.sc.gov.br">gabinete.saude2@pmsj.sc.gov.br</a>
                        <br /><br />
                        Endereço: Sede da Administração: Avenida Acioni Souza Filho (Beira-Mar de São José), n° 403, 3º andar, Praia Comprida – São José.
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextSaude