import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext"; // Make sure this path is correct

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext)

  return currentUser ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
