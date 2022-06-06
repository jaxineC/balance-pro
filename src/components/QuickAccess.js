import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function QuickAccess({ XPosition, setXPosition }) {
  const [inputText, setInputText] = useState(""); //inside quickacess or search component for search bar

  return (
    <div className="QuickAccess TextS">
      {/* <div className="circle">Undo</div>
      <div className="circle">Redo</div> */}
      <div className="circle">Search</div>
      <div
        className="circle"
        onClick={() => {
          console.log(XPosition);
          setXPosition(1100);
          console.log(XPosition);
        }}
      >
        Today
      </div>
      <div className="circle">Help</div>
    </div>
  );
}

export default QuickAccess;
