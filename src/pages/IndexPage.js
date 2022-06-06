import React, { useState, useEffect } from "react";
import "./IndexPage.css";
import { Link } from "react-router-dom";
import Background from "../components/Background";
import WelcomeImg from "../components/WelcomeImg";
import WelcomBack from "../components/WelcomeBack";
import LoginBox from "../components/LoginBox";
import Logo from "../components/Logo";
import { getAuth, signOut } from "firebase/auth";

function IndexPage({ userID, setUserID }) {
  // const user = useContext(UserContext);
  const [isReady, setIsReady] = useState(false);

  function getCurrentUserInfo() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setUserID(user);
    }
  }
  useEffect(() => {
    getCurrentUserInfo();
  }, []);

  return (
    <main className="IndexPage">
      <WelcomeImg />
      {userID ? (
        <WelcomBack userID={userID} setUserID={setUserID} />
      ) : (
        <LoginBox userID={userID} setUserID={setUserID} />
      )}
      <Logo />
      <Background />
      <Link className="Link" to="/list">
        <button
          style={{ display: userID ? "block" : "none" }}
          className="go TextL"
        >
          Enter
        </button>
      </Link>
    </main>
  );
}

export default IndexPage;
