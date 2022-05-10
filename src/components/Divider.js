import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import unfold from "../icon/001-unfold-1.png";

function Divider() {
  return (
    <div className="Divider ">
      <img src={unfold} alt="work project" className="icon" />
    </div>
  );
}

export default Divider;
