import React from 'react';
import { useSelector } from 'react-redux';
import LoadingToRedirect from './LoadingToRedirect';
import { selectUser } from "../../store/userSlice";

export default function UserRoute({children, ...rest}) {
  const { user } = useSelector(selectUser);
  return user ? children : <LoadingToRedirect />;
}