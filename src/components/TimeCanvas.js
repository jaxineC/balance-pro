import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DateBar from "./DateBar";

function TimeCanvas({ Day }) {
  // ---------------------------------------------get how many weeks to render
  let clientW = window.innerWidth;
  let totalNumber = Math.floor(clientW / 20);
  let frames = [];
  let test = (
    <div>
      <div className="timeFrame"></div>
      <div className="timeFrame"></div>
      <div className="timeFrame"></div>
      <div className="timeFrame"></div>
      <div className="timeFrame"></div>
      <div className="timeFrame weekend"></div>
      <div className="timeFrame weekend"></div>
    </div>
  );
  for (let i = 0; i < totalNumber; i++) {
    if ((7 - Day + i - 1) % 7 === 0 || (6 - Day + i - 1) % 7 === 0) {
      frames.push(<div className="timeFrame weekend"></div>);
    } else {
      frames.push(<div className="timeFrame"></div>);
    }
  }

  return <div className="TimeCanvas ">{frames}</div>;
}

export default TimeCanvas;
