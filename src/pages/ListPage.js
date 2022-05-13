import React, { useState, useEffect } from "react";
import "./ListPage.css";
import { Link } from "react-router-dom";
import WelcomeTxt from "../components/WelcomeTxt";
import AddProject from "../components/AddProject";
import ProjectList from "../components/ProjectList";
import Background from "../components/Background";

function ListPage({ userID, setSelectedProjects }) {
  const [projectList, setprojectList] = useState([]);

  return (
    <main className="ListPage">
      <WelcomeTxt userID={userID} />
      <AddProject userID={userID} />
      <ProjectList
        cat="work"
        userID={userID}
        projectList={projectList}
        setSelectedProjects={setSelectedProjects}
      />

      <ProjectList
        cat="life"
        userID={userID}
        projectList={projectList}
        setSelectedProjects={setSelectedProjects}
      />
      <Background />
    </main>
  );
}

export default ListPage;
