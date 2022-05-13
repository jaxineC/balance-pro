import React, { useState, useEffect } from "react";
import "./IndexPage.css";
import { Link } from "react-router-dom";
import Background from "../components/Background";
import WelcomeImg from "../components/WelcomeImg";
import LoginBox from "../components/LoginBox";
import Logo from "../components/Logo";

function IndexPage({ userID, setUserID }) {
  return (
    <main className="IndexPage">
      <WelcomeImg />
      <LoginBox userID={userID} setUserID={setUserID} />
      <Logo />
      <Background />
    </main>
  );
}

export default IndexPage;
