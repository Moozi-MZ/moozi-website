import React from 'react'
import SEDAN from '../../assets/vehicles/sedan-car-animate.svg'
import './RideCard.css';
import { UserIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const RideCard = ({language, carPic, carTitle, carDescription, carPersonCapacity, carBagCapacity, carPricing, consulta}) => {
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
                    <span>{carPersonCapacity}</span>
                </div>
                <div className='bag-count'>
                    <BriefcaseIcon  aria-hidden="true" className="size-6 text-black" />
                    <span>{carBagCapacity}</span>
                </div>
            </div>
            <p className='car-price'>{language === 'en' ? `Starting at: ` : `Desde: `} 
                <b>{carPricing}</b> {consulta ? `` : `Mtn`}</p>
            <div className="card-actions">
            {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
        </div>
        </div>
  )
}

export default RideCard