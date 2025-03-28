import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import BookARideUI from './utils/BookARideUI.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <HashRouter>
      <BookARideUI />
      <App />
    </HashRouter>
  // </StrictMode>
)
