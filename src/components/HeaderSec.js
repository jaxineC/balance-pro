import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo45b from "../media/Logo45b.png";
import { getAuth, signOut } from "firebase/auth";

function HeaderSec({ userID, setUserID, isSignUp, setIsSignUp }) {
  const [isDesktop, setIsDeskTop] = useState(true);
  const [isToggle, setIsToggle] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsDeskTop(false);
    } else {
      setIsDeskTop(true);
    }
  }, []);
  function renderSignUpModal() {
    setIsSignUp(true);
  }

  function handleSignOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserID(null);
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log("An error happened.");
      });
    window.location = "/";
  }

  function handleToggle() {
    if (isToggle === false) {
      setIsToggle(true);
    } else {
      setIsToggle(false);
    }
  }

  let navBar = (
    <nav className="navBar">
      <span
        onClick={userID ? handleSignOut : renderSignUpModal}
        className="padH"
      >
        {" "}
        {userID
          ? `Log out ${
              userID.displayName ? "(" + userID.displayName + ")" : ""
            }`
          : "Sign up"}{" "}
      </span>{" "}
      | <span className="padH"> About </span> |{" "}
      <span className="padH"> Contact Us </span>
    </nav>
  );

  let menu = (
    <nav>
      <svg
        onClick={handleToggle}
        fill="none"
        height="30"
        viewBox="0 0 24 24"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="m3.25 12c0-.4142.33579-.75.75-.75h15.9996c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-15.9996c-.41421 0-.75-.3358-.75-.75zm3.28307 7c0-.4142.33579-.75.75-.75h12.71693c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-12.71693c-.41421 0-.75-.3358-.75-.75zm5.68883-14c0-.41421.3358-.75.75-.75h7.0281c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-7.0281c-.4142 0-.75-.33579-.75-.75z"
          fill="rgb(0,0,0)"
          fillRule="evenodd"
        />
      </svg>
      <div
        className="toggleMenu"
        style={{
          display: isToggle ? "block" : "none",
          width: 120,
          position: "fixed",
          top: 45,
          right: 0,
        }}
      >
        <div
          onClick={userID ? handleSignOut : renderSignUpModal}
          className="padH"
        >
          {userID ? "Log out" : "Sign up"}
        </div>
        <hr
          style={{
            width: 100,
            margin: "4px 10px 3px 10px",
            borderColor: "#bbbbbb",
          }}
        />
        <div className="padH"> About </div>
        <hr
          style={{
            width: 100,
            margin: "4px 10px 3px 10px",
            borderColor: "#bbbbbb",
          }}
        />
        <div className="padH"> Contact Us </div>
        <hr
          style={{
            width: 100,
            margin: "4px 10px 3px 10px",
            borderColor: "#bbbbbb",
          }}
        />
      </div>
    </nav>
  );

  return (
    <header className="HeaderSec">
      <Link to="/">
        <div className="headerLogo">
          <img src={Logo45b} alt="logo for images" className="" />
          balancePro
        </div>
      </Link>
      {isDesktop ? navBar : menu}
    </header>
  );
}

export default HeaderSec;
