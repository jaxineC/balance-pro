import React, { useState, useEffect } from "react";
import globe from "../icon/globe.png";
import github from "../icon/github.png";
import fb from "../icon/fb.png";

function FooterSec() {
  return (
    <footer className="FooterSec">
      {/* <div>
        <img src={globe} className="icon" alt="www" />
        <img src={github} className="icon" alt="github" />
        <img src={fb} className="icon" alt="fb" />
      </div> */}
      <div className="TextXS padV">copyright @ Jaxine Chang</div>
    </footer>
  );
}

export default FooterSec;
