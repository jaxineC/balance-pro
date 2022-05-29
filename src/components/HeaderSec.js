import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo45b from "../media/Logo45b.png";

function HeaderSec({ userID, isSignUp, setIsSignUp }) {
  function renderSignUpModal() {
    setIsSignUp(true);
  }

  return (
    <header className="HeaderSec">
      <Link to="/">
        <div className="headerLogo">
          <img src={Logo45b} alt="logo for images" className="" />
          balancePro
        </div>
      </Link>

      <nav>
        <span onClick={renderSignUpModal} className="navBar padH">
          {" "}
          {userID ? "Log out" : "Sign up"}{" "}
        </span>{" "}
        | <span className="padH"> About </span> |{" "}
        <span className="padH"> Contact Us </span>
      </nav>
    </header>
  );
}

export default HeaderSec;
