// Dependencies
import { useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';

// Style
import './App.css';

// Components
import Home from './pages/home/Home';
import { BookingPage } from './pages/booking_page/BookingPage';
// import Lenis from '@studio-freight/lenis';
import SmoothScroll from './components/SmoothScroll';
import { Test } from './Test';
import { useLanguage } from './context/LanguageContext';
import About from './pages/about/About';
import ClientPage from './pages/client/ClientPage';
import DriverPage from './pages/driver/DriverPage';
import NotFound from './pages/notfound/NotFound';
import VehicleCategory from './pages/driver/VehicleCategory';
import Corporate from './pages/about/Corporate';
import FAQ from './pages/about/FAQ';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsConditions from './pages/legal/TermsConditions';

function App() {

  let { language } = useLanguage();

  const setLanguage = (lang) => {
    if (lang === 'en') {
      language = 'pt';
    } else if (lang === 'pt') {
      language = 'en';
    }
  }
  

  // useEffect(() => {
  //   const lenis = new Lenis ({
  //     duration: 1.2,  // control the smoothness of the scroll
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
  //     direction: 'vertical', // 'vertical' or 'horizontal'
  //     gestureDirection: 'vertical', // direction of gesture scrolling
  //     smooth: true, // enable or disable smooth scrolling
  //     mouseMultiplier: 1, // scroll speed
  //     smoothTouch: false, // smooth touch scrolling
  //     touchMultiplier: 2, // touch scrolling speed
  //     infinite: false, // infinite scrolling
  //   });

  //   function raf(time) {
  //       lenis.raf(time);
  //       requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   //cleanup
  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);


  const targetH5 = document.querySelector('.web-booking-wrapper .iframe-header h5');
  // This effect will run whenever the language changes
  // and update the text content of the target element accordingly.

  useEffect(() => {
        const interval = setInterval(() => {
    const targetH5 = document.querySelector('.web-booking-wrapper .iframe-header h5');

    if (targetH5) {
      targetH5.textContent = language === 'pt' ? 'Marcar Viagem' : 'Book a Ride';
      clearInterval(interval); // stop checking once it's done
    }
  }, 300); // check every 300ms

  return () => clearInterval(interval); // cleanup if component unmounts
  }, []);
      
    

  return (
    <>
    {/* <SmoothScroll > */}
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />

      <Route path="/client" element={<ClientPage />} />

      <Route path="/driver" element={<DriverPage />} />
      <Route path="/vehicle-category" element={<VehicleCategory />} />

      <Route path="/faq" element={<FAQ />} />

      <Route path="/about" element={<About />} />
      <Route path="/corporate" element={<Corporate />} />

      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsConditions />} />


      {/* 👇 Catch-all route goes at the end */}
      <Route path="*" element={<NotFound />} />
      </Routes>

    {/* </SmoothScroll> */}

    
    </>
  )
}

export default App
