import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/Simbolos.css'

const TextSimbolos = () => {
  return (
    <div className="text_simbol">
        <Link to="/">Home</Link>

        <h4>Símbolos do Município</h4>

        <p>
            O município de São José, localizado na Grande Florianópolis, é o quarto mais antigo de Santa Catarina e foi colonizado em 26 de outubro de 1750 por 182 casais açorianos, oriundos das Ilhas do Pico, Terceira, São Jorge, Faial, Graciosa e São Miguel, além de receber em 1829, o primeiro núcleo de colonização alemã do Estado.
        </p>
        <br /><br />

        <h6>Brasão Oficial PMSJ</h6>
        <div className="img_simbol">
            <img src="../img/simbolos/brasao_mini.png" alt="mini" />
            <img src="../img/simbolos/brasao_mini_cor.png" alt="mini_cor" />
            <br /><br />
            <img src="../img/simbolos/logo-pmsj-4.png" alt="logo" />
            <img src="../img/simbolos/logo-pmsj-1.png" alt="logo_cor" />
        </div>
        <div className='links_diversos'>
            <ul>
                <li><a href="https://saojose.sc.gov.br/images/uploads/geral/lei-brasao.pdf">Lei de criação do Brasão</a></li>
                <li><a href="http://saojose.sc.gov.br/images/uploads/geral/logo-pmsj.rar">Modelo Brasão</a></li>
            </ul>
        </div>
        <h6>Bandeira</h6>
        <div className='links_diversos'>
            <ul>
                <li><a href="https://saojose.sc.gov.br/images/uploads/geral/lei-bandeira.pdf">Lei de criação do Brasão</a></li>
                <li><a href="https://saojose.sc.gov.br/images/uploads/geral/lei-bandeira-alteracao.pdf">Modelo Brasão</a></li>
            </ul>
        </div>
        <h6>Ouvir Hino</h6>
        <div className='audio_simbol'>
            <audio className='custom_audio' controls>
                <source src='../audio/hinoSJ.weba' type='audio/mpeg'/>
                Seu navegador não suporta a reprodução de áudio
            </audio>
        </div>
        <h6>Lei de Criação do Hino</h6>
        <div className='links_diversos'>
            <ul>
                <li><a href="http://saojose.sc.gov.br/images/uploads/geral/hino.zip">Download (compactado)</a></li>
                <li><a href="http://saojose.sc.gov.br/images/uploads/geral/hino.mp3">Download (áudio)</a></li>
                <li><a href="https://saojose.sc.gov.br/images/uploads/geral/hino.pdf">Letra do Hino</a></li>
            </ul>
        </div>
    </div>
  )
}

export default TextSimbolos