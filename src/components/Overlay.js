import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import { getDefaultNormalizer, render } from "@testing-library/react";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DateBar from "./DateBar";
import TimeCanvas from "./TimeCanvas";

function Timeline({ userID, cat, projectID, XPosition, setXPosition, Tasks }) {
  //--------------------------------------------------useState & variables---------------------------------------// 0
  //--------------------------------------------------useState & variables---------------------------------------//
  const [isAddTask, setIsAddTask] = useState(false);
  const [clickPosition, setClickPosition] = useState(null);
  const [clickDate, setClickDate] = useState(0); //delelte this after 5/23
  const [ZDay, setZDay] = useState({
    TODAY: 0,
    YYYY: 0,
    MM: 0,
    DD: 0,
    DAY: 0,
    MondayDate: 0,
  });
  const refContainer = useRef();
  useEffect(() => {
    // scrollLeft(1200);
    refContainer.current.scrollLeft = 20 * (8 * 7 - 1); //前面 8周
    // setXPosition(refContainer.current.scrollLeft);
  }, []);

  //--------------------------------------------------handle event-----------------------------------------------// 1
  //--------------------------------------------------handle event-----------------------------------------------//
  function handleAddTask(event) {
    getDate(event);
    if (isAddTask) {
      setIsAddTask(false);
    }
  }

  function getDate(event) {
    // find current 0,0 date on screen (scroll adjust days +click plusdays)
    let baselineMvDays = Math.floor(
      (refContainer.current.scrollLeft - 1220) / 20
    );
    let plusDays = Math.floor(event.clientX / 20);
    let clickDay = (baselineMvDays + plusDays) * (1000 * 86400) + ZDay.TODAY;
    setClickDate(clickDay);
    setXPosition(refContainer.current.scrollLeft); //temp
    setClickPosition(Math.floor(event.clientX / 20) * 20);

    function renderAddTaskModal() {
      //取得滑鼠在畫面距離0,0位差/20 = 以上週日為基準加幾天
      let clickX = Math.floor(event.clientX / 20) - 1;
      //然後取得 (scroollLeft-1200)/20 = 畫面往未來移幾天 => 昨天加點差+滑動差 = 使用者點的日子
      //clientX+refContainer.current.scrollLeft =renderTempBoxLeft
      let scrollPass =
        Math.floor((refContainer.current.scrollLeft - 20 * (8 * 7 - 1)) / 20) +
        1;
      let addNewTaskStartDate =
        ZDay.TODAY +
        (clickX + scrollPass - ZDay.DAY + 1) * (1000 * 60 * 60 * 24);

      setIsAddTask(true);
      console.log("Clicked on " + new Date(addNewTaskStartDate));
      console.log(clickX);
    }

    renderAddTaskModal();
  }

  return (
    <div onClick={handleAddTask} className="Timeline " ref={refContainer}>
      <DateBar setZDay={setZDay} ZDay={ZDay} />
      <TimeCanvas
        userID={userID}
        cat={cat}
        ZDay={ZDay}
        XPosition={XPosition}
        Tasks={Tasks}
        clickPosition={clickPosition}
        clickDate={clickDate}
        setClickPosition={setClickPosition}
        projectID={projectID[0]}
        isAddTask={isAddTask}
      />
      <TimeCanvas
        userID={userID}
        cat={cat}
        ZDay={ZDay}
        XPosition={XPosition}
        Tasks={Tasks}
        clickPosition={clickPosition}
        clickDate={clickDate}
        setClickPosition={setClickPosition}
        projectID={projectID[1]}
        isAddTask={isAddTask}
      />
    </div>
  );
}

export default Timeline;