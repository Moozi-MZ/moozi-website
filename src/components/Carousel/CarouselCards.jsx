import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const CarouselCards = ({ cards }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="w-[100%] mx-auto space-y-1 carousel-container">
      {/* Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center gap-4 h-125 mx-auto">
          {cards.map((card, index) => (
            <div
              className="min-w-[350px] max-w-[350px] shrink-0 px-4"
              key={index}
            >
              <div className="card bg-base-200 h-[450px]">
                <figure className="h-64 overflow-hidden pt-4 ">
                  <img src={card.image} alt={card.title} className="  px-2 rounded-[40px] w-full h-full object-cover" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{card.title}</h2>
                  <p>{card.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn text-white bg-[#0080e2]">Action</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 pb-10">
        <button onClick={scrollPrev} className="btn btn-outline btn-sm">❮</button>
        <button onClick={scrollNext} className="btn btn-outline btn-sm">❯</button>
      </div>
    </div>
  );
};

export default CarouselCards;
