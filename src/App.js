import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderSec from "./components/HeaderSec";
import FooterSec from "./components/FooterSec";
import IndexPage from "./pages/IndexPage";
import ListPage from "./pages/ListPage.js";
import ProjectPage from "./pages/ProjectPage.js";
import SignUpModal from "./components/SignUpModal";

function App() {
  const [userID, setUserID] = useState(null);
  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <BrowserRouter>
      <HeaderSec
        userID={userID}
        isSignUp={isSignUp}
        setIsSignUp={setIsSignUp}
      />
      <SignUpModal isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
      <Routes>
        <Route
          path="/"
          element={<IndexPage userID={userID} setUserID={setUserID} />}
        />
        <Route
          path="/list"
          element={
            <ListPage
              userID={userID}
              projects={projects}
              setProjects={setProjects}
              selectedProjects={selectedProjects}
              setSelectedProjects={setSelectedProjects}
            />
          }
        />
        <Route
          path="/project"
          element={
            <ProjectPage
              userID={userID}
              projects={projects}
              setProjects={setProjects}
              selectedProjects={selectedProjects}
              setSelectedProjects={setSelectedProjects}
            />
          }
        />
      </Routes>

      <FooterSec />
    </BrowserRouter>
  );
}

export default App;
