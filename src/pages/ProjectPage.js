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

  return (
    <main className="ProjectPage">
      <ProjectInfo cat="work" />
      <Timeline cat="work" inputText={inputText} />
      <Unfold />
      <ProjectInfo cat="life" />
      <Timeline cat="life" inputText={inputText} />
      <DisplayMode />
      <QuickAccess setInputText={setInputText} />
    </main>
  );
}

export default ProjectPage;
