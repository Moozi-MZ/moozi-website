import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import BookARideUI from './utils/BookARideUI.jsx'
import { Test } from './Test.jsx'

createRoot(document.getElementById('root')).render(
  

  // <StrictMode>
    <HashRouter>
      <BookARideUI />
      <App />

      {/* <Test /> */}
    </HashRouter>
  // </StrictMode>
)
