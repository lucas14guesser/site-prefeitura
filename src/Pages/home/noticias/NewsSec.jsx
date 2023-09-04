import React from 'react';

import NewsLinkButton from '../../../LinkButtons/NewsLinkButton';

import { Container } from 'react-bootstrap'

import '../../../Styles/home/noticias/News.css'

const NewsSec = () => {
  return (
    <>
        <Container>
            <div className='news_grid'>
                <div className='item_news_grid'>
                <img src='./img/news/noticia3-teste.png'/>
                <span>
                    <p>
                        Nacional Handebol é São José no Torneio Sul-Centro Americano
                    </p>
                </span>
                </div>
                <div className='item_news_grid'>
                <img src='./img/news/noticia4-teste.png'/>
                <span>
                    <p>
                        Prefeitura de São José entrega kits escolares pelo segundo ano consecutivo
                    </p>
                </span>
                </div>
                <div className='item_news_grid'>
                <img src='./img/news/noticia5-teste.png'/>
                <span>
                    <p>
                        Residências do Loteamento Benjamim começam a ser demolidas para obras da Avenida Beira-Rio
                    </p>
                </span>
                </div>
                <div className='item_news_grid'>
                <img src='./img/news/noticia6-teste.png'/>
                <span>
                    <p>
                        Agendamento prévio do mutirão de castração da Dibea abre nesta segunda-feira (29) para o bairro Procasa
                    </p>
                </span>
                </div>
            </div>
            <NewsLinkButton />
        </Container>
    </>
  )
};
export default NewsSec;
