import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

export const RequiredAuth = () => {
  const { user } = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate to='/login' replace />;
};
