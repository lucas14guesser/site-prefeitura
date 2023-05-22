import '../../Styles/Footer.css'
import SocialList from '../SocialList/SocialList'

const Footer = () => {
  return (
    <div className="footer_main">
      <div className='footer_info'>
        <h4>Notícias</h4>
        <ul className='footer_table'>
          <li>Diário oficial</li>
          <li>Todas as notícias</li>
          <li>Mídia</li>
          <li>Rádio</li>
        </ul>
        <h4>Servidor</h4>
        <ul className='footer_table'>
          <li>Portal do servidor</li>
          <li>Intranet</li>
          <li>Webmail</li>
        </ul>
      </div>
      <div className="footer_about">
        <h4>Sobre a PMSJ</h4>
        <ul className='footer_about_table'>
          <li>Estrutura organizacional</li>
          <li>Contatos</li>
          <li>Pró-cidadão</li>
          <li>Leis municipais</li>
          <li>Transparência</li>
          <li>Ouvidoria</li>
          <li>Editais</li>
        </ul>
        <p>Mapa de Navegação</p>
      </div>
      <div className="footer_services">
        <h4>Serviços</h4>
        <ul className='footer_services_table'>
          <li>Todos os serviços</li>
          <li>Geoprocessamento</li>
          <li>Coleta de lixo</li>
          <li>Horário de ônibus</li>
          <li>Biblioteca SME</li>
          <li>Calendário Oficial</li>
        </ul>
        <h5>Siga-nos</h5>
        <SocialList />
      </div>
    </div>
  )
}

export default Footer