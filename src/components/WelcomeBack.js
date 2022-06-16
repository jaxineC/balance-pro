import React, { useState, useEffect, navigate } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { WelcomeBack } from "../styles/styledComponents.js";

function LoginBox({
  userID,
  setUserID,
  isLoggedIn,
  setIsLoggedIn,
  isDesktop,
  setIsDeskTop,
}) {
  return (
    <WelcomeBack className="WelcomeBack">
      <div className="bold">
        Hey {userID.displayName ? userID.displayName : "newcomer"},
      </div>
      <div className="bold">Welcome {userID.displayName ? "back!" : "!"}</div>
    </WelcomeBack>
  );
}

export default LoginBox;
