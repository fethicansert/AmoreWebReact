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

function App() {
  const {
    limitedOfferOptions,
    setLimitedOfferOptions,
    showLogin,
    setShowLogin,
  } = useBanner();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route element={<VisitRedirect />}>
          <Route path="user/:userId" element={<Visit />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index path="user-swipe" element={<UserHome />} />

              <Route path="discover" element={<Discover />} />

              <Route path="matches" element={<Matches />} />

              <Route path="chat" element={<Chat />} />

              <Route path="market" element={<Market />} />

              <Route path="premium-subscription" element={<Premium />} />

              <Route path="payment" element={<Payment />} />

              <Route path="user-profile" element={<User />} />

              <Route path="user/:userId" element={<Visit />} />
            </Route>
          </Route>
        </Route>

        {/* Page Not Founded */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* Limittied Offer Popup */}
      {limitedOfferOptions.show && (
        <LimitedOffer
          setLimitedOfferOptions={setLimitedOfferOptions}
          limititedOfferOptions={limitedOfferOptions}
        />
      )}

      {/* Login Popup */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      {/* Push Foreground Notifications */}
      <ToastContainer limit={2} />
    </>
  );
}

export default App;
