import React from 'react';

import { Carousel } from 'react-bootstrap';

import '../../Styles/CarouselSlogan.css'

function CarouselSlogan() {
    return (
        <div className="carousel_main">
            <div className='carousel_moviment'>
                <Carousel interval={3000}>
                    <Carousel.Item>
                    <img
                        className="carousel_img"
                        src="../img/teste-carousel.jpeg"
                        alt="Primeiro slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="carousel_img"
                        src="../img/teste-carousel2.jpeg"
                        alt="Segundo slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="carousel_img"
                        src="../img/teste-carousel3.jpeg"
                        alt="Terceiro slide"
                    />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
  }  
export default CarouselSlogan;
