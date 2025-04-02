import {React, useState} from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

import { GLOBAL_DIV_WIDTH } from '../../utils/Constants';
import { FeatureOne } from '../../components/Features/FeatureOne';
import './Home.css';

import HERO_ILLUSTRATION from '../../assets/illustrations/sedan-car-animate.svg'
import M_LOGO from '../../assets/logo-white-letters.png'
import { Link } from 'react-router-dom';
import { FeatureTwo } from '../../components/Features/FeatureTwo';
import { Footer } from '../../components/Footer/Footer';
// import Marquee from '../../components/Marquee/MarqueeLine';
import MarqueeLine from '../../components/Marquee/MarqueeLine';
import RideDiv from '../../components/RideDiv/RideDiv';
import { Downloads } from '../../components/Downloads';
import { DriverDiv } from '../../components/DriverDiv/DriverDiv';

export const Home = () => {


    





    const [bookRideClicked, setBookRideClicked] = useState(false)

    const HandleBookARideClick = () => {
        const bookingWrapper = document.querySelector(".web-booking-wrapper");
        
        // Check if the element exists before trying to add a class
        if (bookingWrapper && !bookRideClicked) {
            bookingWrapper.classList.remove("hide");
            setBookRideClicked(true)
        } else if (bookingWrapper && bookRideClicked) {
            bookingWrapper.classList.add("hide");
            setBookRideClicked(false)
        }

        // console.log("book ride click: ", bookRideClicked);
    }



  return (
    <>
        <Navbar />
        <div className="home-content">
            {/* DESKTOP HERO */}
            <div className="hero-container standard-container-config">
                <div className="hero-book-a-ride">
                    <h1 className='hero-h1'>Move Anywhere, Anytime, with Moozi :)</h1>
                    <div onClick={HandleBookARideClick} className="button-to-book">
                        <p> Book a ride </p>
                        <span><FontAwesomeIcon icon={faArrowRight} /></span>
                    </div>
                </div>
                <div className="hero-graphics">
                    <img src={HERO_ILLUSTRATION} alt="" />
                </div>
            </div>

            {/* MOBILE HERO */}
            <div className='hero-container-mobile'>
                <div class='hero-content-mobile'>
                <h1 className='hero-h1'>Move Anywhere, Anytime, with</h1>
                <div className="mx-auto hero-graphics-logo">
                    <img src={M_LOGO} />
                </div>
                <div className="hero-graphics">
                    <img src={HERO_ILLUSTRATION} alt="" />
                </div>
                </div>
            </div>
            
            <MarqueeLine />
            <FeatureOne />
            <RideDiv />




            <FeatureTwo />
            <DriverDiv />
            {/* <Downloads /> */}

            <Footer />

        </div>
    </>
  )
}
