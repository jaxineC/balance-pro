import React, { useState, useEffect } from "react";
import Logo45b from "../media/Logo45b.png";

function NavSec() {
  return (
    <header className="HeaderSec">
      <div className="headerLogo">
        <img src={Logo45b} alt="logo for images" className="" />
        balancePro
      </div>

      <nav>
        <span className="padH"> Sing up </span> |{" "}
        <span className="padH"> About </span> |{" "}
        <span className="padH"> Contact Us </span>
      </nav>
    </header>
  );
}

export default NavSec;
