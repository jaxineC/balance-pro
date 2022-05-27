import React, { useState, useEffect } from "react";
import {
  collection,
  doc,
  setDoc,
  getDoc, //get data once
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  limit,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase.js";
import EditTaskModal from "./EditTaskModal.js";
import AddTaskModal from "./AddTaskModal.js";
import DeleteBtn from "./DeleteBtn.js";
import StretchBtn from "./StretchBtn.js";

// render Tasks (fetch from firestore)
// update Tasks (stretch/drag/delete)
function TaskList({
  cat,
  clickPosition,
  clickDate,
  isAddTask,
  projectID,
  setClickPosition,
  XPosition,
  ZDay,
  setIsAddTask,
}) {
  //--------------------------------------------------useState & variables---------------------------------------// 0
  //--------------------------------------------------useState & variables---------------------------------------//
  const [isEditTask, setIsEditTask] = useState(false);
  const [Tasks, setTasks] = useState([]);
  const [targetTask, setTargetTask] = useState("");
  const [initMouseClientX, setInitMouseClientX] = useState(0);

  //--------------------------------------------------handle event-----------------------------------------------// 1
  //--------------------------------------------------handle event-----------------------------------------------//
  // react
  function handleDrag(event) {
    // event.stopImmediatePropagation();
    // console.log(event.clientX);
    // console.log(event.target.getAttribute("value"));
    // console.log(event.target.style.left);
    setInitMouseClientX(event.clientX);
  }

  // firestore
  function handleDrop(event) {
    // console.log(event.clientX);
    // console.log(event.target.getAttribute("value"));
    // console.log(event.clientX - initMouseClientX);
    event.target.style.left =
      event.target.style.left + event.clientX - initMouseClientX;
    // setMouseClientX(event.clientX);
    // event.stopImmediatePropagation();
    // console.log(event.clientX);
  }

  function handleChildClick(e) {
    e.stopPropagation();
  }

  function handleHover(event) {
    //taskNote
    if (event.target.children[0].style.display === "none") {
      event.target.children[0].style.display = "inline";
    } else {
      event.target.children[0].style.display = "none";
    }
    //editBtn
    if (event.target.children[1].style.display === "none") {
      event.target.children[1].style.display = "inline";
    } else {
      event.target.children[1].style.display = "none";
    }
    //stretchBtn
    if (event.target.children[2].style.display === "none") {
      event.target.children[2].style.display = "inline";
    } else {
      event.target.children[2].style.display = "none";
      // event.target.children[2].children[0].fill = "rgb(152,152,152)";
    }
    //stretchBtn
    if (event.target.children[3].style.display === "none") {
      event.target.children[3].style.display = "inline";
    } else {
      event.target.children[3].style.display = "none";
    }
    //deleteBtn
    if (event.target.children[4].style.display === "none") {
      event.target.children[4].style.display = "inline";
    } else {
      event.target.children[4].style.display = "none";
    }
  }

  function renderEditTaskModal(event) {
    let docID = event.target.getAttribute("value");
    setTargetTask(docID);
    setIsEditTask(true);
  }

  //--------------------------------------------------CRUD-------------------------------------------------------// 2
  //--------------------------------------------------CRUD-------------------------------------------------------//
  // init fetch from firestore
  async function fetchTasks(cat, projectID) {
    if (cat === "work") {
      const dataRef = collection(db, "jx-tasks");
      const q1 = query(dataRef, where("projectID", "==", projectID));
      const q2 = query(q1, orderBy("start"));
      const querySnapshot = await getDocs(q2);
      let initTasks = [];
      querySnapshot.forEach((doc) => {
        initTasks = [...initTasks, doc.data()];
      });
      setTasks(initTasks);
    } else {
      const dataRef = collection(db, "jx-tasks");
      const q1 = query(dataRef, where("projectID", "==", projectID));
      const q2 = query(q1, orderBy("start"));
      const querySnapshot = await getDocs(q2);
      let initTasks = [];
      querySnapshot.forEach((doc) => {
        initTasks = [...initTasks, doc.data()];
      });
      setTasks(initTasks);
    }
  }
  // listen: todos collection
  function docListener(cat, projectID) {
    if (cat === "work") {
      const dataRef = collection(db, "jx-tasks");
      const q1 = query(dataRef, where("projectID", "==", projectID));
      const q2 = query(q1, orderBy("start"));
      const unsubscribe = onSnapshot(q2, (changedSnapshot) => {
        let updatedTasks = [];
        changedSnapshot.forEach((doc) => {
          updatedTasks = [...updatedTasks, doc.data()];
        });
        setTasks(updatedTasks);
      });
    } else {
      const dataRef = collection(db, "jx-tasks");
      const q1 = query(dataRef, where("projectID", "==", projectID));
      const q2 = query(q1, orderBy("start"));
      const unsubscribe = onSnapshot(q2, (changedSnapshot) => {
        let updatedTasks = [];
        changedSnapshot.forEach((doc) => {
          updatedTasks = [...updatedTasks, doc.data()];
        });
        setTasks(updatedTasks);
      });
    }
  }

  useEffect(() => {
    fetchTasks(cat, projectID);
    docListener(cat, projectID);
  }, []);

  //--------------------------------------------------RENDER-----------------------------------------------------// 3
  //--------------------------------------------------RENDER-----------------------------------------------------//
  const taskItems = Tasks.map((item) => (
    <li
      onMouseDown={handleDrag}
      onMouseUp={handleDrop}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className="Task TextS"
      key={item.taskID}
      value={item.taskID}
      style={{
        width: ((item.end - item.start) / (60 * 60 * 24)) * 20,
        top: Tasks.indexOf(item) * 22,
        left:
          1220 + Math.floor((item.start.toDate() - Date.now()) / 86400000) * 20,
      }}
    >
      {item.content}
      <span
        className="taskNote TextXS"
        style={{
          color: "#666",
          position: "absolute",
          top: 18,
          left: 0,
          display: "none",
        }}
      >
        {item.note}
      </span>
      <svg
        onClick={renderEditTaskModal}
        className="editBtn"
        style={{
          display: "none",
          height: 22,
          position: "absolute",
          left: ((item.end - item.start) / (60 * 60 * 24)) * 20 - 20,
          top: -2,
          padding: 0,
          margin: 0,
        }}
        fill="none"
        height="22"
        viewBox="0 0 24 24"
        width="18"
        // xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="m14.9703 3.3437c-1.9537-.45827-3.9869-.45827-5.94055 0-2.82134.66179-5.02425 2.86471-5.68605 5.68604-.45827 1.95366-.45827 3.98686 0 5.94056.6618 2.8213 2.86472 5.0242 5.68605 5.686 1.95365.4583 3.98685.4583 5.94055 0 2.8213-.6618 5.0242-2.8647 5.686-5.686.4583-1.9537.4583-3.9869 0-5.94055-.6618-2.82133-2.8647-5.02426-5.686-5.68605zm-2.3484 4.90161c.4154-.41543.9789-.64882 1.5664-.64882 1.2234 0 2.2152.99179 2.2152 2.21522 0 .58749-.2334 1.15099-.6488 1.56639l-2.4997 2.4997c-1.1603 1.1603-2.6142 1.9835-4.20611 2.3815l-.48314.1207c-.57119.1428-1.08859-.3745-.94579-.9457l.12078-.4832c.39799-1.5919 1.22115-3.0458 2.38146-4.2061zm1.5664.49992c-.2829 0-.5541.11236-.7541.31237l-.3625.36252c-.0358.28507.1066.68298.4659 1.04228s.7572.5017 1.0423.466l.3625-.3626c.2-.2.3124-.4712.3124-.75409 0-.589-.4775-1.06648-1.0665-1.06648zm-.5712 3.14587c-.3414-.1502-.6486-.3732-.8918-.6164s-.4662-.5503-.6164-.8918l-1.1744 1.1744c-.98523.9852-1.69205 2.2128-2.04979 3.558 1.34519-.3577 2.57279-1.0646 3.55799-2.0498z"
          fill="rgb(138,43,226)"
          fillRule="evenodd"
        />
      </svg>
      <StretchBtn date="start" item="item" />
      <StretchBtn date="end" item="item" />
      <DeleteBtn item="item" />
    </li>
  ));

  return (
    <ul onClick={handleChildClick} className="TaskList TextS">
      {taskItems}
      <AddTaskModal
        cat={cat}
        clickPosition={clickPosition}
        isAddTask={isAddTask}
        projectID={projectID}
        setClickPosition={setClickPosition}
        Tasks={Tasks}
        XPosition={XPosition}
        setIsAddTask={setIsAddTask}
        clickDate={clickDate}
        targetTask={targetTask}
        setTargetTask={setTargetTask}
      />
      <EditTaskModal
        isEditTask={isEditTask}
        setIsEditTask={setIsEditTask}
        targetTask={targetTask}
        setTargetTask={setTargetTask}
      />
    </ul>
  );
}

export default TaskList;
