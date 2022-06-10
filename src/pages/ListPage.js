import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ListPage.css";
import WelcomeTxt from "../components/WelcomeTxt";
import AddProject from "../components/AddProject";
import ProjectList from "../components/ProjectList";
import Background from "../components/Background";

function ListPage({ userID, selectedProjects, setSelectedProjects }) {
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  return (
    <main className="ListPage">
      <WelcomeTxt userID={userID} />
      <AddProject userID={userID} />
      <ProjectList
        cat="work"
        userID={userID}
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
      <div
        className="goTxt TextS"
        style={{
          display: errorMessage ? "block" : "none",
        }}
      >
        Select one project in each category to start.
      </div>
      <Link className="Link" to="/project">
        <button
          onClick={(event) => {
            if (selectedProjects[0] && selectedProjects[1]) {
              console.log("ok");
            } else {
              event.preventDefault();
              setErrorMessage(true);
              setTimeout(() => {
                setErrorMessage(false);
              }, 2000);
            }
          }}
          style={{
            display: "block",
            backgroundColor: "blueviolet",
          }}
          className="go TextXL bold"
        >
          Go!
        </button>
      </Link>
    </main>
  );
}

export default ListPage;
