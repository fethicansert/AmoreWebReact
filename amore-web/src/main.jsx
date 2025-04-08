import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/auth_provider.jsx";
import ConversationProvider from "./context/conversation_provider.jsx";
import NotificationProvider from "./context/notification_provider.jsx";
import BannerProvider from "./context/banner_provider.jsx";
import SocketProvider from "./context/socket_provider.jsx";
import AppDataProvider from "./context/app_data_provider.jsx";
import LikeProvider from "./context/like_provider.jsx";
import UserActivityProvider from "./context/user_activity_provider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <SocketProvider>
        <AppDataProvider>
          <UserActivityProvider>
            <ConversationProvider>
              <LikeProvider>
                <NotificationProvider>
                  <BannerProvider>
                    <App />
                  </BannerProvider>
                </NotificationProvider>
              </LikeProvider>
            </ConversationProvider>
          </UserActivityProvider>
        </AppDataProvider>
      </SocketProvider>
    </AuthProvider>
  </BrowserRouter>
);
