import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logoutUser } from '../redux/users/users';
import { logout } from '../redux/users/api';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.location.reload(false);
    dispatch(logoutUser());
  }, [dispatch]);

  if (logout()) {
    return (
      <Navigate to="/" />
    );
  }

  return <p>Unable to logout</p>;
};

export default Logout;
