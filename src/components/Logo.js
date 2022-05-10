import React, { useState, useEffect } from "react";
import LogoImage from "../media/Logo144.png";

function Logo() {
  return (
    <div className="Logo">
      <img src={LogoImage} alt="logo for images" className="image" />
    </div>
  );
}

export default Logo;
