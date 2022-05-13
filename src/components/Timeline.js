import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DateBar from "./DateBar";
import TimeCanvas from "./TimeCanvas";
// import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

function Timeline({ XPosition, setXPosition }) {
  const refContainer = useRef();
  const [ZDay, setZDay] = useState({
    TODAY: 0,
    YYYY: 0,
    MM: 0,
    DD: 0,
    DAY: 0,
    MondayDate: 0,
  }); //props???

  useEffect(() => {
    // scrollLeft(1200);
    refContainer.current.scrollLeft = 1200;
  }, []);

  function printTest(event) {
    console.log(
      event.target.parentElement.parentElement.className +
        ": " +
        event.target.parentElement.parentElement.offsetLeft
    );
    console.log(
      event.target.parentElement.parentElement.className +
        ": " +
        event.target.parentElement.parentElement.scrollLeft
    );
  }

  // ---------------------------------------------variables for rendering styles
  const divStyle = {
    // color: 'blue',
    // backgroundImage: 'url(' + imgUrl + ')',
  };

  return (
    <div
      onClick={printTest}
      className="Timeline "
      style={divStyle}
      ref={refContainer}
    >
      <DateBar setZDay={setZDay} ZDay={ZDay} />
      <TimeCanvas ZDay={ZDay} />
    </div>
  );
}

export default Timeline;

// MouseEvent.clientX
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
