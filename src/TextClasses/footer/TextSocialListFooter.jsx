import React from 'react'

import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti'

import { IoLogoInstagram,  } from 'react-icons/io'

import { RiYoutubeLine } from 'react-icons/ri'

import '../../Styles/footer/SocialListFooter.css'

const TextSocialListFooter = () => {
  return (
    <div className='social_midia'>
        <span><a href="https://www.youtube.com/@PrefeituraMunicipaldeSaoJose" target='_blank' title='Youtube'><RiYoutubeLine /></a></span>
        <span><a href="https://twitter.com/saojose_pmsj" target='_blank' title='Instagram'><TiSocialTwitter /></a></span>
        <span><a href="https://www.facebook.com/prefeituradesaojose" target='_blank' title='Facebook'><TiSocialFacebook /></a></span>
        <span><a href="https://www.instagram.com/prefeituradesaojose/" target='_blank' title='Instagram'><IoLogoInstagram /></a></span>
    </div>
  )
}

export default TextSocialListFooter