import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "@/context/AuthContext";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    // You can replace this with a spinner or a more sophisticated loading component
    return <div>Loading...</div>;
  }

  if (!user) {
    // If no user is logged in after checking, redirect to the sign-in page
    return <Navigate to="/signin" replace />;
  }

  // If user is logged in, render the nested routes
  return <Outlet />;
};

export default ProtectedRoute;
