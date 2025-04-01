import React from 'react'
import SEDAN from '../../assets/vehicles/sedan-car-animate.svg'
import './RideCar.css';
import { UserIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const RideCar = ({carPic, carTitle, carDescription}) => {
  return (
    <div className="card bg-base-100 w-80 shadow-sm">
        <figure className="px-10 pt-10">
            <img
            src={carPic}
            alt="car"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{carTitle}</h2>
            <div className='people-and-baggage'>
                <div className='person-count'>
                    <UserIcon  aria-hidden="true" className="size-6 text-black" />
                    <span>4</span>
                </div>
                <div className='bag-count'>
                    <BriefcaseIcon />
                    <span>2</span>
                </div>
            </div>
            <p className='car-price'>Desde: {carDescription}</p>
            <div className="card-actions">
            {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
        </div>
        </div>
  )
}

export default RideCar