import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hashtag from "./Hashtag";

function ProjectInfo() {
  return (
    <div className="ProjectInfo ">
      <div className="projectName">
        <div className="TextL">Project Name</div>
        <div className="TextS">2021/12/27 ~ 2022/07/08</div>
      </div>
      <Hashtag />
    </div>
  );
}

export default ProjectInfo;
