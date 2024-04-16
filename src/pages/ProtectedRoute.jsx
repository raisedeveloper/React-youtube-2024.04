import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuthContext();  // AuthContext 에서 user 만 가져옴
  
  if (!user)
  return <Navigate to='/' replace={true} />

  return children;
}