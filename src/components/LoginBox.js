import React, { useState, useEffect, navigate } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
        placeholder="123456"
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
    </div>
  );
}

export default LoginBox;
