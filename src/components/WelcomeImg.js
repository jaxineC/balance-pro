import React, { useState, useEffect } from "react";
import images from "../icon/images.png";
import cover from "../icon/2201_w039_n003_74b_p1_74 [Converted].png";

function Welcome() {
  return (
    <div className="WelcomeImg">
      <img
        src={cover}
        alt="welcome"
        style={{
          objectFit: "cover",
          height: "95%",
          width: "120%",
          overflow: "visible",
        }}
      />
      <div className="TextXS">
        <a
          href="https://www.freepik.com/vectors/working-time"
          style={{ color: "#dddddd" }}
        >
          Working time vector created by upklyak - www.freepik.com
        </a>
      </div>
    </div>
  );
}

export default Welcome;
