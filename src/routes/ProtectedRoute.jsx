import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";


function ProtectedRoute({ element }) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
