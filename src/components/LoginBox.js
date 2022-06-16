import React, { useState, useEffect, navigate } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import googleIcon from "../icon/Google.png";
import fbIcon from "../icon/facebook.png";
import { Login } from "../styles/styledComponents";
import { LoginButton } from "../styles/SharedStyled.js";

function LoginBox({ userID, setUserID }) {
  const [emailInput, setEmailInput] = useState("test@balancepro.me");
  const [passwordInput, setPasswordInput] = useState("000000");
  const [message, setMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  function getCurrentUserInfo() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setUserID(user);
    } else {
      console.log("User is not logged in");
    }
  }

  function handleSignIn() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserID(user);
        getCurrentUserInfo();
        setEmailInput("");
        setPasswordInput("");
      })
      .catch((error) => {
        setLoginErrorMessage("Ummm... check your entry again.");
        setInterval(() => {
          setLoginErrorMessage("");
        }, 5000);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  function handeGoogleAuth() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUserID(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  }

  return (
    <Login className="LoginBox">
      <label>email</label>
      <input
        onChange={(event) => setEmailInput(event.target.value)}
        value={emailInput}
        type="email"
        placeholder="name@gmail.com"
      ></input>

      <label>password</label>
      <input
        onChange={(event) => setPasswordInput(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSignIn();
          }
        }}
        value={passwordInput}
        type="password"
        placeholder="6+ characters"
        className="passwordInput"
      ></input>
      <div className="Login__ErrorMessage">{loginErrorMessage}</div>
      <div className="Login__Method">
        <img
          onClick={handeGoogleAuth}
          className="Login__Method__icon"
          src={googleIcon}
          alt="google icon"
        />
        <LoginButton onClick={handleSignIn}>Log in</LoginButton>
      </div>
    </Login>
  );
}

export default LoginBox;
