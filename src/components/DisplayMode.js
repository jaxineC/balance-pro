import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledDisplayMode } from "../styles/styledComponents";

function DisplayMode({ focus, setFocus, isDesktop }) {
  return (
    <StyledDisplayMode focus={focus} className="DisplayMode ">
      <button
        onClick={(event) => {
          setFocus("work");
        }}
        className="Focus"
      >
        {" "}
        Focus{" "}
      </button>
      <button
        onClick={() => {
          setFocus("balance");
        }}
        className="Balance"
      >
        {" "}
        1 : 1{" "}
      </button>
      <button
        onClick={() => {
          setFocus("overlay");
        }}
        className="Overlay"
      >
        {" "}
        Overlay{" "}
      </button>
      {/* {cat === "overlay" ? (
        <StyledColorpicker type="color" value="#666666"></StyledColorpicker>
      ) : (
        ""
      )} */}
    </StyledDisplayMode>
  );
}

export default DisplayMode;
