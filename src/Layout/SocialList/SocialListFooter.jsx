import { AiFillFacebook,
    AiFillInstagram }
from 'react-icons/ai';
import { GrYoutube } from  'react-icons/gr'
import { IoLogoWhatsapp } from 'react-icons/io'

import '../../Styles/SocialListFooter.css'

const SocialListFooter = () => {
  return (
    <div className='social_midia'>
        <span>
            <a href="https://www.facebook.com/prefeituradesaojose"><AiFillFacebook /></a> 
        </span>
        <span>
        <a href="https://www.instagram.com/prefeituradesaojose/"><AiFillInstagram /></a> 
        </span>
        <span>
        <a href="https://www.youtube.com/@PrefeituraMunicipaldeSaoJose"><GrYoutube /></a> 
        </span>
        <span>
        <a href="https://api.whatsapp.com/send/?phone=5548988075743&text&type=phone_number&app_absent=0"><IoLogoWhatsapp /></a> 
        </span>
    </div>

  )
}

export default SocialListFooter