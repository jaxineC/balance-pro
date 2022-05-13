import React, { useState, useEffect } from "react";
import "./ProjectPage.css";
import { Link } from "react-router-dom";
import DisplayMode from "../components/DisplayMode";
import Unfold from "../components/Unfold";
import QuickAccess from "../components/QuickAccess";
import ProjectInfo from "../components/ProjectInfo";
import Timeline from "../components/Timeline";

function ProjectPage({ userID, selectedProjects, setSelectedProjects }) {
  const [workTasks, setWorkTasks] = useState([]);
  const [lifeTasks, setWLifeTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [XPosition, setXPosition] = useState(1220);

  return (
    <main className="ProjectPage">
      <ProjectInfo cat="work" />
      <Timeline
        cat="work"
        inputText={inputText}
        XPosition={XPosition}
        setXPosition={setXPosition}
      />
      <Unfold />
      <ProjectInfo cat="life" />
      <Timeline
        cat="life"
        inputText={inputText}
        XPosition={XPosition}
        setXPosition={setXPosition}
      />
      <DisplayMode />
      <QuickAccess setInputText={setInputText} />
    </main>
  );
}

export default ProjectPage;
