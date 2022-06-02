import React, { useState, useEffect } from "react";
import "./ProjectPage.css";
import { Link } from "react-router-dom";
import DisplayMode from "../components/DisplayMode";
import Unfold from "../components/Unfold";
import QuickAccess from "../components/QuickAccess";
import ProjectInfo from "../components/ProjectInfo";
import Timeline from "../components/Timeline";

function ProjectPage({ userID, selectedProjects, setSelectedProjects }) {
  const [XPosition, setXPosition] = useState(1220);

  return (
    <main className="ProjectPage">
      <ProjectInfo
        userID={userID}
        cat="work"
        selectedProjects={selectedProjects}
      />
      <Timeline
        userID={userID}
        cat="work"
        projectID={selectedProjects[0]}
        XPosition={XPosition}
        setXPosition={setXPosition}
      />
      <Unfold />
      <ProjectInfo
        userID={userID}
        cat="life"
        selectedProjects={selectedProjects}
      />
      <Timeline
        userID={userID}
        cat="life"
        projectID={selectedProjects[1]}
        XPosition={XPosition}
        setXPosition={setXPosition}
      />
      <DisplayMode />
      <QuickAccess />
    </main>
  );
}

export default ProjectPage;
