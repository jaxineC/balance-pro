import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DisplayMode() {
  return (
    <div className="DisplayMode ">
      <button className="modeBar Focus"> Focus </button>
      <button className="modeBar Balance"> 1 : 1 </button>
      <button className="modeBar Overlay"> Overlay </button>
    </div>
  );
}

export default DisplayMode;
