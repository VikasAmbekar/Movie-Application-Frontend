import React from "react";
import { Navigate } from "react-router-dom";
import { isLogIn } from "./CheckAdminLogin";

const PrivateAdminRoute = ({ children }) => {
  const isLoggedIn = isLogIn();

  return (
    <>
      {isLoggedIn ? (
        children
      ) : (
        <>
          <Navigate to={"/"} />
        </>
      )}
    </>
  );
};

export default PrivateAdminRoute;
