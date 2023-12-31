import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <App/>
    </AuthContextProvider>
  </React.StrictMode>,
)
