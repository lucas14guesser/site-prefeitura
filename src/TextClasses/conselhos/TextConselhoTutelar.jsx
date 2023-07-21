import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../Styles/conselhos/Conselho.css'

const TextConselhoTutelar = () => {
  return (
    <div className='conselho-container'>
        <div className="main-conselho">
            <Container>
                <div className="main-conselho__text">
                    <Link to="/" className='main-conselho__text__link'>Home</Link>/<Link to='/conselho-tutelar' className='main-conselho__text__link'>Conselho Tutelar</Link>

                    <h4>Conselho Tutelar</h4>

                    <h6>CONSELHOS TUTELARES DE SÃO JOSÉ</h6>

                    <h6>NOTA OFICIAL:</h6>

                    <h6>
                        <a href="http://www.pmsj.sc.gov.br/wp-content/uploads/2015/03/nota.pdf" target='_blank'>Nota</a>
                    </h6>

                    <h6>CONSELHO TUTELAR DE SÃO JOSE</h6>

                    <p>
                        O Conselho Tutelar conforme o art. 131, do Estatuto da Criança e do Adolescente “é órgão permanente e autônomo, não jurisdicional encarregado pela sociedade de zelar pelo cumprimento dos direitos da criança e do adolescente, definidos nesta lei”.
                        <br /><br />
                        É espaço de proteção e garantia dos direitos da criança e do adolescente no município.
                        <br /><br />
                        Em São José temos 2 (dois) Conselhos Tutelares (Sede e Barreiros), compostos, cada um deles,  por 5 conselheiros eleitos após aprovação em processo seletivo de capacidade para, caso a caso, zelar pela garantia dos direitos individuais de crianças e adolescentes e a cobrança eficaz dos deveres correspondentes.
                    </p>

                    <h6>São atribuições dos conselheiros:</h6>

                    <ul>
                        <li>Requisitar certidões de nascimento e óbito de criança ou adolescente;</li>
                        <li>Requisitar serviços públicos nas áreas de saúde, educação, serviço social, previdência, trabalho e segurança;</li>
                        <li>Encaminhar ao Ministério Público notícia do fato que constitua infração administrativa ou penal contra os direitos da criança ou adolescente;</li>
                        <li>Expedir notificações;</li>
                        <li>Atender e aconselhar os pais ou responsáveis;</li>
                        <li>Atender crianças e adolescentes que tenham seus direitos violados ou ameaçados por ação ou omissão da sociedade ou do Estado, por falta, omissão ou abuso dos pais ou responsáveis, ou mesmo em razão de sua própria conduta;</li>
                        <li>Encaminhar à autoridade judiciária os casos de sua competência;</li>
                        <li>Assessorar a Prefeitura na elaboração da proposta orçamentária para planos e programas de atendimento dos direitos da criança e do adolescente;</li>
                        <li>Atuar em nome da pessoa e da família contra a violação dos direitos previstos na Constituição Federal;</li>
                        <li>Representar o Ministério Público, para efeitos das ações de perda ou suspensão do poder familiar.</li>
                    </ul>

                    <h6>CONSELHO TUTELAR – SEDE</h6>

                    <p>
                        Endereço: Rua Leo Augusto Petry, nº 10 – Praia Comprida – São José/SC – CEP 88103-610
                        <br /><br />
                        E-mails: <a href="mailto:conselhosjsede@gmail.com">conselhosjsede@gmail.com</a> e <a href="mailto:ctsede@pmsj.sc.gov.br">ctsede@pmsj.sc.gov.br</a>
                        <br /><br />
                        Telefone: 3259-8972 
                    </p>

                    <h6>Conselheiros Tutelares:</h6>

                    <ul>
                        <li>Caroline Nienchotter Goedert Gebauer;</li>
                        <li>Thais Monique da Silva;</li>
                        <li>Juliana Silveira da Silva Léffer;</li>
                        <li>Fernanda Péres;</li>
                        <li>Diogo Luiz Filippi.</li>
                    </ul>

                    <h6>CONSELHO TUTELAR – BARREIROS</h6>

                    <p>
                        Endereço: Rua Domingos Pedro Hermes, 10 Jardim Cidade de Florianópolis, CEP 88111-330
                        <br /><br />
                        Email: <a href="mailto:ctbarreiros@pmsj.sc.gov.br">ctbarreiros@pmsj.sc.gov.br</a>
                        <br /><br />
                        Telefone: (48) 3258-8945
                    </p>

                    <h6>Conselheiros Tutelares:</h6>

                    <ul>
                        <li>Rodrigo Almeida de Freitas;</li>
                        <li>Danielle Silva Castro;</li>
                        <li>Juliana Izelda Oliveira;</li>
                        <li>Jefferson Marcos Félix;</li>
                        <li>Andréa da Costa Santos. </li>
                    </ul>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextConselhoTutelar