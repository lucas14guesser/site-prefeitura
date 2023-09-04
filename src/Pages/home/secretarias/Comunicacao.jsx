import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/secretarias/Secretarias.css'

const Comunicacao = () => {
  return (
    <div className='secretarias_container'>
        <div className="main_secretarias">
            <Container>
                <div className="text_secretarias">
                    <Link to="/" className='link_secretarias'>Home</Link>/<Link to='/comunicacao-social' className='link_secretarias'>Secretaria Integrada de Comunicação</Link>

                    <h4>Secretaria Integrada de Comunicação</h4>

                    <h6>Objetivo</h6>

                    <p>
                        Dar visibilidade às ações do Município na Mídia. Promover a comunicação institucional por meio de ações que promovam o diálogo e a interação com seus públicos (externo e interno), com a imprensa e a sociedade em geral.
                    </p>
                    
                    <h6>Secretário de Comunicação Maurício Locks</h6>

                    <div className="text_secretarias__sec">
                        <img src="../img/other/mauricio.png" alt="Foto de Mauricio Locks" />
                        <p>
                            Maurício Locks é formado em Jornalismo, com o experiência em redações de Santa Catarina e do Rio de Janeiro. Atuou na Câmara dos Deputados e no Senado Federal, em Brasília, na comunicacaoura de Florianópolis e no Governo do Estado de Santa Catarina, onde implementou estratégia digital, coordenou assessoria de imprensa e foi responsável por estratégias de marketing.
                            <br /><br />
                            Utiliza as ferramentas da comunicação pública e política para promover o diálogo dos agentes públicos com o cidadão, destacando o fazer político como elemento essencial à sociedade e oportunizando às pessoas o acesso à informação para a cidadania.
                        <br /><br />
                        </p>
                    </div>

                    <h6>Contato</h6>

                    <p>
                        Telefone: <a href="https://api.whatsapp.com/send?phone=4833810168">(48)3381-0168</a>
                        <br /><br />
                        E-mail: <a href="mailto:secom@pmsj.sc.gov.br">secom@pmsj.sc.gov.br</a>
                        <br /><br />
                        Endereço: Sede da Administração: Avenida Acioni Souza Filho (Beira-Mar de São José), n° 403, 3º andar, Praia Comprida – São José.
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Comunicacao