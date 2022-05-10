import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DateBar from "./DateBar";
import TimeCanvas from "./TimeCanvas";

function Timeline() {
  return (
    <div className="Timeline ">
      <DateBar />
      <TimeCanvas />
    </div>
  );
}

export default Timeline;
