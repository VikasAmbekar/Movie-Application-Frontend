import React from "react";
import { Navigate } from "react-router-dom";
import { isLogIn } from "./CheckUserLogin";

const PrivateRouteUser = ({ children }) => {
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

export default PrivateRouteUser;
