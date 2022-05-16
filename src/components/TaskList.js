import React, { useState, useEffect } from "react";

function TaskList({ ZDay, XPosition, Tasks }) {
  // let duration = Tasks[0].end;
  // console.log(duration);

  const taskItems = Tasks.map((item) => (
    <li
      className="Task"
      key={item.taskID}
      style={{
        width: ((item.end - item.start) / (60 * 60 * 24)) * 20,
        top: (Tasks.indexOf(item) + 1) * 20,
        left: 140,
      }}
    >
      <span>
        {item.content}
        |Left:
        {((item.start - Date.now()) / (60 * 60 * 24)).toString()}
      </span>
    </li>
  ));

  let taskStyle = {
    width: 140,
    top: 20,
    left: 1220,
  };
  return (
    <li className="TaskList TextS">
      <div className="Task TextS" style={taskStyle}>
        {taskItems}
      </div>
    </li>
  );
}

export default TaskList;
