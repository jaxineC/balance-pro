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
    // refContainer.current.scrollLeft = 20 * (8 * 7 - 1); //前面 8周(露出一個周日當padding 20px) =1100
    refContainer.current.scrollLeft = XPosition;
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
    let scrollPlusDay = Math.floor(
      (refContainer.current.scrollLeft - 20 * (8 * 7 - 1)) / 20
    );
    let clickPlusDays = Math.floor(event.clientX / 20);
    let clickDay =
      (scrollPlusDay + clickPlusDays + ZDay.TODAY) * (1000 * 86400) + 1;
    // setClickDate(clickDay);
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
        ZDay.TODAY + (clickX + scrollPass - ZDay.DAY) * (1000 * 60 * 60 * 24);
      setClickDate(addNewTaskStartDate);
      setIsAddTask(true);
    }

    renderAddTaskModal();
  }

  // function handleMouseMove(event) {
  //   if (isStretch) {
  //     let x = event.clientX - initMouseClientX;
  //     date === "start" ? setStretchX([x, 0]) : setStretchX([0, x]);
  //   }
  //   if (isDrag) {
  //     // setClientMouseX(event.clientX);
  //     let x = event.clientX - initMouseClientX;
  //     setDeltaX(x);
  //   }
  // }

  // function endDragStretch(event) {
  //   if (isDrag === true) {
  //     setIsDrag(false);
  //     setDeltaX(0);
  //     let x = ((event.clientX - initMouseClientX) / 20) * 1000 * 60 * 60 * 24;
  //     updateData(db, col, item.taskID, {
  //       end: new Date(item.end.seconds * 1000 + x),
  //       start: new Date(item.start.seconds * 1000 + x),
  //     });
  //     setInitMouseClientX(0);
  //   }
  //   if (isStretch === true) {
  //     setIsStretch(false);
  //     let data = {};
  //     let x = ((event.clientX - initMouseClientX) / 20) * 1000 * 60 * 60 * 24;
  //     if (stretchX[0]) {
  //       data = { start: new Date(item.start.seconds * 1000 + x) };
  //       // Timestamp.fromDate(new Date(clickDate + 1000 * 60 * 60 * 24 * 7))
  //     } else {
  //       data = { end: new Date(item.end.seconds * 1000 + x) };
  //     }
  //     setStretchX([0, 0]);
  //     updateData(db, col, item.taskID, data);
  //     setInitMouseClientX(0);
  //   }
  // }
  return (
    <div
      onClick={handleAddTask}
      // onMouseUp={endDragStretch}
      // onMouseMove={handleMouseMove}
      className="Timeline "
      ref={refContainer}
    >
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
        projectID={projectID}
        isAddTask={isAddTask}
      />
    </div>
  );
}

export default Timeline;
