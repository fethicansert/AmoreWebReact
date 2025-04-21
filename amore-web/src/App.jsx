import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Register from "./pages/register/register";
import "./localization/i18n_localization";
import Dashboard from "./pages/dashboard/dashboard";
import UserHome from "./pages/dashboard/sections/user_home";
import Discover from "./pages/dashboard/sections/discover";
import Chat from "./pages/dashboard/sections/chat";
import Market from "./pages/dashboard/sections/market";
import Premium from "./pages/dashboard/sections/premium_subscription";
import User from "./pages/dashboard/sections/user";
import Matches from "./pages/dashboard/sections/matches";
import Payment from "./pages/dashboard/sections/payment";
import LimitedOffer from "./copmonents/limited_offer";
import { useBanner } from "./hooks/use_banner";
import LoginPopup from "../src/copmonents/login_popup";
import ProtectedRoute from "./routes/protected_route";
import PageNotFound from "./routes/page_not_found";
import { ToastContainer } from "react-toastify";
import VisitRedirect from "./routes/visit_redirect";
import Visit from "./pages/visit/visit";
import UserProfile from '../src/pages/dashboard/sections/user_profile.jsx'
import UserSettings from "./pages/dashboard/sections/user_settings.jsx";
import UserLanguage from "./pages/dashboard/sections/user_language.jsx";
import UserBlockedUsers from "./pages/dashboard/sections/user_blocked_users.jsx";
import UserSupport from "./pages/dashboard/sections/user_support.jsx";
import UserInfluencer from "./pages/dashboard/sections/user_influencer.jsx";
import Logout from "./copmonents/logout.jsx";

function App() {
  const {
    limitedOfferOptions,
    showLogin,
    setShowLogin,
    showLogout,
  } = useBanner();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route element={<VisitRedirect />}>

          <Route path="user/:userId" element={<Visit />}

          />

          <Route element={<ProtectedRoute />}>

            <Route path="/dashboard" element={<Dashboard />}>

              <Route index path="user-swipe" element={<UserHome />} />

              <Route path="discover" element={<Discover />} />

              <Route path="matches" element={<Matches />} />

              <Route path="chat" element={<Chat />} />

              <Route path="market" element={<Market />} />

              <Route path="premium-subscription" element={<Premium />} />

              <Route path="payment" element={<Payment />} />

              <Route path="user-profile" element={<User />} >

                <Route index element={<UserProfile />} />

                <Route path="language" element={<UserLanguage />} />
                <Route path="settings" element={<UserSettings />} />
                <Route path="blocked-users" element={<UserBlockedUsers />} />
                <Route path="support" element={<UserSupport />} />
                <Route path="influencer" element={<UserInfluencer />} />

              </Route>

              <Route path="user/:userId" element={<Visit />} />
            </Route>
          </Route>
        </Route>

        {/* Page Not Founded */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* Limittied Offer Popup */}
      {limitedOfferOptions.show && <LimitedOffer />}

      {/* Login Popup */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      {/* Logout Popup */}
      {showLogout && <Logout />}

      {/* Push Foreground Notifications */}
      <ToastContainer limit={2} />
    </>
  );
}

export default App;
