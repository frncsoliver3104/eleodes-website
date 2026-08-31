import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import favicon from './assets/blueeleodeslogo.png'
import './index.css'

// Keep document metadata close to the application entry point.
document.title = 'Eleodes - Every Drop Matters'
if (!document.querySelector("link[rel='icon']")) {
  const link = document.createElement('link')
  link.rel = 'icon'
  link.type = 'image/png'
  link.href = favicon
  document.head.appendChild(link)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
