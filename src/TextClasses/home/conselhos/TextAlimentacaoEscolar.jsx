import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/conselhos/Conselho.css'

const TextAlimentacaoEscolar = () => {
  return (
    <div className='conselho-container'>
        <div className="main-conselho">
            <Container>
                <div className="main-conselho__text">
                    <Link to="/" className='main-conselho__text__link'>Home</Link>/<Link to='/conselho-de-alimentacao-escolar' className='main-conselho__text__link'>Conselho de Alimentação Escolar</Link>

                    <h4>Conselho de Alimentação Escolar</h4>

                    <p>
                        Representantes do Segmento do Poder Executivo –
                        <br /><br />
                        Titular – Angelise Bedin da Silva
                        <br /><br />
                        Suplente – Lenice Lúcia Cauduro da Silva
                        <br /><br />
                        Representantes do Segmento dos Professores da Educação Básica Pública  –
                        <br /><br />
                        Titular – Margarete Hauser
                        <br /><br />
                        Suplente – Lucia Viera      
                        <br /><br />
                        Titular  – Nerzi Maria de Souza Rodrigues 
                        <br /><br />
                        Suplente – Eduardo Bugs Gonçalves
                        <br /><br />
                        Representantes do Segmento de Pais de Alunos da Educação Básica Pública –
                        <br /><br />
                        Titular- Silvana Antoniolli Ramos
                        <br /><br />
                        Suplente- Victor Worner Leite
                        <br /><br />
                        Titular – Annelise de Souza Vargas
                        <br /><br />
                        Suplente- Dayse Gama Machado Silva
                        <br /><br />
                        Representantes do Segmento da Sociedade Civil –
                        <br /><br />
                        Titular – Olga Maria Reis   
                        <br /><br />
                        Suplente- Maria Edith Bridon da Silva 
                        <br /><br />
                        Titular – Yara Lents Alves  
                        <br /><br />
                        Suplente – Maria Madalena Stelmak
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextAlimentacaoEscolar