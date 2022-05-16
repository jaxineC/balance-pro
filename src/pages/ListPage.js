import React, { useState, useEffect } from "react";
import "./ListPage.css";
import { Link } from "react-router-dom";
import WelcomeTxt from "../components/WelcomeTxt";
import AddProject from "../components/AddProject";
import ProjectList from "../components/ProjectList";
import Background from "../components/Background";

function ListPage({ userID, projects, setProjects }) {
  return (
    <main className="ListPage">
      <WelcomeTxt userID={userID} />
      <AddProject userID={userID} />
      <ProjectList
        cat="work"
        userID={userID}
        projects={projects}
        setProjects={setProjects}
      />

      <ProjectList
        cat="life"
        userID={userID}
        projects={projects}
        setProjects={setProjects}
      />
      <Background />
    </main>
  );
}

export default ListPage;
