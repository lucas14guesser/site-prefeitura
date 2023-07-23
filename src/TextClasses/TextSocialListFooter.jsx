import React from 'react'

import { TbBrandLinktree } from 'react-icons/tb'

import { TiSocialFacebook } from 'react-icons/ti'

import { IoLogoInstagram,  } from 'react-icons/io'

import { RiYoutubeLine } from 'react-icons/ri'

import '../Styles/SocialListFooter.css'

const TextSocialListFooter = () => {
  return (
    <div className='social_midia'>
        <span><a href="https://www.youtube.com/@PrefeituraMunicipaldeSaoJose" target='_blank' title='Youtube'><RiYoutubeLine /></a></span>
        <span><a href="https://www.facebook.com/prefeituradesaojose" target='_blank' title='Facebook'><TiSocialFacebook /></a></span>
        <span><a href="https://www.instagram.com/prefeituradesaojose/" target='_blank' title='Instagram'><IoLogoInstagram /></a></span>
        <span><a href="https://linktr.ee/prefeiturasaojose" target='_blank' title='Links'><TbBrandLinktree className='social-link'/></a></span>
    </div>
  )
}

export default TextSocialListFooter