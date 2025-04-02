import React from 'react'
import './RideDiv.css'
import RideCard from '../RideCard/RideCard'
import SEDAN from '../../assets/vehicles/sedan car-bro.svg'
import SUV from '../../assets/vehicles/City driver-pana.svg';
import SUVLUX from '../../assets/vehicles/SUV car-bro.svg';

const RideDiv = () => {
  return (
    <div className='ride-container'>
        <div className="ride-caption mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#017eff]">Choose your ride</h2>
          <p className="ride-p mb-5 mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            A wide array of service classes
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
                        carPic={SEDAN}
                        carTitle='Toyota Sedan'
                        carPersonCapacity='4'
                        carBagCapacity='2'
                        carPricing='50'
                        carDescription='50 MTn'
                    />
                </div>
                <div className="carousel-item">
                    <RideCard 
                    carPic={SUV}
                    carTitle='Toyota SUV'
                    carPersonCapacity='5'
                    carBagCapacity='3'
                    carPricing='100'
                    carDescription='Description of car'
                    />
                </div>
                <div className="carousel-item">
                    <RideCard 
                        carPic={SUVLUX}
                        carTitle='Toyota Luxury SUV'
                        carPersonCapacity='6'
                        carBagCapacity='3'
                        carPricing='150'
                        carDescription='Description'
                    />
                </div>
                <div className="carousel-item">
                    <RideCard 
                        carPic={SUVLUX}
                        carTitle='Toyota Luxury SUV'
                        carPersonCapacity='6'
                        carBagCapacity='3'
                        carPricing='150'
                        carDescription='Description'
                    />
                </div>
                <div className="carousel-item">
                    <RideCard 
                        carPic={SUVLUX}
                        carTitle='Toyota Luxury SUV'
                        carPersonCapacity='6'
                        carBagCapacity='3'
                        carPricing='150'
                        carDescription='Description'
                    />
                </div>
                
            </div>
            
        </div>

    </div>
  )
}

export default RideDiv;