import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderSec from "./components/HeaderSec";
import FooterSec from "./components/FooterSec";
import IndexPage from "./pages/IndexPage";
import ListPage from "./pages/ListPage.js";
import ProjectPage from "./pages/ProjectPage.js";
import SignUpModal from "./components/SignUpModal";

function App() {
  // const UserContext = React.createContext(userID);
  const [userID, setUserID] = useState(null);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <BrowserRouter>
      <HeaderSec
        userID={userID}
        setUserID={setUserID}
        isSignUp={isSignUp}
        setIsSignUp={setIsSignUp}
      />
      <SignUpModal
        isSignUp={isSignUp}
        setIsSignUp={setIsSignUp}
        userID={userID}
        setUserID={setUserID}
      />
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
