
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
import Notifications from './pages/dashboard/sections/notifications';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path='/register' element={<Register />} />

      <Route path='/dashboard' element={<Dashboard />}>

        <Route index path='user-home' element={<UserHome />} />

        <Route path='notification' element={<Notifications />} />

        <Route path='discover' element={<Discover />} />

        <Route path='matches' element={<Matches />} />

        <Route path='chat' element={<Chat />} />

        <Route path='market' element={<Market />} />

        <Route path='premium-subscription' element={<Premium />} />

        <Route path='user' element={<User />} />

      </Route>

    </Routes>
  );
}

export default App
