import React from 'react'

import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../Styles/EspelhoPonto.css'

const TextEspelhoPonto = () => {
  return (
    <div className='esp_pont_container'>
        <div className="main_esp_pont">
            <Container>
                <div className="text_esp_pont">
                    <Link to='/' className='link_esp_pont'>Home</Link>/<Link to='/portal-servidor' className='link_esp_pont'>Portal do Servidor</Link>/<Link to='/espelho-ponto' className='link_esp_pont'>Espelho Pontoe</Link>

                    <h4>Espelho Ponto</h4>

                    <p>
                        Para o primeiro acesso é necessário clicar em “Esqueceu a Senha”. Será encaminhado um e-mail no endereço que está cadastro nos seus dados funcionais da Diretoria de Recursos Humano – SMA.
                    </p>

                    <div className="ident_img_esp_pont">
                        <img src="../img/icons/linkEspelho1.png" alt="Imagem ilustrativa 1 do espelho ponto" />
                    </div>

                    <div className="ident_access_esp_pont">
                        <h5>
                            <a href="https://espelho.saojose.sc.gov.br/?_ga=2.26155261.1518638583.1687451403-1318598864.1684797233&_gl=1*1mfbbcz*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NTYwOTMuMC4wLjA." target='_blank'>Acesso ao Espelho</a>
                        </h5>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextEspelhoPonto