import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import globe from "../icon/globe.png";
import github from "../icon/github.png";
import fb from "../icon/fb.png";

function FooterSec() {
  return (
    <footer className="FooterSec">
      <div>
        {/* <img src={globe} className="icon" alt="www" /> */}
        {/* <a href="https://github.com/jaxineC">
          <img src={github} className="icon" alt="github" />
        </a> */}
        {/* <a href="https://github.com/jaxineC">
          <img src={github} className="icon" alt="github" />
        </a> */}

        {/* <img src={fb} className="icon" alt="fb" /> */}
      </div>
      <div className="TextXS padV">copyright @ Jaxine Chang</div>
    </footer>
  );
}

export default FooterSec;
