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
import Task from "./Task.js";

// render Tasks (fetch from firestore)
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

  //--------------------------------------------------handle event-----------------------------------------------// 1
  //--------------------------------------------------handle event-----------------------------------------------//

  function handleChildClick(e) {
    e.stopPropagation();
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
    <Task
      key={item.taskID}
      item={item}
      Tasks={Tasks}
      setTargetTask={setTargetTask}
      setIsEditTask={setIsEditTask}
    />
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
