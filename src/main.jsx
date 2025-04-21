import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import BookARideUI from './utils/BookARideUI.jsx'
import { Test } from './Test.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  

  <StrictMode>
    {/* // <HashRouter >  */}
      <LanguageProvider>
    <BrowserRouter>

      <BookARideUI />
      <App />

      {/* <Test /> */}
    </BrowserRouter>
      </LanguageProvider>
    {/* // </HashRouter>  */}
  </StrictMode>
)
