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
import { messaging, onMessageListener } from './firebase/firebase_config';
import { useEffect } from 'react';
import { useAuth } from './hooks/use_auth';
import { ToastContainer, toast } from "react-toastify";
import PushNotification from './copmonents/push_notification';
import { onMessage } from "firebase/messaging";
import { v4 as uuidv4 } from 'uuid';


function App() {

  const { limitedOfferOptions, setLimitedOfferOptions, showLogin, setShowLogin } = useBanner();

  useEffect(() => {

    requestPermission();

    onMessage(messaging, (payload) => {
      const toastId = uuidv4();
      toast(<PushNotification toastId={toastId} title={payload.notification.title} body={payload.notification.body} />,
        {
          toastId,
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

        <Route element={<ProtectedRoute />}>

          <Route path='/dashboard' element={<Dashboard />}>

            <Route index path='user-home' element={<UserHome />} />

            <Route path='discover' element={<Discover />} />

            <Route path='matches' element={<Matches />} />

            <Route path='chat' element={<Chat />} />

            <Route path='market' element={<Market />} />

            <Route path='premium-subscription' element={<Premium />} />

            <Route path='payment' element={<Payment />} />

            <Route path='user' element={<User />} />

          </Route>

        </Route>

        <Route path="*" element={<PageNotFound />} />

      </Routes>

      {limitedOfferOptions.show && <LimitedOffer setLimitedOfferOptions={setLimitedOfferOptions} limititedOfferOptions={limitedOfferOptions} />}

      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <ToastContainer limit={3} />

    </>
  );

  async function requestPermission() {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {

      try {

        const myVapidKey = "BCtux-N4VRkOrnPmqMOubJD9qd8DIqs5begMpUHUci8-4bMT52cRsyV3gIvH4E_dqhEbohAm5WI3dd0gg2dQ2iI";
        const amoreVapidKey = "BFkciB-OrPueQmN0vizjgIgmkzTwi0yO1AYCCa9Pv4Hh1M_iXr5pnpVdBwrSTOxOtNWhajHhL8ZcQZvVO_TbZx8"

        const token = await getToken(messaging, {
          vapidKey: myVapidKey

        });

        console.log(token);


        // if (!token || !auth) return;

        // const oldToken = JSON.parse(localStorage.getItem('fcmToken'));

        // if (oldToken) {

        //   if (oldToken !== token) {
        //     const deleteResponse = await axiosAmore.post('user/fcmToken',
        //       { type: 'delete', fcmToken: oldToken, language: 'tr' },
        //       { useAuth: true });

        //     // console.log(deleteResponse);

        //     const addResponse = await axiosAmore.post('user/fcmToken',
        //       { type: 'add', fcmToken: token, language: 'tr' },
        //       { useAuth: true });

        //     localStorage.setItem('fcmToken', JSON.stringify(token));

        //     console.log(addResponse);
        //   } else {
        //     console.log("Old Token and Token Same !");
        //   }

        // } else {

        //   const addResponse = await axiosAmore.post('user/fcmToken',
        //     { type: 'add', fcmToken: token, language: 'tr' },
        //     { useAuth: true });

        //   console.log(addResponse);

        //   localStorage.setItem('fcmToken', JSON.stringify(token));
        // }

      } catch (e) {
        console.log(e);
      }
    }
  }
}

export default App
