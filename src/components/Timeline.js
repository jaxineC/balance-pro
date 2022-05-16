import { render } from "@testing-library/react";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DateBar from "./DateBar";
import TimeCanvas from "./TimeCanvas";
// import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

function Timeline({ projectID, XPosition, setXPosition, Tasks, setTasks }) {
  const refContainer = useRef();
  const [ZDay, setZDay] = useState({
    //props???
    TODAY: 0,
    YYYY: 0,
    MM: 0,
    DD: 0,
    DAY: 0,
    MondayDate: 0,
  });

  useEffect(() => {
    // scrollLeft(1200);
    refContainer.current.scrollLeft = 1200;
    // setXPosition(refContainer.current.scrollLeft);
  }, []);

  function printTest(event) {
    // console.log(
    //   event.target.parentElement.parentElement.className +
    //     ": " +
    //     event.target.parentElement.parentElement.scrollLeft
    // );
    //表面0,0 = 昨天 (因為有padding20pixel給DateBar)
    //取得滑鼠在畫面距離0,0位差/20 = 以昨天為基準加幾天
    console.log(
      "clicking on" +
        Math.floor(event.clientX / 20) +
        "days from origin day(yesterday)"
    );
    let clickOver = Math.floor(event.clientX / 20);
    //然後取得 (scroollLeft-1200)/20 = 畫面往未來移幾天 => 昨天加點差+滑動差 = 使用者點的日子
    console.log(
      "scroll over " +
        Math.floor((refContainer.current.scrollLeft - 1200) / 20) +
        "days"
    );
    let scrollOver = Math.floor((refContainer.current.scrollLeft - 1200) / 20);
    console.log(
      "user clicked on " + (clickOver + scrollOver) + "days from yesterday"
    );
    // console.log(Date.now());
  }

  function test() {
    console.log(Tasks);
  }

  // ---------------------------------------------variables for rendering styles
  const divStyle = {
    // color: 'blue',
    // backgroundImage: 'url(' + imgUrl + ')',
  };

  return (
    <div
      onClick={test}
      className="Timeline "
      style={divStyle}
      ref={refContainer}
    >
      <DateBar setZDay={setZDay} ZDay={ZDay} />
      <TimeCanvas ZDay={ZDay} XPosition={XPosition} Tasks={Tasks} />
    </div>
  );
}

export default Timeline;

// MouseEvent.clientX
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
