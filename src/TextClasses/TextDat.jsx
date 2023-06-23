import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../Styles/Dat.css'

const TextDat = () => {
  return (
    <div className='dat_container'>
        <div className="main_dat">
            <Container>
                <div className="text_dat">
                    <div>
                        <Link to="/" className='link_dat'>Home</Link>/<Link to='/dat' className='link_dat'>Declaração de Acidente de Trânsito - DAT</Link>
                    </div>

                    <h4>Declaração de Acidente de Trânsito - DAT</h4>

                    <p>
                        <a href="http://dat.pmsj.sc.gov.br/">Declaração de Acidente de Trânsito – DAT (Acesse aqui)</a>
                        <br /><br />
                        Esta ferramenta permite ao cidadão registrar sua declaração de acidente de trânsito pela internet de forma rápida e segura no site da Guarda Municipal de São José, disponibilizado pela Prefeitura de São José em seu site através do ícone DAT – Declaração de Acidente de Trânsito. Este procedimento é importante para que as viaturas da Guarda Municipal de São José fiquem livres para atendimento de ocorrências de maior necessidade, além de possibilitar a GMSJ ampliar seu patrulhamento preventivo por todo o município garantindo a sensação de segurança que todos desejam
                    </p>

                    <img src="../img/dat/datpg1.png" />

                    <p>
                        <h6>Bati meu veículo. Devo fazer a DAT online?</h6>
                        <br /><br />
                        Sim. Deve fazer a DAT (Declaração de Acidente de Trânsito) aquele condutor que, em via municipal, se envolveu em um acidente de trânsito: sem vítimas; que tenham gerado apenas danos aos veículos; que envolvam no máximo cinco (05) veículos; em que os veículos envolvidos possam rodar e liberar a via sem afetar a segurança.
                        <br /><br />
                        <h6>Em quais casos é obrigatória a presença de uma viatura policial no local do acidente?</h6>
                        <br /><br />
                        Em alguns casos de acidentes é obrigatória a presença de uma viatura policial para fazer o registro do acidente. Veja quais são eles:
                    </p>

                    <img src="../img/dat/guarda.png"/>

                    <p>
                        <h6>Ligar 153 GMSJ</h6>
                        <br /><br />
                        Acidentes em vias urbanas municipais sem vítimas (mesmo que ferimento leve) que tenham provocado danos ao meio ambiente e/ou ao patrimônio público; que estejam entre envolvidos pessoas alcoolizadas, condutores não habilitados ou veículos com licenciamento vencido; acidentes com veículos oficiais; acidentes envolvendo cinco (05) ou mais veículos.
                        <br /><br />
                        <h6>Ligar 190 PMSC</h6>
                        <br /><br />
                        Acidentes em vias urbanas municipais que resultem em feridos ou mortos;
                        <br /><br />
                        <h6>Ligar 191 PRF</h6>
                        <br /><br />
                        Acidentes que tenham ocorrido nas marginais ou rodovias federais como BR-101 e BR-282 que resultem em feridos ou mortos. Caso sejam só danos materiais o Boletim é feito somente no site da Policia Rodoviária Federal.
                        <br /><br />
                        <h6>Ligar 198 PMR</h6>
                        <br /><br />
                        Acidentes que tenham ocorrido nas rodovias estaduais como a SC-281 que resultem em feridos ou mortos. Caso sejam só danos materiais o Boletim é feito somente pelo site da Policia Militar Rodoviária.
                        <br /><br />
                        <h6>Dicas Importantes</h6>
                        <br /><br />
                        Em caso de colisão sem vítimas retire o veículo da via, estacionando em local seguro, o descumprimento dessa ação gera multa. Fique calmo e converse com o outro envolvido, acidentes acontecem e não adianta discutir.
                        <br /><br />
                        Se possível tire fotos do local do acidente e dos veículos. Caso o veículo não esteja andando e em local que atrapalhe o trânsito, solicite um guincho particular e acione a GMSJ pelo 153.
                    </p>

                    <img src="../img/dat/carroArrumado.png" />

                    <p>
                        <h6>E a seguradora vai aceitar a Declaração de Acidente de Trânsito feito pela internet?</h6>
                        <br /><br />
                        Todas as Declarações de Acidente de Trânsito realizadas pela internet passam por homologação da autoridade policial com jurisdição sobre a via para posterior liberação aos condutores, portanto a Declaração de Acidente de Trânsito tem a mesma validade para efeitos legais sendo sim aceitos pelas seguradoras.
                        <br /><br />
                        <h6>E como faço a Declaração de Acidente de Trânsito?</h6>
                        <br /><br />
                        Usando um smartphone ou computador clique no ícone DAT que você será redirecionado para o site da Guarda Municipal de São José.
                    </p>

                    <p>
                        <a href="https://dat.pmsj.sc.gov.br/declarante/declaracao" target='_blank'>
                            <img src="../img/dat/datInterface.webp" alt="dat-interface" />
                        </a>
                    </p>

                    <p>
                        O sistema é de fácil utilização, autoexplicativo e contem orientações do passo a passo necessário para o preenchimento da declaração. O condutor informará os seus dados, dos demais envolvidos, dos veículos, endereço e o relato do acidente ocorrido.
                        <br />
                        Ao finalizar, a declaração será encaminhada para validação e o solicitante receberá o protocolo do registro para posterior impressão.
                        <br /><br />
                        <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/11/PASSO-A-PASSO-E-DUVIDAS-FREQUENTES-DAT-GMSJ.pdf" target='_blank'>Passo a passo e dúvidas frequentes – DAT GMSJ (acesse aqui)</a>
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextDat