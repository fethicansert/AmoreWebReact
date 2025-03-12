import React from 'react'
import { useAuth } from '../hooks/use_auth'
import { Outlet, Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {

  const { isAuthenticated } = useAuth();
  const location = useLocation();


  // (!isAuthenticated && location.pathname.includes('/dashboard/user/')) ?
  //     <Navigate to={`/user/${location.pathname.slice(16)}`} /> :

  return (
    isAuthenticated
      ? <Outlet />
      : <Navigate to='/' />)
}

export default ProtectedRoute
