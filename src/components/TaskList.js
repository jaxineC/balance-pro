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
  collectionGroup,
} from "firebase/firestore";
import { db } from "../firebase.js";

import AddTaskModal from "./AddTaskModal.js";
import Task from "./Task.js";

// render Tasks (fetch from firestore)
function TaskList({
  userID,
  cat,
  clickPosition,
  clickDate,
  isAddTask,
  projectID,
  setClickPosition,
  XPosition,
  ZDay,
  setIsAddTask,
  isEditTask,
  setIsEditTask,
  targetTask,
  setTargetTask,
  editTaskItem,
  setEditTaskItem,
}) {
  //--------------------------------------------------useState & variables---------------------------------------// 0
  //--------------------------------------------------useState & variables---------------------------------------//

  const [Tasks, setTasks] = useState([]);

  // let col = userID.uid + "-t";
  let col = `${userID.uid}/${projectID}/tasks`;

  //--------------------------------------------------handle event-----------------------------------------------// 1
  //--------------------------------------------------handle event-----------------------------------------------//

  function handleChildClick(e) {
    e.stopPropagation();
  }

  //--------------------------------------------------CRUD-------------------------------------------------------// 2
  //--------------------------------------------------CRUD-------------------------------------------------------//
  // init fetch from firestore
  async function fetchTasks(cat, projectID) {
    if (cat === "overlay") {
      let colGroup = "tasks";
      let initTasks = [];
      let x = projectID[0];
      let y = projectID[1];
      const dataRef = query(
        collectionGroup(db, colGroup),
        where("projectID", "in", [x, y]),
        orderBy("start")
      );
      const querySnapshot = await getDocs(dataRef);
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data());
        initTasks = [...initTasks, doc.data()];
      });
      setTasks(initTasks);
    } else {
      const dataRef = collection(db, col);
      const q = query(dataRef, orderBy("start"));
      const querySnapshot = await getDocs(q);
      let initTasks = [];
      querySnapshot.forEach((doc) => {
        initTasks = [...initTasks, doc.data()];
      });
      setTasks(initTasks);
    }
  }

  // listen: todos collection
  function docListener(cat, projectID) {
    if (cat === "overlay") {
      let colGroup = "tasks";
      let initTasks = [];
      let x = projectID[0];
      let y = projectID[1];
      const dataRef = query(
        collectionGroup(db, colGroup),
        where("projectID", "in", [x, y]),
        orderBy("start")
      );
      const unsubscribe = onSnapshot(dataRef, (changedSnapshot) => {
        let updatedTasks = [];
        changedSnapshot.forEach((doc) => {
          updatedTasks = [...updatedTasks, doc.data()];
        });
        setTasks(updatedTasks);
      });
    } else {
      const dataRef = collection(db, col);
      const q = query(dataRef, orderBy("start"));
      const unsubscribe = onSnapshot(q, (changedSnapshot) => {
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
      cat={cat}
      projectID={projectID}
      userID={userID}
      key={item.taskID}
      item={item}
      Tasks={Tasks}
      setTargetTask={setTargetTask}
      setIsEditTask={setIsEditTask}
      editTaskItem={editTaskItem}
      setEditTaskItem={setEditTaskItem}
    />
  ));

  return (
    <ul onClick={handleChildClick} className="TaskList TextS">
      {taskItems}
      <AddTaskModal
        userID={userID}
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
    </ul>
  );
}

export default TaskList;
