import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DisplayMode({ focus, setFocus, isDesktop }) {
  return (
    <div className="DisplayMode ">
      <button
        onClick={(event) => {
          setFocus("work");
        }}
        className="modeBar Focus"
        style={{
          borderColor:
            focus === "work" || focus === "life" ? "#e6f252" : "#eeeeee",
        }}
      >
        {" "}
        Focus{" "}
      </button>
      <button
        onClick={() => {
          setFocus("balance");
        }}
        className="modeBar Balance"
        style={{
          borderColor: focus === "balance" ? "#e6f252" : "#eeeeee",
        }}
      >
        {" "}
        1 : 1{" "}
      </button>
      <button
        onClick={() => {
          setFocus("overlay");
        }}
        className="modeBar Overlay"
        style={{
          borderColor: focus === "overlay" ? "#e6f252" : "#eeeeee",
        }}
      >
        {" "}
        Overlay{" "}
      </button>
    </div>
  );
}

export default DisplayMode;
