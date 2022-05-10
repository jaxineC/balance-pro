import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DateBar from "./DateBar";

function TimeCanvas() {
  return (
    <div className="TimeCanvas ">
      <div className="timeFrame"></div>
    </div>
  );
}

export default TimeCanvas;
