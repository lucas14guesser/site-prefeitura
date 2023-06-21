import React from 'react'

import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare, FaYoutubeSquare } from 'react-icons/fa'

import '../Styles/SocialListNavBar.css'

const TextSocialListNavBar = () => {
  return (
    <div className='social_media_nav'>
        <span><a href="https://api.whatsapp.com/send/?phone=5548988075743&text&type=phone_number&app_absent=0" target='_blank' title='WhatsApp'><FaWhatsappSquare /></a></span>
        <span><a href="https://www.youtube.com/@PrefeituraMunicipaldeSaoJose" target='_blank' title='Youtube'><FaYoutubeSquare /></a></span>
        <span><a href="https://www.facebook.com/prefeituradesaojose" target='_blank' title='Facebook'><FaFacebookSquare /></a></span>
        <span><a href="https://www.instagram.com/prefeituradesaojose/" target='_blank' title='Instagram'><FaInstagramSquare /></a></span>
    </div>
  )
}

export default TextSocialListNavBar