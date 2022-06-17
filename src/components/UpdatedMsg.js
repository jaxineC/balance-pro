import React from "react";
import { StyledUpdatedMsg } from "../styles/SharedStyled.js";

function UpdatedMsg({ updateAlert }) {
  return (
    <StyledUpdatedMsg updateAlert={updateAlert}>
      <span
        style={{
          display: updateAlert === "ok" ? "block" : "none",
          fontSize: 14,
          color: "blueviolet",
          position: "absolute",
          top: -10,
        }}
      >
        updated!
      </span>
      <span
        style={{
          display: updateAlert === "fail" ? "block" : "none",
          position: "absolute",
          left: 0,
          top: -12,
          padding: "0px 4px",
          backgroundColor: "#fae6ff",
        }}
      >
        Oops, try again!
      </span>
    </StyledUpdatedMsg>
  );
}

export default UpdatedMsg;
