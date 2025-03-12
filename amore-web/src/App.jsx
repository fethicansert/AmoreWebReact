import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Register from './pages/register/register';
import './localization/i18n_localization';
import Dashboard from './pages/dashboard/dashboard';
import UserHome from './pages/dashboard/sections/user_home';
import Discover from './pages/dashboard/sections/discover';
import Chat from './pages/dashboard/sections/chat';
import Market from './pages/dashboard/sections/market';
import Premium from './pages/dashboard/sections/premium_subscription';
import User from './pages/dashboard/sections/user';
import Matches from './pages/dashboard/sections/matches';
import Payment from './pages/dashboard/sections/payment';
import LimitedOffer from './copmonents/limited_offer';
import { useBanner } from './hooks/use_banner';
import LoginPopup from '../src/copmonents/login_popup'
import ProtectedRoute from './routes/protected_route';
import PageNotFound from './routes/page_not_found';
import { getToken } from 'firebase/messaging';
import { messaging } from './firebase/firebase_config';
import { useEffect } from 'react';
import { useAuth } from './hooks/use_auth';
import { ToastContainer, toast } from "react-toastify";
import PushNotification from './copmonents/push_notification';
import { onMessage } from "firebase/messaging";
import { userFcmToken } from './api/services/user_servives';
import VisitRedirect from './routes/visit_redirect';
import Visit from './pages/visit/visit';
import { axiosAmore } from './api/axios';

function App() {

  const { limitedOfferOptions, setLimitedOfferOptions, showLogin, setShowLogin } = useBanner();

  useEffect(() => {

    requestPermission();

    onMessage(messaging, (payload) => {
      console.log(payload);

      toast(<PushNotification toastId={payload.messageId} title={payload.notification.title} body={payload.notification.body} />,
        {
          toastId: payload.messageId,
          style: { padding: '10px 8px' },
          className: "toast-notification",
          progressClassName: "toast-notification-progress",
          position: 'top-center',
          autoClose: 10000,
          closeButton: false,
        });
    });

  }, []);

  const { auth } = useAuth();

  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path='/register' element={<Register />} />

        <Route element={<VisitRedirect />}>

          <Route path='user/:userId' element={<Visit />} />

          <Route element={<ProtectedRoute />}>

            <Route path='/dashboard' element={<Dashboard />}>

              <Route index path='user-swipe' element={<UserHome />} />

              <Route path='discover' element={<Discover />} />

              <Route path='matches' element={<Matches />} />

              <Route path='chat' element={<Chat />} />

              <Route path='market' element={<Market />} />

              <Route path='premium-subscription' element={<Premium />} />

              <Route path='payment' element={<Payment />} />

              <Route path='user-profile' element={<User />} />

              <Route path='user/:userId' element={<Visit />} />

            </Route>

          </Route>

        </Route>

        {/* Page Not Founded */}
        <Route path="*" element={<PageNotFound />} />

      </Routes>

      {/* Limittied Offer Popup */}
      {limitedOfferOptions.show && <LimitedOffer setLimitedOfferOptions={setLimitedOfferOptions} limititedOfferOptions={limitedOfferOptions} />}

      {/* Login Popup */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      {/* Push Foreground Notifications */}
      <ToastContainer limit={3} />

    </>
  );

  async function requestPermission() {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {

      try {

        // Voluntary Application Server Identification => Gönüllü Uygulama Sunucusu Tanımlaması
        const vapidKey = "BFkciB-OrPueQmN0vizjgIgmkzTwi0yO1AYCCa9Pv4Hh1M_iXr5pnpVdBwrSTOxOtNWhajHhL8ZcQZvVO_TbZx8"

        const token = await getToken(messaging, {
          vapidKey: vapidKey,
        });

        console.log(token);

        if (!token || !auth) return;

        const oldToken = JSON.parse(localStorage.getItem('fcmToken'));

        if (oldToken) {

          if (oldToken !== token) {

            const deleteResponse = await userFcmToken({ type: 'delete', token: token, language: 'tr' })
            console.log(deleteResponse);


            const addResponse = await userFcmToken({ type: 'add', token: token, language: 'tr' })
            console.log(addResponse);

            localStorage.setItem('fcmToken', JSON.stringify(token));

          } else {
            console.log("Old Token and Token Same !");
          }

        } else {

          const addResponse = await userFcmToken({ type: 'add', token: token, language: 'tr' })

          console.log(addResponse);

          localStorage.setItem('fcmToken', JSON.stringify(token));
        }

      } catch (e) {
        console.log(e);
      }
    }
  }
}

export default App
