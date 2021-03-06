import React, { useState, useEffect } from "react";
import AddTaskModal from "./AddTaskModal";
import DateBar from "./DateBar";
import TaskList from "./TaskList";
import EditTaskModal from "./EditTaskModal.js";

function TimeCanvas({
  userID,
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
  isDrag,
  setIsDrag,
  currentMouseLocation,
  setCurrentMouseLocation,
  isStretch,
  setIsStretch,
  isEditTask,
  setIsEditTask,
  refContainer,
}) {
  //--------------------------------------------------useState & variables---------------------------------------// 0
  //--------------------------------------------------useState & variables---------------------------------------//

  const [targetTask, setTargetTask] = useState("");
  const [editTaskItem, setEditTaskItem] = useState("");
  const [currentZero, setCurrentZero] = useState(XPosition);
  // let clientW = window.innerWidth;
  // let totalDays = Math.floor(ClientW / 20);
  let totalWks = 26;
  let totalDays = totalWks * 7;
  let frames = [];

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
        userID={userID}
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
        isEditTask={isEditTask}
        setIsEditTask={setIsEditTask}
        targetTask={targetTask}
        setTargetTask={setTargetTask}
        editTaskItem={editTaskItem}
        setEditTaskItem={setEditTaskItem}
        isDrag={isDrag}
        setIsDrag={setIsDrag}
        currentMouseLocation={currentMouseLocation}
        setCurrentMouseLocation={setCurrentMouseLocation}
        isStretch={isStretch}
        setIsStretch={setIsStretch}
        currentZero={currentZero}
        setCurrentZero={setCurrentZero}
        refContainer={refContainer}
      />
      <EditTaskModal
        userID={userID}
        isEditTask={isEditTask}
        setIsEditTask={setIsEditTask}
        targetTask={targetTask}
        setTargetTask={setTargetTask}
        projectID={projectID}
        editTaskItem={editTaskItem}
        setEditTaskItem={setEditTaskItem}
        XPosition={XPosition}
        refContainer={refContainer}
        currentZero={currentZero}
        setCurrentZero={setCurrentZero}
      />
      {frames}
    </div>
  );
}

export default TimeCanvas;
