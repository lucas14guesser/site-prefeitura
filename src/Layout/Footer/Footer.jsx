import React from 'react';
import SocialListFooter from '../SocialList/SocialListFooter';
import '../../Styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer_main">
      <div className='footer_info'>
        <h4>Notícias</h4>
        <ul className='footer_table'>
          <li><a href="https://www.diariomunicipal.sc.gov.br/?r=site/portal&q=&id=&categoria=&dataInicial=&dataFinal=&excluiTermos=&codigoEntidade=251" target='_blank'>Diário Oficial</a></li>
          <li><a href="/noticias">Todas as Notícias</a></li>
          <li><a href="#">Iniciativas e Destaques</a></li>
          <li><a href="#">Publicações Legais</a></li>
        </ul>
        <h4>Servidor</h4>
        <ul className='footer_service_table'>
          <li><a href="">Portal do Servidor</a></li>
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
          <li><a href="https://saojose.sc.gov.br/ouvidoria/" target='_blank'>Ouvidoria PMSJ</a></li>
          <li><a href="https://saojose.sc.gov.br/portal-da-transparencia/" target='_blank'>Transparência</a></li>
        </ul>
        <p><a href="https://www.google.com/maps?ll=-27.609364,-48.626843&z=15&t=m&hl=pt-BR&gl=US&mapclient=embed&cid=549091403687192313" target='_blank'>Localização da PMSJ</a></p>
      </div>
      <div className="footer_services">
        <h4>Serviços</h4>
        <ul className='footer_services_table'>
          <li><a href="#">Todos os Serviços</a></li>
          <li><a href="https://saojose.atende.net/autoatendimento/servicos/emissao-de-processo-digital" target='_blank'>Serviços do Cidadão</a></li>
          <li><a href="https://saojose.atende.net/autoatendimento/servicos/guias-de-iptu/detalhar/1" target='_blank'>IPTU</a></li>
          <li><a href="#">Sou Empresa</a></li>
          <li><a href="#">Infraestrutura</a></li>
          <li><a href="/procon">Procon</a></li>
        </ul>
        <h5>Redes sociais</h5>
        <SocialListFooter />
      </div>
    </div>
  );
}

export default Footer;
