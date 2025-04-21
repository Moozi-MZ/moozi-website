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
import Carousel from '../../components/Carousel/Carousel';

import { useLanguage } from '../../context/LanguageContext';


const Home = () => {
    
    const { language } = useLanguage();

    console.log("Language from home: ", language);

    

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
        <Navbar language={language} />
        <div className="home-content">
            <div className="alt-hero-container standard-container-config">
                <div className="hero-book-a-ride">
                    <h1 className='hero-h1'>
                        {language === 'en' ? 
                            `Move Anywhere, Anytime, with Moozi :)` : <>
                            
                            Daqui pra lá sem stress com <br/> Moozi :D   
                            </> }
                    </h1>
                    <div onClick={HandleBookARideClick} className="button-to-book">
                        <p> {language === 'en' ? 
                            `Book a ride` : 
                            `Marcar viagem` } </p>
                        <span><FontAwesomeIcon icon={faArrowRight} /></span>
                    </div>
                </div>
                <div className="hero-graphics">
                    <img src={HERO_ILLUSTRATION} alt="" />
                </div>
            </div>



            {/* DESKTOP HERO */}
            <div className="hero-container standard-container-config no-show">
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
                <h1 className='hero-h1'>{language === 'en' ? 
                            `Move Anywhere, Anytime, with` : 
                            `Daqui pra lá, sem stress com` }</h1>
                <div className="mx-auto hero-graphics-logo">
                    <img src={M_LOGO} />
                </div>
                <div className="hero-graphics">
                    <img src={HERO_ILLUSTRATION} alt="" />
                </div>
                </div>
            </div>

            <MarqueeLine language={language} />

            <RideDiv language={language} />
            
            <FeatureOne language={language} />
            <Carousel language={language} />




            <FeatureTwo language={language} />
            <DriverDiv language={language}/>
            {/* <Downloads /> */}

            <Footer  language={language} />

        </div>
    </>
  )
}

export default Home;
