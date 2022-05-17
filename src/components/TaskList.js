import React, { useState, useEffect } from "react";

function TaskList({ ZDay, XPosition, Tasks, clickPosition }) {
  let tempNewTask = "";
  // let duration = Tasks[0].end;
  // console.log(duration);
  function handleChildClick(e) {
    e.stopPropagation();
  }
  function handleHover(e) {
    e.target.className.append("show");
  }
  const taskItems = Tasks.map((item) => (
    <li
      className="Task TextS"
      key={item.taskID}
      style={{
        width: ((item.end - item.start) / (60 * 60 * 24)) * 20,
        top: Tasks.indexOf(item) * 22,
        left:
          1220 + Math.floor((item.start.toDate() - Date.now()) / 86400000) * 20,
      }}
    >
      {item.content}
      <span
        onMouseEnter={handleHover}
        className="TextS"
        style={{
          position: "absolute",
          top: 18,
          left: 0,
          // display: "none",
        }}
      >
        {item.note}
      </span>
    </li>
  ));

  if (clickPosition) {
    tempNewTask = (
      <div
        style={{
          top: Tasks.length * 22,
          left: clickPosition + XPosition + 150,
          borderStyle: "none",
          borderRadius: 5,
          backgroundColor: "buleviolet",
          objectFit: "scaleDown",
        }}
      >
        <input
          className="Task TextS"
          placeholder="New task"
          style={{
            width: 140,
            top: Tasks.length * 22,
            left: clickPosition + XPosition,
            padding: 0,
            border: 1,
            borderStyle: "solid",
            borderColor: "blueviolet",
          }}
        ></input>
        <svg
          style={{
            height: 22,
            position: "absolute",
            left: clickPosition + XPosition + 145,
            top: Tasks.length * 22 + 2,
            padding: 0,
            margin: 0,
          }}
          fill="none"
          height="22"
          viewBox="0 0 24 24"
          width="18"
          // xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="m9.02975 3.3437c1.95365-.45827 3.98685-.45827 5.94055 0 2.8213.66179 5.0242 2.86472 5.686 5.68605.4583 1.95365.4583 3.98685 0 5.94055-.6618 2.8213-2.8647 5.0242-5.686 5.686-1.9537.4583-3.9869.4583-5.94055 0-2.82133-.6618-5.02425-2.8647-5.68605-5.686-.45827-1.9537-.45827-3.9869 0-5.94056.6618-2.82133 2.86472-5.02425 5.68605-5.68604zm6.02265 7.1336c.2165-.2319.2039-.59535-.028-.8118-.2319-.21644-.5953-.20391-.8118.028l-2.9448 3.1552-1.49422-1.4942c-.22431-.2243-.58798-.2243-.81228 0-.22431.2243-.22431.588 0 .8123l1.9146 1.9146c.1101.1101.2603.1708.416.1681.1558-.0027.3037-.0685.41-.1824z"
            fill="rgb(152, 152, 152)"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    );
  }

  let taskStyle = {
    width: 140,
    top: 20,
    left: 1220,
  };
  return (
    <ul onClick={handleChildClick} className="TaskList TextS">
      {taskItems}
      {tempNewTask}
    </ul>
  );
}

export default TaskList;
