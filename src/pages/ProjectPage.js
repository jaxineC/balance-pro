import React, { useState, useEffect } from "react";
import "./ProjectPage.css";
import { Link } from "react-router-dom";
import DisplayMode from "../components/DisplayMode";
import Divider from "../components//Divider";
import QuickAccess from "../components/QuickAccess";
import ProjectInfo from "../components/ProjectInfo";
import Timeline from "../components/Timeline";

function ProjectPage() {
  return (
    <main className="ProjectPage">
      <ProjectInfo cat="work" />
      <Timeline cat="work" />
      <Divider />
      <ProjectInfo cat="life" />
      <Timeline cat="life" />
      <DisplayMode />
      <QuickAccess />
    </main>
  );
}

export default ProjectPage;
