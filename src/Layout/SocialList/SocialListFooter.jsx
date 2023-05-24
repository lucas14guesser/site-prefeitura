import { AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterSquare }
from 'react-icons/ai';
import { GrYoutube } from  'react-icons/gr'

import '../../Styles/SocialListFooter.css'

const SocialListFooter = () => {
  return (
    <div className='social_midia'>
        <span>
            <a href="#"><AiFillFacebook /></a> 
        </span>
        <span>
        <a href="#"><AiFillInstagram /></a> 
        </span>
        <span>
        <a href="#"><GrYoutube /></a> 
        </span>
        <span>
        <a href="#"><AiFillTwitterSquare /></a> 
        </span>
    </div>

  )
}

export default SocialListFooter