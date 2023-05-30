import React from 'react';
import SocialListFooter from '../SocialList/SocialListFooter';
import '../../Styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer_main">
      <div className='footer_info'>
        <h4>Notícias</h4>
        <ul className='footer_table'>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
        </ul>
        <h4>Servidor</h4>
        <ul className='footer_service_table'>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Lorem</a></li>
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
