import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { IPLocationProvider } from './context/user_location_provider.jsx'
import LoginPopupProvider from './context/login_popup_provider.jsx'
import AuthProvider from './context/auth_provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <IPLocationProvider>
          <LoginPopupProvider>
            <App />
          </LoginPopupProvider>
        </IPLocationProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
