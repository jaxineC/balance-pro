import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DateBar from "./DateBar";
import TimeCanvas from "./TimeCanvas";

function Timeline() {
  const [Day, setDay] = useState("");

  return (
    <div className="Timeline ">
      <DateBar Day={Day} setDay={setDay} />
      <TimeCanvas Day={Day} setDay={setDay} />
    </div>
  );
}

export default Timeline;
