import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/conselhos/Conselho.css'

const TextUsuarioSevPublico = () => {
  return (
    <div className='conselho-container'>
        <div className="main-conselho">
            <Container>
                <div className="main-conselho__text">
                    <Link to="/" className='main-conselho__text__link'>Home</Link>/<Link to='/conselho-municipal-de-usuarios-dos-servicos-publicos' className='main-conselho__text__link'>Conselho Municipal de Usuários dos Serviços Públicos</Link>

                    <h4>Conselho Municipal de Usuários dos Serviços Públicos</h4>


                    <img src="../img/other/conselho-usuario-publico.png" alt="Banner do conselho de usuário público" className='main-conselho__text__image'/>
                    <p>
                        O Conselho de Usuário dos Serviços Públicos de São José – CMUSP/SJ é uma importante iniciativa criada com base na Lei Federal 13.460/2017, que visa promover a participação ativa dos cidadãos na gestão e no aprimoramento dos serviços públicos oferecidos pelo município de São José.
                        <br /><br />
                        Por meio do Decreto Municipal n°16902/2022, que regulamenta a lei federal, o CMUSP/SJ desempenha um papel fundamental na defesa dos direitos dos usuários, na melhoria da qualidade dos serviços públicos e na garantia de um atendimento eficiente e transparente.
                        <br /><br />
                        Este é um conselho bem diferente dos modelos tradicionais pois tem por finalidade acompanhar os serviços prestados pelo Município e propor melhorias, ideias de aprimoramento de serviços públicos para torná-los mais adequados à satisfação dos usuários.
                    </p>

                    <h6>Composto pela sociedade Civil</h6>

                    <p>
                        O Conselho é composto por representantes da sociedade civil, escolhidos de forma democrática, e tem como objetivo principal ampliar o diálogo entre os usuários e os gestores públicos. Ele atua como um canal de comunicação direta, permitindo que os cidadãos expressem suas opiniões, sugestões e reclamações em relação aos serviços prestados pelo município.
                        <br /><br />
                        Além disso, o CMUSP/SJ também tem o papel de fiscalizar a prestação dos serviços públicos, monitorando sua qualidade, cobrando melhorias e acompanhando o cumprimento das políticas públicas voltadas para o bem-estar da população. Dessa forma, o Conselho contribui para a efetiva participação cidadã na construção de uma cidade mais inclusiva, responsável e comprometida com o bem comum.
                        <br /><br />
                        A criação da política municipal de atendimento ao cidadão no município de São José, por meio do CMUSP/SJ, fortalece a importância da participação da sociedade na tomada de decisões e na formulação de políticas públicas.
                        <br /><br />
                        Essa iniciativa promove uma maior transparência e responsabilidade  por parte dos gestores públicos, buscando sempre aprimorar a qualidade dos serviços oferecidos e garantir a satisfação e o respeito aos direitos dos cidadãos.
                    </p>

                    <h6>Guia do Conselheiro</h6>

                    <p>
                        Este manual foi preparado para explicar como funcionam os Conselhos de Usuários de Serviços Públicos e como você pode participar por meio da plataforma virtual.
                        <br /><br />
                        Quantas vezes você já buscou um serviço público e pensou: “poxa, esse serviço poderia ser tão melhor se fizessem de outra forma!”.
                        <br /><br />
                        Pois agora, por meio dos conselhos de usuários, a sua opinião pode chegar diretamente aos ouvidos das pessoas responsáveis por formular e executar esses serviços.
                        <br /><br />
                        Sua opinião é, sim, fundamental para ajudar a sua comunidade e todos os demais usuários de serviços públicos a contarem com serviços cada vez mais ágeis, melhores e adequados às expectativas da população.
                        <br /><br />
                        Para acessar o guia, <a href="https://www.gov.br/ouvidorias/pt-br/ouvidorias/conselhos-de-usuarios/ConselhodeUsurioGuiadoUsurioDiagramado.pdf" target='_blank'>clique aqui.</a>
                    </p>

                    <h6>Composição do Conselho</h6>

                    <h6>Representantes da Administração pública municipal:</h6>

                    <p>
                        Da Secretaria de Governo: Elóia Rosa da Silva Oliveira (titular) e Raul Vieira Bento (suplente);
                        <br /><br />
                        Da Secretaria de Infraestrutura: Vinicius Chiquetti Teixeira (titular) e Edvaldo Bispo de Barros Júnior (suplente);
                        <br /><br />
                        Da Secretaria de Saúde: Juliana Vieira (titular) e Taiana de Melo Silva Rocha (suplente);
                        <br /><br />
                        Da Secretaria de Educação: João Machado Neto (titular) e João Batista Delanho (suplente);
                        <br /><br />
                        Da Secretaria de Segurança, Defesa Social e Trânsito: Mayara Orlandi da Silva (titular) e Cintia Luciane de Quadros Fagundes (suplente).
                    </p>

                    <h6>Representantes de entidades não governamentais:</h6>

                    <p>
                        Titulares:
                        <br /><br />
                        1 – Robson Caldas Fernandes;
                        <br /><br />
                        2 – Juliana Bilobran Miranda Caldas;
                        <br /><br />
                        3 – José Carlos de Sá Júnior;
                        <br /><br />
                        4 – Ivanice Weber;
                        <br /><br />
                        5 – Matheus Batista de Souza.
                        <br /><br />
                        Suplentes:
                        <br /><br />
                        1 – Jadir Abel;
                        <br /><br />
                        2 – Eliete de Fátima Gorges
                    </p>

                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextUsuarioSevPublico