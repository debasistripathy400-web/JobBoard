import * as React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles?: ('seeker' | 'employer')[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
    const { isLoggedIn, user } = useAuth();
    const location = useLocation();

    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles && user && !allowedRoles.includes(user.role as any)) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
