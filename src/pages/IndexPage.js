import React, { useState, useEffect } from "react";
import "./IndexPage.css";
import { Link } from "react-router-dom";
import Background from "../components/Background";
import WelcomeImg from "../components/WelcomeImg";
import WelcomBack from "../components/WelcomeBack";
import LoginBox from "../components/LoginBox";
import Logo from "../components/Logo";
import { getAuth, signOut } from "firebase/auth";

function IndexPage({ userID, setUserID, isLoggedIn, setIsLoggedIn }) {
  // const user = useContext(UserContext);
  const [isReady, setIsReady] = useState(false);

  return (
    <main className="IndexPage">
      <WelcomeImg />
      {isLoggedIn ? (
        <WelcomBack
          userID={userID}
          setUserID={setUserID}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <LoginBox
          userID={userID}
          setUserID={setUserID}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      <Logo />
      <Background />
      <Link className="Link" to="/list">
        <button
          style={{ display: isLoggedIn ? "block" : "none" }}
          className="go TextL"
        >
          Enter
        </button>
      </Link>
    </main>
  );
}

export default IndexPage;
