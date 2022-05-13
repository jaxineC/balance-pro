import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DateBar from "./DateBar";

function TimeCanvas({ ZDay }) {
  // ---------------------------------------------get how many weeks to render
  // let clientW = window.innerWidth;
  // let totalDays = Math.floor(ClientW / 20);
  let totalWks = 25;
  let totalDays = totalWks * 7;
  let frames = [];
  // fix prevWks=6 + today's wk +nextWks=18
  for (let i = 1; i <= totalDays; i++) {
    if (i % 7 === 0 || (i + 1) % 7 === 0) {
      frames.push(<div className="timeFrame weekend"></div>);
    } else {
      frames.push(<div className="timeFrame"></div>);
    }
  }

  // old code ---- when totalDays is fixed according to ZDay
  // for (let i = 0; i < totalDays; i++) {
  //   if ((ZDay.DAY + i) % 7 === 0 || (ZDay.DAY + i - 1) % 7 === 0) {
  //     frames.push(<div className="timeFrame weekend"></div>);
  //   } else {
  //     frames.push(<div className="timeFrame"></div>);
  //   }
  // }

  function printTest(event) {
    console.log(event.target.className + ": " + event.target.offsetWidth);
    console.log(event.target.className + ": " + event.target.scrollLeft);
  }

  const divStyle = {
    color: "red",
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    // position: "relative",
    // left: -(7 + ZDay.DAY - 1) * 20,
    // color: 'blue',
    // backgroundImage: 'url(' + imgUrl + ')',
  };
  return (
    <div onClick={printTest} className="TimeCanvas " style={divStyle}>
      {frames}
    </div>
  );
}

export default TimeCanvas;
