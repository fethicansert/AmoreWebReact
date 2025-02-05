import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { IPLocationProvider } from './context/user_location_provider.jsx'
import LoginPopupProvider from './context/login_popup_provider.jsx'
import AuthProvider from './context/auth_provider.jsx'
import ConversationProvider, { ConversationContext } from './context/conversation_provider.jsx'
import LikesProvider from './context/likes_provider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <ConversationProvider>
        <LikesProvider>
          <IPLocationProvider>
            <LoginPopupProvider>
              <App />
            </LoginPopupProvider>
          </IPLocationProvider>
        </LikesProvider>
      </ConversationProvider>
    </BrowserRouter>
  </AuthProvider>
)
