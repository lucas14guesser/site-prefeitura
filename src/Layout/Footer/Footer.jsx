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
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
        </ul>
        <p><a href="">Lorem</a></p>
      </div>
      <div className="footer_services">
        <h4>Serviços</h4>
        <ul className='footer_services_table'>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
        </ul>
        <h5>Redes sociais</h5>
        <SocialListFooter />
      </div>
    </div>
  );
}

export default Footer;
