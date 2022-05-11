import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DateBar({ setDay }) {
  // ---------------------------------------------get today
  let today = Date.now(); //millisecond of NOW 1652242176462 (can be manipulated with math)
  let date = new Date(today); //UTC Wed May 11 2022 12:09:17 GMT+0800 (can getDate/Fullyear...)
  let options = { month: "long" };
  console.log(new Date(today + 7 * 24 * 60 * 60 * 1000));
  let [YYYY, MM, DD, DAY] = [
    date.getFullYear(),
    new Intl.DateTimeFormat("en-US", options).format(date),
    // date.getMonth().toString(),
    date.getDate().toString().padStart(2, "0"),
    date.getDay(),
  ];
  console.log(DAY);
  setDay(DAY);

  // ---------------------------------------------get how many weeks to render
  let clientW = window.innerWidth;
  let totalNumber = Math.floor(clientW / 140);
  let rows = [];
  for (let i = 0; i < totalNumber; i++) {
    // ---------------------------------------------get next week's date
    let nextDate = new Date(today + 7 * 24 * 60 * 60 * 1000 * i);
    let nextDD = nextDate.getDate().toString().padStart(2, "0");
    rows.push(<div className="TextS d">{nextDD}</div>);
  }

  console.log(totalNumber);
  return (
    <div className="DateBar ">
      <div className="TextS ym">
        <span>{YYYY} </span>
        <span>{MM}</span>
      </div>
      <div className="TextS date">{rows}</div>
    </div>
  );
}

export default DateBar;
