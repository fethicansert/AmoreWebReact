import React from 'react'
import { useAuth } from '../hooks/use_auth'
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {

  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to='/register' />
}

export default ProtectedRoute
