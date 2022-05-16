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
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase.js";

function ProjectPage({ userID, projects, setProjects }) {
  // useState: sync scroll, initTasks
  const [XPosition, setXPosition] = useState(1220); //let top and bottom timelines scroll synchronizely
  const [Tasks, setTasks] = useState([]); //fetch all documents of tasks from colloection of "user" where start/end date 25wks +- today
  // Task item: {
  //  id: Date.now(),------------>nessesary? for key?
  //  content: string,
  //  projectID: string, -------> projecyID
  //  cat: string, ------->work/life
  //  balanced: boolean,
  //  start: timestamp,
  //  end: timestamp,
  //  description: sting,
  //  duration------------------>not in firebase but calculated from Task.i.end-start for stretching
  // }

  // init: fetch from firestore
  async function fetchTasks() {
    const querySnapshot = await getDocs(collection(db, "jx-tasks"));
    let initTasks = [];
    querySnapshot.forEach((doc) => {
      initTasks = [...initTasks, doc.data()];
    });
    setTasks(initTasks);
  }
  // action: delete
  async function handleDeleteTask(event) {
    const q = query(
      collection(db, "jx-tasks"),
      where("taskID", "==", event.target.value)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (docItem) => {
      await deleteDoc(doc(db, "jx-tasks", docItem.taskID));
    });
    fetchTasks();
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
