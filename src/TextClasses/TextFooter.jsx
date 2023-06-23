import React from 'react'

import SocialListFooter from '../Layout/SocialList/SocialListFooter'
import '../Styles/Footer.css'

const TextFooter = () => {
  return (
    <div className="footer_main">
      <div className='footer_info'>
        <h4>Notícias</h4>
        <ul className='footer_table'>
          <li><a href="https://www.diariomunicipal.sc.gov.br/?r=site/portal&q=&id=&categoria=&dataInicial=&dataFinal=&excluiTermos=&codigoEntidade=251" target='_blank'>Diário Oficial</a></li>
          <li><a href="/construcao">Todas as Notícias</a></li>
          <li><a href="/construcao">Iniciativas e Destaques</a></li>
        </ul>
        <h4>Servidor</h4>
        <ul className='footer_service_table'>
          <li><a href="http://intradis.pmsj.sc.gov.br/inicio">Intranet</a></li>
          <li><a href="/portal-servidor">Portal do Servidor</a></li>
          <li><a href="https://email.fecam.org.br/" target='_blank'>Webmail</a></li>
          <li><a href="https://saojose.atende.net/autoatendimento" target='_blank'>Autoatendimento</a></li>
        </ul>
      </div>
      <div className="footer_about">
        <h4>Sobre a PMSJ</h4>
        <ul className='footer_about_table'>
          <li><a href="/cidade">A Cidade</a></li>
          <li><a href="/feriados">Feriados Municipais</a></li>
          <li><a href="/prefeitos">Relação de Prefeitos</a></li>
          <li><a href="/dados">São José em Dados</a></li>
          <li><a href="https://linktr.ee/prefeiturasaojose" target='_blank'>Links Úteis</a></li>
          <li><a href="/ouvidoria">Ouvidoria PMSJ</a></li>
          <li><a href="/portal-transparencia">Transparência</a></li>
        </ul>
        <p><a href="/construcao">Desenvolvimento</a></p>
      </div>
      <div className="footer_services">
        <h4>Serviços</h4>
        <ul className='footer_services_table'>
          <li><a href="/todos-os-servicos">Todos os Serviços</a></li>
          <li><a href="https://saojose.atende.net/autoatendimento/servicos/emissao-de-processo-digital" target='_blank'>Serviços do Cidadão</a></li>
          <li><a href="https://saojose.atende.net/autoatendimento/servicos/guias-de-iptu/detalhar/1" target='_blank'>IPTU</a></li>
          <li><a href="/sou-empresa">Sou Empresa</a></li>
          <li><a href="/construcao">Infraestrutura</a></li>
          <li><a href="/procon">Procon</a></li>
        </ul>
        <div className="footer_social">
          <h5>Redes sociais</h5>
          <SocialListFooter />
        </div>
      </div>
    </div>
  )
}

export default TextFooter