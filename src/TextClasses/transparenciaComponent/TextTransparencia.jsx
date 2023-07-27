import React from 'react'

import { Link } from 'react-router-dom'

import TransparenciaLinkButton from '../../LinkButtons/TransparenciaLinkButton'
import OuvidoriaLinkButton from '../../LinkButtons/OuvidoriaLinkButton'
import DiOficialLinkButton from '../../LinkButtons/DiOficialLinkButton'
import RadarLinkButton from '../../LinkButtons/RadarLinkButton'

import { Container } from 'react-bootstrap'

import '../../Styles/transparenciaComponent/TransparenciaComponent.css'

const TextTransparencia = () => {
  return (
    <div className='transparencia-component_container'>
        <div className="main_transparencia-component">
            <Container>
                <div className="text_transparencia-component">

                    <Link to="/" className='link_transparencia-component'>Home</Link>/<Link to='/portal-transparencia' className='link_transparencia-component'>Portal da Transparência</Link>


                    <h4>Portal da Transparência</h4>

                    <div className="text_dif_transparencia-component">
                    <p>
                        Estado de Santa Catarina
                        <br />
                        Prefeitura Municipal de São José
                        <br />
                        Controle Interno e Auditoria
                    </p>
                    </div>
                    <ul>
                        <li><TransparenciaLinkButton /></li>
                        <li><RadarLinkButton /></li>
                        <li><OuvidoriaLinkButton /></li>
                        <li><DiOficialLinkButton /></li>
                    </ul>

                    <p>
                        Solicitações da Lei de Acesso de forma eletrônica e por telefone, utilizar o sistema da ouvidoria, para presencial utilizar o Centro de Antedimento do Cidadão que funciona das 8h as 19h
                        <br /><br />
                        Transparência e Lei de Acesso a Informação
                        <br /><br />
                        A <a href="http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm" target='_blank'>Lei Federal nº 12.527 de 18 de novembro de 2011</a>, Lei de Acesso a Informação e a <a href="http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp131.htm" target='_blank'>Lei Complementar Federal n° 131 de 27 de maio de 2009</a>, Lei da Transparência Pública, sancionadas pelo Presidente da República, têm o propósito de regulamentar o direito constitucional da Transparência e do acesso às informações públicas e seus dispositivos são aplicáveis aos três Poderes da União, Estados, Distrito Federal e Municípios.
                        <br /><br />
                        A publicação dessas leis é um importante passo para a consolidação democrática do Brasil e torna possível uma maior participação popular e um melhor controle social das ações governamentais.
                        <br /><br />
                        Este espaço foi disponibilizado para permitir a pesquisa das informações publicadas, ter acesso ao Decreto Municipal Regulamentador e solicitar informações que não estejam disponíveis nas ferramentas no sítio da Prefeitura.
                        <br /><br />
                        Cabe salientar que como é uma legislação recente, estamos ainda fazendo ajustes para melhorar a transparência e o acesso a informação pelo Munícipe.
                        <br /><br />
                        <a href="https://www.saojose.sc.gov.br/images/uploads/geral/portaria_001_2012-ref_acesso_a-_inf1.pdf?_ga=2.102922880.1299611127.1686322493-1296335673.1684438297&_gl=1*zd7a5t*_ga*MTI5NjMzNTY3My4xNjg0NDM4Mjk3*_ga_Y6Q5YHNV0H*MTY4NjMzMTY3MC40OC4xLjE2ODYzMzM2NzMuMC4wLjA." target='_blank'>Portaria 001/2012 – Estabelece valor de fotocópia de documentos através do acesso a informação</a>
                        <br /><br />
                        <a href="https://www.saojose.sc.gov.br/images/uploads/geral/decreto_37065_reg_lei_de_acesso_a_inf1.pdf?_gl=1*o69e08*_ga*MTI5NjMzNTY3My4xNjg0NDM4Mjk3*_ga_Y6Q5YHNV0H*MTY4NjM0MDA0NS40OS4xLjE2ODYzNDAwNDkuMC4wLjA.&_ga=2.254955912.1299611127.1686322493-1296335673.1684438297" target='_blank'>Decreto 37.065 – Regulamenta a Lei de Acesso a Informação</a>
                        <br /><br />
                        Links:
                        <br /><br />
                        <h5>Downloads</h5>
                        <br />
                        <ul>
                            <li><a href="https://www.saojose.sc.gov.br/images/uploads/geral/TOMADA-DE-PRECOS-N-001-14-Entidades-Conveniadas-SJ-MERENDA.pdf?_gl=1*1a54nva*_ga*MTI5NjMzNTY3My4xNjg0NDM4Mjk3*_ga_Y6Q5YHNV0H*MTY4NjM0MDA0NS40OS4xLjE2ODYzNDAwNDkuMC4wLjA.&_ga=2.36396960.1299611127.1686322493-1296335673.1684438297" target='_blank'>Tomada de Preços Nº 001/2014 – Entidades Conveniadas – MERENDA ESCOLAR/FNDE</a></li>
                            <li><a href="https://www.saojose.sc.gov.br/images/uploads/geral/Lei-complementar-060.2013.pdf?_ga=2.99185566.1299611127.1686322493-1296335673.1684438297&_gl=1*12q8lbw*_ga*MTI5NjMzNTY3My4xNjg0NDM4Mjk3*_ga_Y6Q5YHNV0H*MTY4NjM0MDA0NS40OS4xLjE2ODYzNDI4NTUuMC4wLjA." target='_blank'>Lei complementar 060.2013 (Acrescenta artigos ao Código Tributário Municipal)</a></li>
                            <li><a href="https://www.saojose.sc.gov.br/images/uploads/geral/decreto_cronograma_contabeis.pdf?_ga=2.94582684.1299611127.1686322493-1296335673.1684438297&_gl=1*apxkhv*_ga*MTI5NjMzNTY3My4xNjg0NDM4Mjk3*_ga_Y6Q5YHNV0H*MTY4NjM0MDA0NS40OS4xLjE2ODYzNDMxOTYuMC4wLjA." target='_blank'>Cronograma_de ações para implantação de procedimentos contábeis padronizados</a></li>
                            <li><a href="https://www.saojose.sc.gov.br/images/uploads/geral/bal_prev_2011.pdf?_ga=2.32641726.1299611127.1686322493-1296335673.1684438297&_gl=1*12jptgt*_ga*MTI5NjMzNTY3My4xNjg0NDM4Mjk3*_ga_Y6Q5YHNV0H*MTY4NjM0MDA0NS40OS4xLjE2ODYzNDMxOTYuMC4wLjA." target='_blank'>Balancete Mensal da Autarquia São José Previdência – Exercício 2011</a></li>
                            <li><a href="https://www.saojose.sc.gov.br/images/uploads/geral/relatorios-2009-2010-2011.pdf?_ga=2.32641726.1299611127.1686322493-1296335673.1684438297&_gl=1*12jptgt*_ga*MTI5NjMzNTY3My4xNjg0NDM4Mjk3*_ga_Y6Q5YHNV0H*MTY4NjM0MDA0NS40OS4xLjE2ODYzNDMxOTYuMC4wLjA." target='_blank'>Relatórios de Edificações – SUS</a></li>
                            <li><a href="https://www.saojose.sc.gov.br/images/uploads/geral/documentosprocesso.pdf?_ga=2.57742634.1299611127.1686322493-1296335673.1684438297&_gl=1*1u9qh87*_ga*MTI5NjMzNTY3My4xNjg0NDM4Mjk3*_ga_Y6Q5YHNV0H*MTY4NjM0MDA0NS40OS4xLjE2ODYzNDMxOTYuMC4wLjA." target='_blank'>Documentos para abertura de processos</a></li>
                            <li><a href="https://saojose.sc.gov.br/wp-content/uploads/2023/02/TabelaCosip.pdf" target='_blank'>Tabela COSIP</a></li>
                        </ul>               
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextTransparencia