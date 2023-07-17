import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../Styles/Prefeito.css'

const TextPrefeito = () => {
  return (
    <div className='prefeito_container'>
        <div className="main_prefeito">
            <Container>
                <div className="text_prefeito">
                    <Link to="/" className='link_prefeito'>Home</Link>/<Link to='/prefeito' className='link_prefeito'>Prefeito Orvino Coelho de Ávila</Link>

                    <h4>Prefeito Orvino Coelho de Ávila</h4>
                    
                    <div className="text_prefeito__sec">
                        <img src="../img/prefeitos/orvino.png" alt="Foto do prefeito Orvino" />
                        <p>Orvino Coelho de Ávila possui uma trajetória profissional dedicada a São José. Formado em técnico em Contabilidade e graduado em Direito pela UFSC, Orvino foi eleito por 10 mandatos consecutivos como vereador por São José. A primeira vez foi em 1976, com apenas 21 anos de idade. Presidiu a Câmara Municipal por quatro biênios.
                        <br /><br />
                        Além disso, exerceu funções no Executivo, como procurador concursado do município, secretário da SUSP, secretário da Receita e procurador-geral de São José. Ao longo de sua trajetória profissional, também atuou como presidente da Ceasa e advogado da Cidasc.
                        <br /><br />
                        Orvino assume o compromisso de desenvolver ainda mais São José, tendo como prioridade a saúde, a educação, a segurança e a infraestrutura.</p>
                    </div>

                    <h6>Contato</h6>

                    <p>E-mail: <a href="mailto:gabinete@pmsj.sc.gov.br">gabinete@pmsj.sc.gov.br</a></p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextPrefeito