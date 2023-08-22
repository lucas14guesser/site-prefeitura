import React from 'react'

import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti'

import { IoLogoInstagram } from 'react-icons/io'

import { RiYoutubeLine } from 'react-icons/ri'


import '../../Styles/navbar/SocialListNavBar.css'

const TextSocialListNavBar = () => {
  return (
    <div className='social_media_nav'>
        <a href="https://www.youtube.com/@PrefeituraMunicipaldeSaoJose" target='_blank' title='Youtube'><RiYoutubeLine /></a>
        <a href="https://twitter.com/saojose_pmsj" target='_blank' title='Instagram'><TiSocialTwitter /></a>
        <a href="https://www.facebook.com/prefeituradesaojose" target='_blank' title='Facebook'><TiSocialFacebook /></a>
        <a href="https://www.instagram.com/prefeituradesaojose/" target='_blank' title='Instagram'><IoLogoInstagram /></a>
    </div>
  )
}

export default TextSocialListNavBar