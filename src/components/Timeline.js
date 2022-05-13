import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DateBar from "./DateBar";
import TimeCanvas from "./TimeCanvas";
// import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

function Timeline() {
  const [ZDay, setZDay] = useState({ TODAY: 0, YYYY: 0, MM: 0, DD: 0, DAY: 0 }); //props???
  const [ZPosition, setZPosition] = useState("");
  const [XPosition, setXPosition] = useState(0);

  useEffect(() => {}, []);

  // ---------------------------------------------variables for rendering styles
  const divStyle = {
    // color: 'blue',
    // backgroundImage: 'url(' + imgUrl + ')',
  };
  return (
    <div className="Timeline " style={divStyle}>
      <DateBar setZDay={setZDay} ZDay={ZDay} />
      <TimeCanvas ZDay={ZDay} />
    </div>
  );
}

export default Timeline;
