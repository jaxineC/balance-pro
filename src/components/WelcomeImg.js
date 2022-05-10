import React, { useState, useEffect } from "react";
import images from "../icon/images.png";

function Welcome() {
  return (
    <div className="WelcomeImg">
      <img src={images} alt="welcome image" className="placeholder" />
      <br />
      <img src={images} alt="welcome image" className="placeholder" />
    </div>
  );
}

export default Welcome;
