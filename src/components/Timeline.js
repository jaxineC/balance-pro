import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import { render } from "@testing-library/react";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DateBar from "./DateBar";
import TimeCanvas from "./TimeCanvas";
// import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

function Timeline({ projectID, XPosition, setXPosition, Tasks, setTasks }) {
  const [clickPosition, setClickPosition] = useState(null);
  const [inputText, setInputText] = useState("");
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
  let tempBlankTask = "";

  useEffect(() => {
    // scrollLeft(1200);
    refContainer.current.scrollLeft = 20 * (8 * 7 + ZDay.DAY - 1); //前面 8周, 考慮改用let prevWk 計算, 重複用
    // setXPosition(refContainer.current.scrollLeft);
  }, []);

  function getDate(event) {
    setXPosition(refContainer.current.scrollLeft); //temp
    setClickPosition(Math.floor(event.clientX / 20) * 20);
    console.log(clickPosition);
    console.log(XPosition);
    let x = Tasks.length;
    console.log(x);

    function renderBlankTask() {
      //取得滑鼠在畫面距離0,0位差/20 = 以昨天為基準加幾天
      let clickX = Math.floor(event.clientX / 20);
      //然後取得 (scroollLeft-1200)/20 = 畫面往未來移幾天 => 昨天加點差+滑動差 = 使用者點的日子
      //clientX+refContainer.current.scrollLeft =renderTempBoxLeft
      let scrollPass =
        Math.floor(
          (refContainer.current.scrollLeft - 20 * (8 * 7 + ZDay.DAY - 1)) / 20
        ) + 1;
      let addNewTaskStartDate =
        ZDay.TODAY + (clickX + scrollPass - 1) * (1000 * 60 * 60 * 24);
      console.log("Clicked on " + new Date(addNewTaskStartDate));
    }

    // write in firestore

    // async function addTodosDoc() {
    //   try {
    //     const docRef = await addDoc(collection(db, "Tasks"), {
    //       balanced: true,
    //       cat: "work",
    //       content: inputText,
    //       end: addNewTaskStartDate + 7 * 24 * 60 * 60 * 1000,
    //       projectID: "3uNnaOyYZQnAdO0oB5jQ",
    //       start: addNewTaskStartDate,
    //       taskID: Date.now().toString(),
    //     });

    //     console.log("Document written with ID: ", docRef.id);
    //   } catch (event) {
    //     console.error("Error adding document: ", event);
    //   }
    // }
    renderBlankTask();
    // addTodosDoc();
  }

  // ---------------------------------------------variables for rendering styles

  return (
    <div onClick={getDate} className="Timeline " ref={refContainer}>
      <DateBar setZDay={setZDay} ZDay={ZDay} />
      <TimeCanvas
        ZDay={ZDay}
        XPosition={XPosition}
        Tasks={Tasks}
        clickPosition={clickPosition}
      />
      {tempBlankTask}
    </div>
  );
}

export default Timeline;
