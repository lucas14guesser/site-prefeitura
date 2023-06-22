import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/NewsLinkButton.css'

const NewsLinkButton = () => {
  return (
    <div className='type_button'>
        <Link to="/construcao" className="button">Todas as Notícias</Link>    
    </div>
    )
}
export default NewsLinkButton