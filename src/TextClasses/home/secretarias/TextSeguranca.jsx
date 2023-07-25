import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/secretarias/Secretarias.css'

const TextSeguranca = () => {
  return (
    <div className='secretarias_container'>
        <div className="main_secretarias">
            <Container>
                <div className="text_secretarias">
                    <Link to="/" className='link_secretarias'>Home</Link>/<Link to='/secretaria-de-seguranca' className='link_secretarias'>Secretaria de Segurança, Defesa Civil e Trânsito</Link>

                    <h4>Secretaria de Segurança, Defesa Civil e Trânsito</h4>
                    

                    <h6>Objetivos</h6>

                    <p>
                    Oferecer maior consciência e corresponsabilidade da sociedade nas ações de proteção ao cidadão, reduzindo as violências urbanas, agindo de forma integrada nos focos causadores dos ilícitos e promovendo uma defesa ágil e solidária no município. Para isto, constituir guarda municipal destinada à proteção de bens, serviços e instalações do poder público municipal, nos termos do inciso XII, do art. 21, da Lei Orgânica Municipal, e instituir a Defesa Civil, que tem por objetivo coordenar em nível municipal, os meios para atendimento a situações de emergência ou calamidade pública. Plano Integrado de Segurança Pública
                    <br />
                    <a href="http://www.saojose.sc.gov.br/images/uploads/sao-jose/plano-de-seguranca.pdf?_ga=2.209036498.1904247959.1689599992-2046960625.1688597347&_gl=1*wqg6oi*_ga*MjA0Njk2MDYyNS4xNjg4NTk3MzQ3*_ga_Y6Q5YHNV0H*MTY4OTY5NjM5NC4xMS4xLjE2ODk3MDM1NDIuMC4wLjA.">Download do Plano</a>
                    </p>
                    
                    <h6>Secretária Andrea Grando</h6>
                    <div className="text_secretarias__sec">
                        <img src="../img/other/andrea.png" alt="Foto da secretária da segurança Andrea" />
                        <p>Formada em Direito, Andrea é estudante de história e tem pós-graduação em investigação e gestão criminal. Andrea estava como escrivã da Polícia Civil de São José. No Município, atuou como superintendente da Fundação Municipal de Esportes e Lazer, auxiliando na implantação do programa Bolsa Atleta, em 2013.</p>
                    </div>

                    <h6>Contato</h6>

                    <p>
                        Telefone: <a href="https://api.whatsapp.com/send?phone=4833817472" target='_blank'>(48)3381-7472</a>
                        <br /><br />
                        E-mail: <a href="mailto:seguranca@pmsj.sc.gov.br">seguranca@pmsj.sc.gov.br</a>
                        <br /><br />
                        Endereço: Sede da Administração: Avenida Acioni Souza Filho (Beira-Mar de São José), n° 403, 2º andar, Praia Comprida – São José.
                    </p>
                    <ul>
                        <li>Defesa Civil de São José</li>
                        <p>
                        Av. Acioni Souza Filho, 403 – Centro – São José/SC – CEP 88.103-790
                        <br />
                        <a href="https://api.whatsapp.com/send?phone=4833576267" target='_blank'>(48)3357-6267</a>
                        </p>
                        <li>Guarda Municipal de São José</li>
                        <p>
                        Rua Irmãos Vieira, 224 – Campinas – Cep: 88.101-290
                        <br />
                        <a href="https://api.whatsapp.com/send?phone=4832596160" target='_blank'>(48)3259-6160</a>
                        </p>
                        <li>Procon</li>
                        <p>
                        Avenida Beira-Mar de São José, entre o Centro Multiuso e a Olaria Beiramar
                        <br />
                        E-mail: <a href="mailto:Proconatendimento@pmsj.sc.gov.br">Proconatendimento@pmsj.sc.gov.br</a>
                        <br />
                        Telefone: (48)3288-4393
                        <br />
                        Atendimento mediante agendamento prévio pelo Whatsapp: <a href="https://api.whatsapp.com/send?phone=48984777790" target='_blank'>(48)98477-7790</a>, de segunda a sexta-feira, das 13h às 17h.
                        </p>
                    </ul>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextSeguranca