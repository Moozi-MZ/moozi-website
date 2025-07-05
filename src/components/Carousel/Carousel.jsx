import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselCards from './CarouselCards';

import post1 from '../../assets/posts/Post01.jpg';
import slide1 from '../../assets/posts/Slide01.jpg';
import post2 from '../../assets/posts/Post02.jpg';
import slide2 from '../../assets/posts/Slide02.jpg'; 
import post3 from '../../assets/posts/Post03.jpg';
import slide3 from '../../assets/posts/Slide03.jpg';
import post4 from '../../assets/posts/Post04.jpg';
import slide4 from '../../assets/posts/Slide04.jpg';
import post5 from '../../assets/posts/Post05.jpg';
import slide5 from '../../assets/posts/Slide05.jpg';
import post6 from '../../assets/posts/Post06.jpg';
import slide6 from '../../assets/posts/Slide06.jpg';
import post7 from '../../assets/posts/Post07.jpg';
import slide7 from '../../assets/posts/Slide07.jpg';

const Carousel = () => {

    const cards = [
            // frontFace and backFace for 7 cards from post1-7 and slide1-7
            {
              frontFace: post1,
              backFace: slide1
            },
            {
              frontFace: post2,
              backFace: slide2
            },
            {
              frontFace: post3,
              backFace: slide3
            },
            {
              frontFace: post4,
              backFace: slide4
            },
            {
              frontFace: post5,
              backFace: slide5
            },
            {
              frontFace: post6,
              backFace: slide6
            },
            {
              frontFace: post7,
              backFace: slide7
            }
            
          ];
  

  return (
    <>
    
    <CarouselCards cards={cards} />

    </>
  );
};

export default Carousel;
