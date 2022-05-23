import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ListPage.css";
import WelcomeTxt from "../components/WelcomeTxt";
import AddProject from "../components/AddProject";
import ProjectList from "../components/ProjectList";
import Background from "../components/Background";

function ListPage({ userID, selectedProjects, setSelectedProjects }) {
  const [checked, setChecked] = useState(0);
  function click() {
    alert("Test");
  }
  return (
    <main className="ListPage">
      <WelcomeTxt userID={userID} />
      <AddProject userID={userID} />
      <ProjectList
        cat="work"
        userID={userID}
        click={click}
        checked={checked}
        setChecked={setChecked}
        selectedProjects={selectedProjects}
        setSelectedProjects={setSelectedProjects}
      />
      <ProjectList
        cat="life"
        userID={userID}
        checked={checked}
        setChecked={setChecked}
        selectedProjects={selectedProjects}
        setSelectedProjects={setSelectedProjects}
      />
      <Background />
      <Link className="Link" to="/project">
        <button
          style={{ display: checked === 2 ? "block" : "none" }}
          className="go TextXL bold"
        >
          Go!
        </button>
      </Link>
    </main>
  );
}

export default ListPage;
