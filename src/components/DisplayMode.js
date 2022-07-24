import React from "react";
import { StyledDisplayMode } from "../styles/styledComponents";

function DisplayMode({ focus, setFocus }) {
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
    </StyledDisplayMode>
  );
}

export default DisplayMode;
