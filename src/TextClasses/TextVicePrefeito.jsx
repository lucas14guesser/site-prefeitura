import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../Styles/VicePrefeito.css'

const TextVicePrefeito = () => {
  return (
    <div className='vice-prefeito_container'>
        <div className="main_vice-prefeito">
            <Container>
                <div className="text_prefeito">
                    <Link to="/" className='link_vice-prefeito'>Home</Link>/<Link to='/gabinete-do-vice-prefeito' className='link_vice-prefeito'>Gabinete do Vice Prefeito</Link>

                    <h4>Gabinete do Vice Prefeito</h4>
                    
                    <div className="text_prefeito__sec">
                        <img src="../img/prefeitos/vice-prefeito.png" alt="Foto do vice prefeito Michel" />
                        <p>Formado em Gestão Pública, Michel Schlemper foi eleito vereador por São José em 2012 e reeleito em 2016. Em 2019, Michel Schlemper assumiu a presidência da Câmara, modernizando a gestão e proporcionando mais conectividade com o cidadão, a exemplo da implantação do Parlamento Digital e do retorno da TV Câmara.
                        <br /><br />
                        No Executivo Municipal, atuou como secretário de Administração; de Transporte; de Comunicação Social; de Governo; de Desenvolvimento Econômico, Ciência e Tecnologia e chefe de Gabinete.
                        <br /><br />
                        Ao lado de Orvino, planeja implementar várias ferramentas para modernizar a gestão e facilitar o acesso dos josefenses aos serviços. Entre as propostas da atual Administração está a Prefeitura Digital, reduzindo os processos físicos.</p>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextVicePrefeito