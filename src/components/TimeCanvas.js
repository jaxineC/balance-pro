import React, { useState, useEffect } from "react";
import AddTaskModal from "./AddTaskModal";
import DateBar from "./DateBar";
import TaskList from "./TaskList";

function TimeCanvas({
  cat,
  clickPosition,
  clickDate,
  projectID,
  setClickPosition,
  Tasks,
  XPosition,
  ZDay,
  isAddTask,
  setIsAddTask,
}) {
  //--------------------------------------------------useState & variables---------------------------------------// 0
  //--------------------------------------------------useState & variables---------------------------------------//

  // let clientW = window.innerWidth;
  // let totalDays = Math.floor(ClientW / 20);
  let totalWks = 25;
  let totalDays = totalWks * 7;
  let frames = [];
  //--------------------------------------------------handle event-----------------------------------------------// 1
  //--------------------------------------------------handle event-----------------------------------------------//

  //--------------------------------------------------CRUD-------------------------------------------------------// 2
  //--------------------------------------------------CRUD-------------------------------------------------------//
  //--------------------------------------------------RENDER-----------------------------------------------------// 3
  //--------------------------------------------------RENDER-----------------------------------------------------//
  // fix prevWks=6 + today's wk +nextWks=18
  for (let i = 1; i <= totalDays; i++) {
    if (i % 7 === 0 || (i + 1) % 7 === 0) {
      frames.push(<div className="timeFrame weekend" key={i}></div>);
    } else {
      frames.push(<div className="timeFrame" key={i}></div>);
    }
  }

  const divStyle = {
    backgroundColor: "#ffffff",
  };
  return (
    <div className="TimeCanvas " style={divStyle}>
      <TaskList
        cat={cat}
        ZDay={ZDay}
        XPosition={XPosition}
        Tasks={Tasks}
        clickPosition={clickPosition}
        clickDate={clickDate}
        setClickPosition={setClickPosition}
        projectID={projectID}
        isAddTask={isAddTask}
        setIsAddTask={setIsAddTask}
      />
      {frames}
    </div>
  );
}

export default TimeCanvas;
