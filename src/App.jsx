// Dependencies
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

// Style
import './App.css';

// Components
import { Home } from './pages/home/Home';
import { BookingPage } from './pages/booking_page/BookingPage';

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/booking-page' element={<BookingPage />} /> */}

      </Routes>
    </>
  )
}

export default App
