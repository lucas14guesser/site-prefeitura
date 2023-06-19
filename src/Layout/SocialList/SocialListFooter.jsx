import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi'

import '../../Styles/SocialListFooter.css'

const SocialListFooter = () => {
  return (
    <div className='social_midia'>
        <span><a href="https://api.whatsapp.com/send/?phone=5548988075743&text&type=phone_number&app_absent=0" target='_blank' title='WhatsApp'><AiOutlineWhatsApp /></a></span>
        <span><a href="https://www.youtube.com/@PrefeituraMunicipaldeSaoJose" target='_blank' title='Youtube'><AiOutlineYoutube className='social_midia_ytb'/></a></span>
        <span><a href="https://www.facebook.com/prefeituradesaojose" target='_blank' title='Facebook'><AiOutlineFacebook /></a></span>
        <span><a href="https://www.instagram.com/prefeituradesaojose/" target='_blank' title='Instagram'><AiOutlineInstagram /></a></span>
        <span><a href="https://linktr.ee/prefeiturasaojose" target='_blank' title='Links'><BiLinkExternal /></a></span>

    </div>

  )
}

export default SocialListFooter