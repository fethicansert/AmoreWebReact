import React from 'react'
import { useAuth } from '../hooks/use_auth'
import { Outlet, Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {

  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return (
    isAuthenticated
      ? <Outlet />
      : location.pathname.slice(0, 10) === '/dashboard'
        ? <Navigate to='/' />
        : <Navigate to='/register' />)
}

export default ProtectedRoute
