import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../Styles/cidadaoComponent/cidadaoComponent.css'

const Procon = () => {
  return (
    <div className='cidadao-component_container'>
        <div className="main_cidadao-component">
            <Container>
                <div className="text_cidadao-component">
                    <Link to="/" className='link_cidadao-component'>Home</Link> / <Link to='/procon' className='link_cidadao-component'>Procon Municipal de São José</Link>

                    <h4>Procon Municipal de São José</h4>

                    <img src="../img/procon/procon-logo-3.png" alt="procon" />

                    <p>
                        O Procon é um órgão público responsável por proteger e defender os direitos dos consumidores. Ele é vinculado à Secretaria de Segurança, defesa Social e Trânsito do Município de São José e tem como objetivo principal garantir a relação justa e equilibrada entre consumidores e fornecedores de produtos e serviços.
                        <br /><br />

                        Entre as principais funções do Procon estão:
                        <br /><br />
                        <ul>
                            <li>Receber e apurar denúncias de consumidores;</li>
                            <li>Fiscalizar estabelecimentos comerciais para verificar se estão cumprindo as normas de proteção ao consumidor;</li>
                            <li>Orientar os consumidores sobre seus direitos;</li>
                            <li>Mediar conflitos entre consumidores e fornecedores;</li>
                            <li>Aplicar sanções administrativas em caso de descumprimento das normas de proteção ao consumidor.</li>
                        </ul>
                        <br /><br />
                        O Procon é um importante instrumento de defesa dos direitos do consumidor, garantindo que os fornecedores de produtos e serviços cumpram as leis e normas de proteção ao consumidor e que os consumidores sejam tratados com respeito e justiça.
                        <br /><br />
                        Diretor do Procon: Luiz Cesar dos Santos Vieira Filho (Cesinha)
                    </p>
                    <div className="atend_cidadao-component">
                        <h4>Canais de Atendimento:</h4>

                        <p>
                            <br />
                            Telefone: (48) 3288-4393
                            <br /><br />
                            WhatsApp: <a href="https://api.whatsapp.com/send?phone=48984777790" target='_blank'>(48) 98477-7790</a>
                            <br /><br />
                            Horário de atendimento presencial, através de agendamento: De segunda a sexta-feira, das 12h às 18h.
                            <br /><br />
                            Local: Avenida Acioni Souza Filho, 2114, Beira-Mar de São José – entre o Centro Multiuso e a Olaria Beiramar.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Procon