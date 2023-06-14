import React from 'react'

import TextLivroEletronico from '../TextClasses/TextLivroEletronico'

import '../Styles/LivroEletronico.css'

const LivroEletronico = () => {
  return (
    <div className='livro_container'>
        <div className="main_livro">
            <TextLivroEletronico />
        </div>
    </div>
  )
}

export default LivroEletronico