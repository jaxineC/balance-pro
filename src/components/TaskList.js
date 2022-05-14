import React, { useState, useEffect } from "react";

function TaskList({ ZDay, XPosition }) {
  let divStyle = {
    width: 140,
    top: 0,
    left: 1220,
  };
  return (
    <li className="TaskList TextS">
      <div className="Task TextS" style={divStyle}>
        task 01
      </div>
    </li>
  );
}

export default TaskList;
