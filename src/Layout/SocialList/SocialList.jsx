import { AiFillFacebook,
    AiFillInstagram,
    AiFillYoutube,
    AiFillTwitterSquare }
from 'react-icons/ai';

import '../../Styles/SocialList.css'

const SocialList = () => {
  return (
    <div className='social_midia'>
        <span>
            <AiFillFacebook />
        </span>
        <span>
            <AiFillInstagram />
        </span>
        <span>
            <AiFillYoutube />
        </span>
        <span>
            <AiFillTwitterSquare />
        </span>
    </div>

  )
}

export default SocialList