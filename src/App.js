import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderSec from "./components/HeaderSec";
import FooterSec from "./components/FooterSec";
import IndexPage from "./pages/IndexPage";
import ListPage from "./pages/ListPage.js";
import ProjectPage from "./pages/ProjectPage.js";

function App() {
  const [userID, setUserID] = useState(null);
  const [projects, setProjects] = useState([]);

  return (
    <BrowserRouter>
      <HeaderSec />
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
            />
          }
        />
      </Routes>
      <FooterSec />
    </BrowserRouter>
  );
}

export default App;
