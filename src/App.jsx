// Dependencies
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

// Style
import './App.css';

// Components
import { Home } from './pages/home/Home';
import { BookingPage } from './pages/booking_page/BookingPage';
import Lenis from '@studio-freight/lenis';
import SmoothScroll from './components/SmoothScroll';




function App() {

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

  

  return (
    <>
    {/* <SmoothScroll > */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/booking-page' element={<BookingPage />} /> */}

      </Routes>

    {/* </SmoothScroll> */}

    
    </>
  )
}

export default App
