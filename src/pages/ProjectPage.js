import React, { useState, useEffect } from "react";
import "./ProjectPage.css";
import { Link } from "react-router-dom";
import DisplayMode from "../components/DisplayMode";
import Unfold from "../components/Unfold";
import QuickAccess from "../components/QuickAccess";
import ProjectInfo from "../components/ProjectInfo";
import Timeline from "../components/Timeline";
import HoverTxt from "../components/HoverTxt.js";

function ProjectPage({ userID, selectedProjects, setSelectedProjects }) {
  const [XPosition, setXPosition] = useState(1220);
  const [focus, setFocus] = useState("balance"); //"balance", "work", "life", "overlay"
  const [instruction, setInstruction] = useState("");
  const [mousePosition, setMousePosition] = useState([]);
  let divStyle;
  if (focus === "balance") {
    divStyle = {
      gridTemplateRows: "11% calc(39% - 1px) 11% calc(39% - 1px) 0%",
    };
  } else if (focus === "work") {
    divStyle = {
      gridTemplateRows: "11% calc(78% - 2px) 11% 0% 0%",
    };
  } else if (focus === "life") {
    divStyle = {
      gridTemplateRows: "11% 0% 11% calc(78% - 2px) 0%",
    };
  } else {
    divStyle = {
      gridTemplateRows: "11% 0% 11% 0% calc(78% - 2px)",
    };
  }

  return (
    <main className="ProjectPage" style={divStyle}>
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
      <Unfold
        focus={focus}
        setFocus={setFocus}
        mousePosition={mousePosition}
        setMousePosition={setMousePosition}
        instruction={instruction}
        setInstruction={setInstruction}
      />
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
      <Timeline
        userID={userID}
        cat="overlay"
        projectID={selectedProjects}
        XPosition={XPosition}
        setXPosition={setXPosition}
      />
      <DisplayMode focus={focus} setFocus={setFocus} />
      <QuickAccess XPosition={XPosition} setXPosition={setXPosition} />
      <HoverTxt instruction={instruction} mousePosition={mousePosition} />
    </main>
  );
}

export default ProjectPage;
