import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { IPLocationProvider } from './context/user_location_provider.jsx'
import LoginPopupProvider from './context/login_popup_provider.jsx'
import AuthProvider from './context/auth_provider.jsx'
import ConversationProvider from './context/conversation_provider.jsx'
import NotificationProvider from './context/notification_provider.jsx'
import BannerProvider from './context/banner_provider.jsx'
import SocketProvider from './context/socket_provider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <SocketProvider>
        <ConversationProvider>
          <NotificationProvider>
            <IPLocationProvider>
              <BannerProvider>
                <App />
              </BannerProvider>
            </IPLocationProvider>
          </NotificationProvider>
        </ConversationProvider>
      </SocketProvider>
    </BrowserRouter>
  </AuthProvider>
)
