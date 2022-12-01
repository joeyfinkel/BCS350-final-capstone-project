import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

export const RequiredAuth = () => {
  const { loggedIn } = useContext(AuthContext);
  const location = useLocation();

  console.log(loggedIn);

  const auth = true;

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};
