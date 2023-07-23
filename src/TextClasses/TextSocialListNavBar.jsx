import React from 'react'

import { TiSocialFacebook } from 'react-icons/ti'

import { IoLogoInstagram,  } from 'react-icons/io'

import { RiYoutubeLine } from 'react-icons/ri'


import '../Styles/SocialListNavBar.css'

const TextSocialListNavBar = () => {
  return (
    <div className='social_media_nav'>
        <span><a href="https://www.youtube.com/@PrefeituraMunicipaldeSaoJose" target='_blank' title='Youtube'><RiYoutubeLine /></a></span>
        <span><a href="https://www.facebook.com/prefeituradesaojose" target='_blank' title='Facebook'><TiSocialFacebook /></a></span>
        <span><a href="https://www.instagram.com/prefeituradesaojose/" target='_blank' title='Instagram'><IoLogoInstagram /></a></span>
    </div>
  )
}

export default TextSocialListNavBar