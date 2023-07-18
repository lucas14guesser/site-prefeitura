import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../Styles/Educacao.css'

const TextEducacao = () => {
  return (
    <div className='educacao_container'>
        <div className="main_educacao">
            <Container>
                <div className="text_educacao">
                    <Link to="/" className='link_educacao'>Home</Link>/<Link to='/secretaria-de-educacao' className='link_educacao'>Secretaria de Educação</Link>

                    <h4>Secretaria de Educação</h4>
                    
                    <h6>Objetivos</h6>

                    <p>
                    Promover a oferta da educação básica, desenvolver o educando, assegurar-lhe as formações comuns indispensáveis para o exercício da cidadania e fornecer-lhes meios para progredir no trabalho e estudos posteriores.
                    </p>

                    <h6>Secretária Roseméri Bartuckeski</h6>
                    <div className="text_educacao__sec">
                        <img src="../img/other/rosemeri.png" alt="Foto da sercetária da educação Roseméri" />
                        <p>Roseméri Bartucheski possui graduação em Ciências Contábeis (UFSC). Atuou como secretária de Assistência Social de São José em duas oportunidades (1998-2004 e 2017-2020) e também como secretária de Assistência Social de Florianópolis (2005-2010). Presidiu a Associação Florianopolitana de Voluntários (Aflov, 2005 – 2010) e a Fundação Catarinense de Educação Especial (2011-2017).
                        <br /><br />
                        Pela sua dedicação, Roseméri Bartucheski foi condecorada com as seguintes honrarias: título Embaixadora da Paz (Unipaz, 2006), Prêmio Amiga da Criança Catarinense (Associação Catarinense de Conselheiros Tutelares de Santa Catarina, em 2002) e título Amiga das Apaes (Federação das Apaes, 2016).</p>
                    </div>
                    <h6>Secretária Adjunta Cláudia Regina Macário</h6>
                    <div className="text_educacao__sec">
                        <img src="../img/other/claudia.png" alt="Foto da sercetária adjunta da educação Claudia Regina Macário" />
                        <p>Servidora efetiva da Prefeitura de São José desde 2002, Cláudia Macário formou-se no Magistério, possui Licenciatura Plena em Geografia (UFSC) e especialização em Metodologia de Ensino (Dom Bosco).
                        <br /><br />
                        Iniciou a carreira na educação trabalhando em escolas particulares. Atualmente, também é servidora efetiva na Secretaria de Estado da Educação.
                        <br /><br />
                        Na sua trajetória profissional da rede municipal de ensino, assumiu cargos de gestão, como diretora de anos iniciais e diretora-geral do Centro Educacional Municipal (CEM) Professora Maria Iracema Martins de Andrade (Barreirão), diretora do CEM Antônio Francisco Machado (Forquilhão) e da Escola Municipal do Meio Ambiente. Atuou também como coordenadora da Educação de Jovens e Adultos (EJA), assessora pedagógica da Secretaria Municipal de Educação e diretora de Ensino.
                        </p>
                    </div>
                    <h6>Contato</h6>

                    <p>
                        Telefone: <a href="https://api.whatsapp.com/send?phone=4833817400" target='_blank'>(48)3381-7400</a>
                        <br /><br />
                        Endereço: Sede da Administração: Avenida Acioni Souza Filho (Beira-Mar de São José), n° 403, 1º andar, Praia Comprida – São José.
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextEducacao