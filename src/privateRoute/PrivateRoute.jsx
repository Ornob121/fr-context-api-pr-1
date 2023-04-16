import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate to="/login" replace={true}>
        Login
      </Navigate>
    );
  }
};

export default PrivateRoute;
