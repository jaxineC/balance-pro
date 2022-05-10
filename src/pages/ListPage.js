import React, { useState, useEffect } from "react";
import "./ListPage.css";
import { Link } from "react-router-dom";
import WelcomeTxt from "../components/WelcomeTxt";
import AddProject from "../components/AddProject";
import ProjectList from "../components/ProjectList";
import Background from "../components/Background";

function ListPage() {
  return (
    <main className="ListPage">
      <WelcomeTxt />
      <AddProject />
      <ProjectList cat="work" />
      <ProjectList cat="life" />
      <Background />
    </main>
  );
}

export default ListPage;
