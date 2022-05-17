import React, { useState, useEffect } from "react";
import "./ProjectPage.css";
import { Link } from "react-router-dom";
import DisplayMode from "../components/DisplayMode";
import Unfold from "../components/Unfold";
import QuickAccess from "../components/QuickAccess";
import ProjectInfo from "../components/ProjectInfo";
import Timeline from "../components/Timeline";
import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  query,
  orderBy,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase.js";

// fetch Tasks (where balanced = true) from firebase ---->for both projects
// use props= work/ life for rendering
function ProjectPage({ userID, projects, setProjects }) {
  const [XPosition, setXPosition] = useState(1220); //let top and bottom timelines scroll synchronizely
  const [Tasks, setTasks] = useState([]); //fetch all documents of tasks

  // init fetch from firestore
  async function fetchTasks() {
    const dataRef = collection(db, "jx-tasks");
    const q = query(dataRef, orderBy("start"));
    const querySnapshot = await getDocs(q);
    // const querySnapshot = await getDocs(collection(db, "jx-tasks"));
    let initTasks = [];
    querySnapshot.forEach((doc) => {
      initTasks = [...initTasks, doc.data()];
    });
    setTasks(initTasks);
  }

  // listen: todos collection
  function docListener() {
    const unsubscribe = onSnapshot(
      collection(db, "taskID"),
      (changedSnapshot) => {
        let updatedTasks = [];
        changedSnapshot.forEach((doc) => {
          updatedTasks = [...updatedTasks, doc.data()];
        });
        setTasks(updatedTasks);
      }
    );
  }

  useEffect(() => {
    fetchTasks();
    // docListener();
  }, []);

  return (
    <main className="ProjectPage">
      <ProjectInfo
        cat="work"
        projectID={Tasks.projectID}
        Tasks={Tasks}
        setTasks={setTasks}
      />
      <Timeline
        cat="work"
        projectID={Tasks.projectID}
        XPosition={XPosition}
        setXPosition={setXPosition}
        Tasks={Tasks}
        setTasks={setTasks}
      />
      <Unfold />
      <ProjectInfo
        cat="life"
        projectID={Tasks.projectID}
        Tasks={Tasks}
        setTasks={setTasks}
      />
      <Timeline
        cat="life"
        projectID={Tasks.projectID}
        XPosition={XPosition}
        setXPosition={setXPosition}
        Tasks={Tasks}
        setTasks={setTasks}
      />
      <DisplayMode />
      <QuickAccess />
    </main>
  );
}

export default ProjectPage;
