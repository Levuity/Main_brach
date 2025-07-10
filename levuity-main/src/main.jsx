import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mockdata from './BookmarkIcon/Mockdata.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Mockdata />
  </StrictMode>
)
