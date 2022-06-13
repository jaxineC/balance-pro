import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DateBar({ ZDay, setZDay }) {
  let options = { month: "long" };
  let prevRows = [];
  let nextRows = [];
  let ZMondayDate = "";

  // ---------------------------------------------get TODAY & Monday
  useEffect(() => {
    let TODAY = Date.now(); //millisecond of NOW 1652242176462 (can be manipulated with math)
    let date = new Date(TODAY); //UTC Wed May 11 2022 12:09:17 GMT+0800 (can getDate/Fullyear...)
    let [YYYY, MM, DD, DAY] = [
      date.getFullYear(),
      new Intl.DateTimeFormat("en-US", options).format(date),
      date.getDate().toString().padStart(2, "0"),
      date.getDay(),
    ];
    let ZMonday = TODAY - (DAY - 1) * 86400 * 1000;
    let ZMondayDate = new Date(ZMonday).getDate().toString().padStart(2, "0");
    setZDay({
      TODAY: TODAY,
      YYYY: YYYY,
      MM: MM,
      DD: DD,
      DAY: DAY,
      MondayDate: ZMondayDate,
    });
  }, []);

  // ---------------------------------------------render prev (8wks+ ZDay.DAY-1) days
  function Prev() {
    let prevWk = 8;
    let prevDAY = Date.now() - (ZDay.DAY + 6 + prevWk * 7) * 86400 * 1000;

    for (let i = 1; i <= prevWk; i++) {
      let prevDate = new Date(prevDAY + 7 * 86400 * 1000 * (i - 1));
      let [prevYYYY, prevMM] = [
        prevDate.getFullYear(),
        new Intl.DateTimeFormat("en-US", options).format(prevDate),
      ];
      let nextDate = new Date(prevDAY + 7 * 86400 * 1000 * i);
      let [nextYYYY, nextMM, nextDD, nextDAY] = [
        nextDate.getFullYear(),
        new Intl.DateTimeFormat("en-US", options).format(nextDate),
        nextDate.getDate().toString().padStart(2, "0"),
        nextDate.getDay(),
      ];
      if (nextYYYY === prevYYYY) {
        nextYYYY = null;
      }
      if (nextMM === prevMM) {
        nextMM = ".";
      }
      prevRows.push(
        <div className="TextS d" key={i}>
          <div>
            {nextYYYY} {nextMM}
          </div>
          <div>{nextDD}</div>
        </div>
      );
    }
  }
  // ZDay itself +position: relative; left:140px*10+20px*(ZDay.DAY-1)
  // ---------------------------------------------render next (15wks+ 7-ZDay.DAY) days
  function Next() {
    let totalWk = 16;

    for (let i = 0; i <= totalWk; i++) {
      let prevDate = new Date(
        ZDay.TODAY + (8 - ZDay.DAY) * 86400 * 1000 + 7 * 86400 * 1000 * (i - 1)
      );
      let [prevYYYY, prevMM] = [
        prevDate.getFullYear(),
        new Intl.DateTimeFormat("en-US", options).format(prevDate),
      ];
      let nextDate = new Date(
        ZDay.TODAY + (8 - ZDay.DAY) * 86400 * 1000 + 7 * i * 86400 * 1000
      );
      let [nextYYYY, nextMM, nextDD, nextDAY] = [
        nextDate.getFullYear(),
        new Intl.DateTimeFormat("en-US", options).format(nextDate),
        nextDate.getDate().toString().padStart(2, "0"),
        nextDate.getDay(),
      ];
      if (nextYYYY === prevYYYY) {
        nextYYYY = null;
      }
      if (nextMM === prevMM) {
        nextMM = ".";
      }
      nextRows.push(
        <div className="TextS d" key={i}>
          <div>
            {nextYYYY} {nextMM}
          </div>
          <div>{nextDD}</div>
        </div>
      );
    }
  }

  // ---------------------------------------------call functions/ divstyle
  Prev();
  Next();
  const divStyle = {
    color: "black",
    fontWeight: 500,
    width: (8 - ZDay.DAY) * 20 - 3,
    overflow: "visible",
    // backgroundColor: "#ffffff",
  };

  return (
    <div className="TextS DateBar ">
      {prevRows}
      <div
        style={{
          width: (ZDay.DAY - 1) * 20,
          borderLeft: "1px solid #eeeeee",
          borderBottom: "1px solid #666666",
        }}
      >
        <div>.{/* {ZDay.YYYY} {ZDay.MM} */}</div>
        {ZDay.DAY === 1 ? "" : ZDay.MondayDate}
      </div>
      <div className="TextS d" style={divStyle}>
        <div>
          {ZDay.YYYY} {ZDay.MM}
        </div>
        {ZDay.DD}
      </div>
      {nextRows}
    </div>
  );
}

export default DateBar;
