import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/secretarias/Secretarias.css'

const MeioAmbiente = () => {
  return (
    <div className='secretarias_container'>
        <div className="main_secretarias">
            <Container>
                <div className="text_secretarias">
                    <Link to="/" className='link_secretarias'>Home</Link>/<Link to='/fmads' className='link_secretarias'>Fundação Municipal do Meio Ambiente e Desenvolvimento Sustentável</Link>

                    <h4>Fundação Municipal do Meio Ambiente e Desenvolvimento Sustentável</h4>
                    
                    <h6>Comunicado</h6>

                    <p>
                    A Fundação Municipal do Meio Ambiente e Desenvolvimento Sustentável (FMADS) informa aos consultores e empreendedores que, a abertura e anexo de processos, só serão recebidos através de protocolo eletrônico conforme Portaria nº 014/2022.
                    </p>
                    <br /><br />
                    <p>
                    O sistema eletrônico Sinfat Municipal recebe os protocolos eletrônicos para novos processos como Certidão Ambiental de Atividade Não Constante; Certidão de Conformidade Ambiental; Autorização Ambiental; Licenciamento Ambiental (LAP,LAI,LAO). Vale destacar que os pedidos de certidões de Tratamento Acústico (CTA), Certidão de Olho no Óleo, Autorização de Publicidade (AuP) e Autorização de Corte de Árvores Isoladas em Área Urbana (AuCA) de espécies nativas que não se enquadre como fragmento florestal e não estejam vinculados a atividade licenciável, também possui seu protocolo de forma on-line através do sistema padrão de protocolo da prefeitura.
                    </p>
                    <br /><br />
                    <p>
                    Além disso, conforme a Instrução Normativa n. 14/2018 do IBAMA, fica estabelecido que os requerimentos para corte de árvores nativas vinculadas a licenciamento, em área não urbanizada ou vinculada a licenciamento, devem ser realizados exclusivamente por meio do Sistema Nacional de Controle da Origem dos Produtos Florestais – SINAFLOR.
                    </p>

                    <h6>Sobre a Fundação</h6>

                    <p>
                    Desenvolver projetos, políticas e normas relativas ao meio ambiente, assegurando a preservação, a recuperação e a exploração racional dos recursos naturais do município e permitindo que o meio ambiente seja um dos agentes do desenvolvimento econômico, gerador de emprego, renda e melhor qualidade de vida.
                    </p>

                    <h6>Superintendente Gabriela Brasil dos Anjos</h6>
                    <div className="text_secretarias__sec">
                        <img src="../img/other/gabriela.png" alt="Foto da superintendente Gabriela Brasil dos Anjos" />
                        <p>Graduada em Ciências Biológicas pela Universidade Federal de Santa Catarina, especialista em Licenciamento Ambiental pelo CESUSC e mestre em Biotecnologia pela Universidade Federal de Santa Catarina. Exerceu os cargos de gerente de Licenciamento Ambiental Rural e diretora de Regularização Ambiental do Instituto do Meio Ambiente de Santa Catarina (IMA), sendo servidora efetiva do Estado de Santa Catarina desde 2005. Participa como membro dos seguintes conselhos e comissões: Associação Brasileira de Entidades Estaduais de Meio Ambiente (Abema), Conselho Estadual de Meio Ambiente (Consema), Câmara Técnica Agroflorestal (CTAflo), Câmara Técnica de Licenciamento (CTL), Conselho Nacional de Meio Ambiente (Conama), Câmara Técnica de Florestas (CTFlor), Conselho Desenvolvimento Rural de Santa Catarina (CDERural), Câmara Técnica Estadual de Suinocultura, Comitê Estadual de Gestão Florestal, Grupo Gestor Estadual do Cadastro Ambiental Rural (CAR), Comitê Estadual de Biogás, membro do Gabinete de Crise Hídrica Estadual, Comissão Central de Licenciamento Ambiental (CCLA/IMA) e Câmara Técnica de Compensação Ambiental (CTCA/IMA).</p>
                    </div>
                    
                    <h6>Superintendente Adjunto Agostinho Mignoni Júnior</h6>
                    <div className="text_secretarias__sec">
                        <img src="../img/other/agostinho.png" alt="Foto do superintendente adjunto Agostinho Mignoni Júnir" />
                        <p>Graduado em Geografia e Gestão Ambiental, Agostinho Mignoni Júnior possui pós-graduação em Gestão Ambiental e Políticas Públicas. Paisagista e ambientalista, atuou como coordenador técnico do Parque Ambiental dos Sabiás, diretor do Horto Florestal, consultor técnico na Fundação Municipal do Meio Ambiente e Agricultura (FMA/Pedra Branca, hoje Fundação Municipal do Meio Ambiente e Desenvolvimento Sustentável), diretor operacional na Fundação do Meio Ambiente e Desenvolvimento Sustentável. Agostinho também trabalhou como assessor parlamentar na Câmara de Vereadores; diretor operacional na Secretaria Municipal de Infraestrutura; e  coordenador geral de segurança na Secretaria Municipal de Segurança, Defesa Social e Trânsito.</p>
                    </div>
                    
                    <h6>Contato</h6>

                    <p>
                        Sede da Fundação Municipal do Meio Ambiente e Desenvolvimento Sustentável
                        <br /><br />
                        Telefone: (48) 3288-4313
                        <br /><br />
                        Whatsapp para atendimento: <a href="https://api.whatsapp.com/send?phone=48984722448" target='_blank'>(48)9 8472-2448</a>
                        <br /><br />
                        E-mail: <a href="mailto:adm.fmads@pmsj.sc.gov.br">adm.fmads@pmsj.sc.gov.br</a>
                        <br /><br />
                        Endereço: Rua Getúlio Vargas, 578 – Praia Comprida – CEP 88103-400
                    </p>
                    <p>
                        Jardim Botânico Municipal
                        <br /><br />
                        Telefone: (48) 3288-4313
                        <br /><br />
                        E-mail: <a href="mailto:jardimbotanico@pmsj.sc.gov.br">jardimbotanico@pmsj.sc.gov.br</a>
                        <br /><br />
                        Endereço: Rua Cauassú, s/nº – Potecas – CEP 88103-400
                    </p>
                    <p>
                        Parque Ambiental dos Sabiás / Horto Florestal
                        <br /><br />
                        Telefone: (48) 3288-4313
                        <br /><br />
                        E-mail: <a href="mailto:jardimbotanico@pmsj.sc.gov.br">jardimbotanico@pmsj.sc.gov.br</a>
                        <br /><br />
                        Endereço: Rua Francisco Inácio do Nascimento, s/nº – Forquilhas – CEP 88107-500
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default MeioAmbiente