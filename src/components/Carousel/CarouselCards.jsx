import React, { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ReactCardFlip from 'react-card-flip';
import './CarouselCards.css'; // Ensure you have the necessary styles
import Marquee from 'react-fast-marquee';

const CarouselCards = ({ cards }) => {
  const [flippedCards, setFlippedCards] = useState({}); // { 0: true, 1: false, ... }

  const flipCard = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index], // toggle only the clicked card
    }));
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <>
      <div className="w-[100%] mx-auto h-750px space-y-1 carousel-container">
        {/* overflow hidden */}
        <div 
        className="overflow-hidden" ref={emblaRef}>
            <Marquee
      autoFill={true}
      pauseOnHover={true}
      gradient={true}
      gradientWidth={50}
      direction='right'
       >
            {cards.map((card, index) => (
              <div className='card-container h-650px py-5 px-2 '>
              <ReactCardFlip
                  key={index}
                  isFlipped={!!flippedCards[index]}
                  flipDirection="vertical"
                >
                  {/* Card Front */}
                  <div
                    className="card-wrapper"
                    onClick={() => flipCard(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <figure className="card-face">
                      <img
                        src={card.frontFace}
                        className="card-img"
                      />
                    </figure>
                  </div>

                  {/* Card Back */}
                  <div
                    className="card-wrapper"
                    onClick={() => flipCard(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <figure className="card-face">
                      <img
                        src={card.backFace}
                        className="card-img"
                      />
                    </figure>
                  </div>
                </ReactCardFlip>
                </div>

            ))}
            </Marquee>
          
        </div>
        

        {/* Controls */}
        {/* <div className="flex justify-center my-10 gap-4 pb-10">
          <button onClick={scrollPrev} className="btn btn-outline btn-sm">❮</button>
          <button onClick={scrollNext} className="btn btn-outline btn-sm">❯</button>
        </div> */}
      </div>
    </>
  );
};

export default CarouselCards;
