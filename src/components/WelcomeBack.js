import React, { useState, useEffect, navigate } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginBox({ userID, setUserID, isLoggedIn, setIsLoggedIn }) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [message, setMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  function getCurrentUserInfo() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setUserID({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
      });
      return user;
    } else {
      console.log("User is not logged in");
    }
  }
  useEffect(() => {
    getCurrentUserInfo();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="LoginBox TextM"
    >
      <div
        className="TextL bold"
        style={{
          padding: "5px 0px 1px 10px",
          margin: "0px 5px",
        }}
      >
        Hey {userID.displayName},
      </div>
      <div
        className="TextL bold"
        style={{
          padding: "5px 0px 1px 10px",
          margin: "0px 5px",
        }}
      >
        Welcome back!
      </div>
    </div>
  );
}

export default LoginBox;
