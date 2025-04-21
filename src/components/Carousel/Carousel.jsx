import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselCards from './CarouselCards';

const Carousel = () => {

    const cards = [
            {
              title: 'Mountain View',
              description: 'A scenic mountain landscape with clear skies.',
              image: 'https://img.freepik.com/free-vector/driving-concept-illustration_114360-14312.jpg?semt=ais_hybrid&w=740'
            },
            {
              title: 'Urban Jungle',
              description: 'Busy city life captured in stunning colors skies.',
              image: 'https://img.freepik.com/free-vector/driving-concept-illustration_114360-14312.jpg?semt=ais_hybrid&w=740'
            },
            {
              title: 'Starry Night',
              description: 'A beautiful view of the stars and galaxy skies.',
              image: 'https://img.freepik.com/free-vector/driving-concept-illustration_114360-14312.jpg?semt=ais_hybrid&w=740'
            },
            {
              title: 'Starry Night',
              description: 'A beautiful view of the stars and galaxy skies.',
              image: 'https://img.freepik.com/free-vector/driving-concept-illustration_114360-14312.jpg?semt=ais_hybrid&w=740'
            },
            {
              title: 'Starry Night',
              description: 'A beautiful view of the stars and galaxy skies.',
              image: 'https://img.freepik.com/free-vector/driving-concept-illustration_114360-14312.jpg?semt=ais_hybrid&w=740'
            },
            
          ];
  

  return (
    <>
    
    <CarouselCards cards={cards} />

    </>
  );
};

export default Carousel;
