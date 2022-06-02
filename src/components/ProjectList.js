import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hashtag from "../components/Hashtag";
import {
  collection,
  doc,
  setDoc,
  getDoc, //get data once
  getDocs,
  deleteDoc,
  query,
  orderBy,
  where,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase.js";
import { findByLabelText } from "@testing-library/react";
import Switch from "./Switch.js";

function ProjectList({
  cat,
  userID,
  click,
  checked,
  setChecked,
  selectedProjects,
  setSelectedProjects,
}) {
  const [projects, setProjects] = useState([]);
  let col = userID.uid;

  async function fetchData() {
    const dataRef = query(collection(db, col));
    const q = query(dataRef, where("cat", "==", cat));
    const querySnapshot = await getDocs(q);
    let projectList = [];
    querySnapshot.forEach((doc) => {
      projectList = [...projectList, doc.data()];
    });
    setProjects(projectList);
  }

  function docListener() {
    const dataRef = collection(db, col);
    const q = query(dataRef, where("cat", "==", cat));
    const unsubscribe = onSnapshot(q, (changedSnapshot) => {
      let updatedProjects = [];
      changedSnapshot.forEach((doc) => {
        updatedProjects = [...updatedProjects, doc.data()];
      });
      setProjects(updatedProjects);
    });
  }

  useEffect(() => {
    fetchData();
    docListener();
  }, []);
  //--------------------------------------------------RENDER------------------------------------------------------//
  //--------------------------------------------------RENDER------------------------------------------------------//
  let ulStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexEnd",
  };

  let projectItems = projects.map((item) => (
    <li
      style={{ display: "flex", marginBottom: 10 }}
      key={item.projectID}
      value={item.projectID}
    >
      {item.name}
      <Switch
        selectedProjects={selectedProjects}
        setSelectedProjects={setSelectedProjects}
        checked={checked}
        setChecked={setChecked}
      />
    </li>
  ));

  return (
    <ul style={ulStyle} className={cat}>
      {projectItems}
    </ul>
  );
}

export default ProjectList;
