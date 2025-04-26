// Dependencies
import { useState } from 'react'
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

function App() {

  const { language } = useLanguage();
  

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

      if (targetH5) {
        if(language === 'en') {
          targetH5.textContent = 'Book a Ride'; // or innerText, both work
        }
        else if(language === 'pt') {
          targetH5.textContent = 'Marcar Viagem'; // or innerText, both work
        }
       
      }; // check every 300ms



  return (
    <>
    {/* <SmoothScroll > */}
      <Routes>
      <Route path="/" element={<Navigate to="/moozi-website/home" />} />
      <Route path="/moozi-website/" element={<Navigate to="/moozi-website/home" />} />
      <Route path="/moozi-website/home" element={<Home />} />

      <Route path="/moozi-website/client" element={<ClientPage />} />

      <Route path="/moozi-website/driver" element={<DriverPage />} />
      <Route path="/moozi-website/vehicle-category" element={<VehicleCategory />} />

      <Route path="/moozi-website/about" element={<About />} />


      {/* 👇 Catch-all route goes at the end */}
      <Route path="*" element={<NotFound />} />
      </Routes>

    {/* </SmoothScroll> */}

    
    </>
  )
}

export default App
