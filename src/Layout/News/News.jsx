import React from 'react'

import { Figure } from 'react-bootstrap'

import '../../Styles/News.css'

const News = () => {
  return (
    <div className='news_main'>
        <div className="news_title">
            <h4>Notícias</h4>
        </div>
        <div className='news_bar'>
            <Figure>
                <Figure.Caption>
                    Saúde alerta para baixa procura da população para dose de reforço contra Covid-19
                </Figure.Caption>
                <Figure.Image src="../img/news/noticia1-teste.png"/>
            </Figure>
        </div>
        <div className='news_bar_2'>
            <Figure>
                <Figure.Caption>
                    Prefeitura entrega becas para os integrantes do coral do CATI
                </Figure.Caption>
                <Figure.Image src="../img/news/noticia2-teste.png"/>
            </Figure>
        </div>
    </div>
  )
}
export default News