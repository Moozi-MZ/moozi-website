import React from 'react'
import './RideDiv.css'
import RideCar from '../RideCar/RideCar'
import SEDAN from '../../assets/vehicles/sedan car-bro.svg'

const RideDiv = () => {
  return (
    <div className='ride-container'>
        <div className='ride-container-content'>
            <div className="carousel carousel-center bg-['#017eff']  max-w-full space-x-4 p-4">
                
                <div className="carousel-item">
                    <RideCar 
                        carPic={SEDAN}
                        carTitle='Toyota Sedan'
                        carDescription='50 MTn'
                    />
                </div>
                <div className="carousel-item">
                    <RideCar 
                        carPic={SEDAN}
                        carTitle='Toyota Sedan'
                        carDescription='A thingy'
                    />
                </div>
                <div className="carousel-item">
                    <RideCar 
                    carPic={SEDAN}
                    carTitle='Toyota Sedan'
                    carDescription='A thingy'
                    />
                </div>
                <div className="carousel-item">
                    <RideCar 
                    carPic={SEDAN}
                    carTitle='Toyota Sedan'
                    carDescription='A thingy'
                    />
                </div>
                <div className="carousel-item">
                    <RideCar 
                    carPic={SEDAN}
                    carTitle='Toyota Sedan'
                    carDescription='A thingy'
                    />
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default RideDiv;