import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DateBar() {
  return (
    <div className="DateBar ">
      <div className="TextS">
        <span>2022 </span>
        <span>December</span>
      </div>
      <div className="TextS">30</div>
    </div>
  );
}

export default DateBar;
