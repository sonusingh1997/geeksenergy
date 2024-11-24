import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { contextProvider } from "../contextApi/ContextApi";

function PrivateRoute({ element }) {
  const { loginSuccess } = useContext(contextProvider);
  console.log("loginsuccsses", loginSuccess);

  return loginSuccess ? element : <Navigate to="/" replace />;
}

export default PrivateRoute;
