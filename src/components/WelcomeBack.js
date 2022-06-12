import React, { useState, useEffect, navigate } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginBox({
  userID,
  setUserID,
  isLoggedIn,
  setIsLoggedIn,
  isDesktop,
  setIsDeskTop,
}) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [message, setMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="LoginBox TextM"
    >
      <div
        className="TextXL bold"
        style={{
          fontSize: isDesktop ? "48px" : "36px",
          width: isDesktop ? "100%" : "70%",
          padding: "5px 0px 1px 10px",
          margin: "0px 5px",
        }}
      >
        Hey {userID.displayName ? userID.displayName : "newcomer"},
      </div>
      <div
        className="TextXL bold"
        style={{
          fontSize: isDesktop ? "48px" : "36px",
          width: isDesktop ? "100%" : "70%",
          padding: "5px 0px 1px 10px",
          margin: "0px 5px",
        }}
      >
        Welcome {userID.displayName ? "back!" : "!"}
      </div>
    </div>
  );
}

export default LoginBox;
