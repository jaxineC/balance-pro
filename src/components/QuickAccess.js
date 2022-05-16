import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function QuickAccess() {
  const [inputText, setInputText] = useState(""); //inside quickacess or search component for search bar

  return (
    <div className="QuickAccess TextS">
      <div className="circle">Undo</div>
      <div className="circle">
        Redo
        {/* <img src={globe} className="icon" /> */}
      </div>
      <div className="circle">Search</div>
      <div className="circle">Today</div>
      <div className="circle">Help</div>
    </div>
  );
}

export default QuickAccess;
