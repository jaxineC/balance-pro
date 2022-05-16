import React, { useState, useEffect } from "react";
import DateBar from "./DateBar";
import TaskList from "./TaskList";

function TimeCanvas({ ZDay, XPosition, Tasks }) {
  const [inputText, setInputText] = useState("");
  // ---------------------------------------------get how many weeks to render
  // let clientW = window.innerWidth;
  // let totalDays = Math.floor(ClientW / 20);
  let totalWks = 25;
  let totalDays = totalWks * 7;
  let frames = [];
  // fix prevWks=6 + today's wk +nextWks=18
  for (let i = 1; i <= totalDays; i++) {
    if (i % 7 === 0 || (i + 1) % 7 === 0) {
      frames.push(<div className="timeFrame weekend" key={i}></div>);
    } else {
      frames.push(<div className="timeFrame" key={i}></div>);
    }
  }

  // ---------------------------------------------variables for rendering styles
  const divStyle = {
    color: "red",
    backgroundColor: "#ffffff",
  };

  return (
    <div className="TimeCanvas " style={divStyle}>
      {frames}
      <TaskList ZDay={ZDay} XPosition={XPosition} Tasks={Tasks} />
    </div>
  );
}

export default TimeCanvas;
