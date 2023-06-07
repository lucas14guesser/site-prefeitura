import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/Procon.css'

const TextProcon = () => {
  return (
    <div className="text_procon">
        <Link to="/">Home</Link>

        <h4>Procon Municipal de São José</h4>

        <img src="../img/procon/procon-logo-3.png" alt="procon" />

        <h5>Importante: Fazer o agendamento via o site: <a href="https://agendamento.saojose.sc.gov.br/?_gl=1*x4l2h3*_ga*MTI5NjMzNTY3My4xNjg0NDM4Mjk3*_ga_Y6Q5YHNV0H*MTY4NTU1MjMwMS4zMC4xLjE2ODU1NTU1NTEuMC4wLjA.&_ga=2.254601416.1186840495.1685376409-1296335673.1684438297#/login"> agendamento.saojose.sc.gov.br</a></h5>

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
    <div className="atend_procon">
        <h4>Canais de Atendimento:</h4>

        <p>
            <br />
            Telefone: (48) 3288-4393
            <br /><br />
            WhatsApp: (48) 98477-7790
            <br /><br />
            Horário de atendimento presencial, através de agendamento: De segunda a sexta-feira, das 12h às 18h.
            <br /><br />
            Local: Avenida Acioni Souza Filho, 2114, Beira-Mar de São José – entre o Centro Multiuso e a Olaria Beiramar.
        </p>
    </div>
    </div>
  )
}

export default TextProcon