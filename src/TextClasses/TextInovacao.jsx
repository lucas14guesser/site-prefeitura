import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../Styles/Inovacao.css'

const TextInovacao = () => {
  return (
    <div className='inovacao_container'>
        <div className="main_inovacao">
            <Container>
                <div className="text_inovacao">
                    <Link to="/" className='link_inovacao'>Home</Link>/<Link to='/secretaria-de-desenvolvimento-economico-e-inovacao' className='link_inovacao'>Secretaria de Desenvolvimento Econômico e Inovação</Link>

                    <h4>Secretaria de Desenvolvimento Econômico e Inovação</h4>
                    
                    <h6>Objetivos</h6>

                    <p>
                        Elaborar e coordenar a execução da política de fortalecimento das atividades econômicas, além da geração de oportunidades de trabalho e de renda, contribuindo com a melhoria da qualidade de vida da população.
                    </p>
                    <div className="text_inovacao__sec">
                        <img src="../img/other/rosemeri.png" alt="Foto de Roseméri Bartuckeski" />
                        <p> <strong>Secretária Roseméri Bartuckeski</strong>
                            Roseméri Bartucheski possui graduação em Ciências Contábeis (UFSC). Atuou como secretária de Assistência Social de São José em duas oportunidades (1998-2004 e 2017-2020) e também como secretária de Assistência Social de Florianópolis (2005-2010). Presidiu a Associação Florianopolitana de Voluntários (Aflov, 2005 – 2010) e a Fundação Catarinense de Educação Especial (2011-2017).
                        <br /><br />
                        Pela sua dedicação, Roseméri Bartucheski foi condecorada com as seguintes honrarias: título Embaixadora da Paz (Unipaz, 2006), Prêmio Amiga da Criança Catarinense (Associação Catarinense de Conselheiros Tutelares de Santa Catarina, em 2002) e título Amiga das Apaes (Federação das Apaes, 2016).</p>
                    </div>
                    <div className="text_inovacao__sec">
                        <img src="../img/other/samuel.png" alt="Foto de Samuel João Ancelmo" />
                        <p> <strong>Secretário adjunto Samuel João Ancelmo</strong>
                        Formado em Gestão Pública, Samuel João Ancelmo possui experiência na área pública. De 2005 a 2012, trabalhou como responsável pelo setor de transporte da Secretaria Municipal de Assistência Social de São José. Ainda na Prefeitura de São José atuou como assessor na Secretaria Municipal de Urbanismo e Serviços Públicos (Susp, 2016) e posteriormente na Secretaria de Desenvolvimento Econômico e Inovação (2017-2020). Samuel também exerceu a função de assessor parlamentar na Câmara de São José (2013-2015).</p>
                    </div>

                    <h6>Contato</h6>

                    <p>
                        Telefone: <a href="https://api.whatsapp.com/send?phone=4833810051">(48)3381-0051</a>
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

export default TextInovacao