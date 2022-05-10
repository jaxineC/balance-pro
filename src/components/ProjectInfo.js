import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProjectInfo() {
  return (
    <div className="ProjectInfo ">
      <div className="TextL">Project Name</div>
      <div className="TextM description">
        Detailed project infos, team, deadline, important information about the
        project. Detailed project infos, team, deadline, important information
        about the project. LIMITED TO 2 LINES.
      </div>
    </div>
  );
}

export default ProjectInfo;
