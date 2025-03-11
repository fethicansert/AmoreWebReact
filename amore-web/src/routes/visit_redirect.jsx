import React from 'react'
import { useAuth } from '../hooks/use_auth'
import { Outlet, Navigate, useParams } from 'react-router-dom';

const VisitRedirect = () => {

    const { isAuthenticated } = useAuth();
    const { userId } = useParams();

    return (
        isAuthenticated
            ? <Navigate to={`/dashboard/user/${userId}`} />
            : <Outlet />
    );
}

export default VisitRedirect;
