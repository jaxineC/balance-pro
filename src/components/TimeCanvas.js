import React, { useState, useEffect } from "react";
import DateBar from "./DateBar";
import TaskList from "./TaskList";

// Container/canvas for TaskList
// Add new Task
function TimeCanvas({
  ZDay,
  XPosition,
  Tasks,
  clickPosition,
  clickDate,
  setClickPosition,
}) {
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
  function handleAddTask(event) {}

  // ---------------------------------------------variables for rendering styles
  const divStyle = {
    color: "red",
    backgroundColor: "#ffffff",
  };

  return (
    <div onClick={handleAddTask} className="TimeCanvas " style={divStyle}>
      <TaskList
        ZDay={ZDay}
        XPosition={XPosition}
        Tasks={Tasks}
        clickPosition={clickPosition}
        clickDate={clickDate}
        setClickPosition={setClickPosition}
      />
      {frames}
    </div>
  );
}

export default TimeCanvas;
// MouseEvent.clientX
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
