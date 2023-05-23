import { AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterSquare }
from 'react-icons/ai';
import { TfiYoutube } from  'react-icons/tfi'

import '../../Styles/SocialListNavBar.css'

const SocialListNavBar = () => {
  return (
    <div className='social_media_nav'>
        <span><a href=""><AiFillFacebook /></a></span>
        <span><a href=""><AiFillInstagram /></a></span>
        <span><a href=""><TfiYoutube /></a></span>
        <span><a href=""><AiFillTwitterSquare /></a></span>
    </div>
  )
}

export default SocialListNavBar