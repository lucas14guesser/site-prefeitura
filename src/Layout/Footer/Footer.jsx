import '../../Styles/Footer.css'
import SocialList from '../SocialList/SocialList'

const Footer = () => {
  return (
    <div className="footer_main">
      <div className='footer_info'>
        <h4>Notícias</h4>
        <ul className='footer_table'>
          <li><a href="#">Diário oficial</a></li>
          <li><a href="#">Todas as notícias</a></li>
          <li><a href="#">Mídia</a></li>
          <li><a href="#">Rádio</a></li>
        </ul>
        <h4>Servidor</h4>
        <ul className='footer_table'>
          <li><a href="#">Portal do servidor</a></li>
          <li><a href="#">Intranet</a></li>
          <li><a href="#">Webmail</a></li>
        </ul>
      </div>
      <div className="footer_about">
        <h4>Sobre a PMSJ</h4>
        <ul className='footer_about_table'>
          <li><a href="#">Estrutura organizacional</a></li>
          <li><a href="#">Contatos</a></li>
          <li><a href="#">Pró-cidadão</a></li>
          <li><a href="#">Leis municipais</a></li>
          <li><a href="#">Transparência</a></li>
          <li><a href="#">Ouvidoria</a></li>
          <li><a href="#">Editais</a></li>
        </ul>
        <p><a href="">Mapa de Navegação</a></p>
      </div>
      <div className="footer_services">
        <h4>Serviços</h4>
        <ul className='footer_services_table'>
          <li><a href="#">Todos os serviços</a></li>
          <li><a href="#">Geoprocessamento</a></li>
          <li><a href="#">Coleta de lixo</a></li>
          <li><a href="#">Horário de ônibus</a></li>
          <li><a href="#">Biblioteca SME</a></li>
          <li><a href="#">Calendário Oficial</a></li>
        </ul>
        <h5>Siga-nos</h5>
        <SocialList />
      </div>
    </div>
  )
}

export default Footer