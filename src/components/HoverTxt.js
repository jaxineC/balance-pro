import React, { useState, useEffect } from "react";

function HoverTxt({ instruction, mousePosition }) {
  return (
    <div
      className="HoverTxt TextS"
      style={{
        color: "#000000",
        display: instruction ? "block" : "none",
        position: "fixed",
        top: instruction ? mousePosition[1] - 10 : 0,
        left: instruction ? mousePosition[0] + 10 : 0,
        backgroundColor: "#FAE6FF",

        height: 4,
        // borderBottom: "1px solid blueviolet",
        textAlign: "center",
      }}
    >
      <span
        style={{ position: "relative", bottom: "10px", padding: "0px 3px" }}
      >
        {instruction}
      </span>
    </div>
  );
}

export default HoverTxt;
