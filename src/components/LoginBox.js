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

function LoginBox({ userID, setUserID }) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
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
        // Signed in
        const user = userCredential.user;
        setUserID(user);
        getCurrentUserInfo();
        setEmailInput("");
        setPasswordInput("");
        // ...
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
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUserID(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
        // ...
      });
  }

  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "30% 70%" }}
      className="LoginBox TextM"
    >
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
      ></input>
      <div
        className="TextS"
        style={{
          color: "blueviolet",
          gridColumn: "1/3",
          padding: "5px 0px 1px 10px",
          margin: "0px 5px",
          textAlign: "center",
        }}
      >
        {loginErrorMessage}
      </div>
      <div
        className="TextS"
        style={{
          width: 130,
          height: 22,
          gridColumn: "1/3",
          padding: "5px 0px 1px 10px",
          textAlign: "center",
          placeSelf: "center",
        }}
      >
        or sign in with{" "}
        <span onClick={handeGoogleAuth}>
          <img
            style={{
              height: 16,
              backgroundColor: "white",
              borderRadius: 7,
              padding: "1px",
              cursor: "pointer",
            }}
            className="icon"
            src={googleIcon}
            alt="google icon"
          />
        </span>
      </div>
    </div>
  );
}

export default LoginBox;
