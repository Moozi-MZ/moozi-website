import React from 'react'
import './RideDiv.css'
import RideCard from '../RideCard/RideCard'
import BASE from '../../assets/vehicles/moozi-base.svg'
import DELUXE from '../../assets/vehicles/moozi-deluxe.svg';
import RENTAL from '../../assets/vehicles/moozi-rental2.jpeg';
// import SUVLUX from '../../assets/vehicles/SUV car-bro.svg';

const RideDiv = ({language}) => {
  return (
    <div className='ride-container'>
        <div className="ride-caption mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#017eff]">
            {language === 'en' ? `Choose your ride` : `Escolha o seu serviço`}
            </h2>
          <p className="ride-p mb-5 mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            {language === 'en' ? `Affordable prices for our service classes` : `Preços acessíveis para as nossas classes de serviço`}
          </p>
          {/* <p className="mt-6 text-lg/8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>
        <div className='ride-container-content'>
            <div className="carousel overflow-x-auto carousel-center bg-['#017eff']  max-w-full space-x-6 p-4">
                
                <div className="carousel-item">
                    <RideCard
                        language={language}
                        carPic={BASE}
                        carTitle='Moozi'
                        carPersonCapacity='1 - 5'
                        carBagCapacity='0 - 3'
                        carPricing='75,00'
                        carDescription='75,00 MTn'
                        consulta={false}
                    />
                </div>
                <div className="carousel-item">
                    <RideCard 
                    language={language}
                    carPic={DELUXE}
                    carTitle='Deluxe'
                    carPersonCapacity='1 - 5'
                    carBagCapacity='0 - 4'
                    carPricing='85,00'
                    carDescription='Description of car'
                    consulta={false}
                    />
                </div>
                <div className="carousel-item">
                    <RideCard 
                    language={language}
                    carPic={RENTAL}
                    carTitle='Rental'
                    carPersonCapacity='1 - 7'
                    carBagCapacity='0 - 5'
                    carPricing={language === 'en' ? 'Upon request' : 'Sob Consulta'}
                    carDescription='Description of car'
                    consulta={true}
                    />
                </div>
                
                
                
            </div>
            
        </div>

    </div>
  )
}

export default RideDiv;