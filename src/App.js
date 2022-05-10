import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderSec from "./components/HeaderSec";
import FooterSec from "./components/FooterSec";
import IndexPage from "./pages/IndexPage";
import ListPage from "./pages/ListPage.js";
import ProjectPage from "./pages/ProjectPage.js";

function App() {
  return (
    <BrowserRouter>
      <HeaderSec />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
      <FooterSec />
    </BrowserRouter>
  );
}

export default App;
