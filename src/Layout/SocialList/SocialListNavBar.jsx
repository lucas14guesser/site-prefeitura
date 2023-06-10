import { AiFillInstagram, AiFillFacebook, AiFillYoutube, AiOutlineLink } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io'

import '../../Styles/SocialListNavBar.css'

const SocialListNavBar = () => {
  return (
    <div className='social_media_nav'>
        
        <span><a href="https://www.facebook.com/prefeituradesaojose" target='_blank' title='Facebook'><AiFillFacebook /></a></span>
        <span><a href="https://www.instagram.com/prefeituradesaojose/" target='_blank' title='Instagram'><AiFillInstagram /></a></span>
        <span><a href="https://www.youtube.com/@PrefeituraMunicipaldeSaoJose" target='_blank' title='Youtube'><AiFillYoutube /></a></span>
        <span><a href="https://api.whatsapp.com/send/?phone=5548988075743&text&type=phone_number&app_absent=0" target='_blank' title='WhatsApp'><IoLogoWhatsapp /></a></span>
        <span><a href="https://linktr.ee/prefeiturasaojose" target='_blank' title='Links'><AiOutlineLink /></a></span>
    </div>
  )
}

export default SocialListNavBar