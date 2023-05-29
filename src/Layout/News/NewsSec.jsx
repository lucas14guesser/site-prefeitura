import React from 'react';

import { Link } from 'react-router-dom';

import '../../Styles/NewsSec.css';
import NewsLinkButton from './NewsLinkButton';

const NewsSec = () => {
  return (
    <>
        <div className='sec_news_grid'>
            <div className='item_news_grid'>
            <img src='./img/noticia1-teste.png' alt='news1' />
            <span>
                <p>
                Saúde alerta para baixa procura da população para dose de reforço contra Covid-19
                </p>
            </span>
            </div>
            <div className='item_news_grid'>
            <img src='./img/noticia2-teste.png' alt='news1' />
            <span>
                <p>
                    Prefeitura entrega becas para os integrantes do coral do CATI
                </p>
            </span>
            </div>
            <div className='item_news_grid'>
            <img src='./img/noticia3-teste.png' alt='news1' />
            <span>
                <p>
                    Jiu Jitsu comemora a conquista de nove medalhas no Floripa Fall Internacional
                </p>
            </span>
            </div>
            <div className='item_news_grid'>
            <img src='./img/noticia4-teste.png' alt='news1' />
            <span>
                <p>
                    Cinco creches particulares aderem ao Programa Bolsa Educação 2023
                </p>
            </span>
            </div>
        </div>
        <NewsLinkButton />
    </>
  );
};
export default NewsSec;
