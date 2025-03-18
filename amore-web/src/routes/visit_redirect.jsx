import React from 'react'
import { useAuth } from '../hooks/use_auth'
import { Outlet, Navigate, useParams, useLocation } from 'react-router-dom';

const VisitRedirect = () => {

    const { isAuthenticated } = useAuth();
    const { userId } = useParams();
    const location = useLocation();

    const isVisitor = location.pathname.slice(0, 16) === '/dashboard/user/' && !isAuthenticated;
    const isUser = location.pathname.slice(0, 6) === '/user/' && isAuthenticated;

    return (
        isVisitor
            ? <Navigate to={`/user/${userId}`} /> :
            isUser ? <Navigate to={`/dashboard/user/${userId}`} />
                : <Outlet />
    );
}

export default VisitRedirect;
