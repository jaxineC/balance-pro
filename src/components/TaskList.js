import React, { useState, useEffect } from "react";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  query,
  where,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase.js";

// render Tasks (fetch from firestore)
// update Tasks (stretch/drag/delete)
function TaskList({
  ZDay,
  XPosition,
  Tasks,
  clickPosition,
  setClickPosition,
  clickDate,
}) {
  //--------------------------------------------------useState & variables---------------------------------------//
  //--------------------------------------------------useState & variables---------------------------------------//
  const [inputText, setInputText] = useState("");
  let tempNewTask = "";

  //--------------------------------------------------handle event-----------------------------------------------//
  //--------------------------------------------------handle event-----------------------------------------------//
  function handleChildClick(e) {
    e.stopPropagation();
  }
  let handleHover = (event) => {
    // console.log(event.target.children[0]);
    if (event.target.children[0].style.display === "none") {
      event.target.children[0].style.display = "inline";
    } else {
      event.target.children[0].style.display = "none";
    }
    if (event.target.children[1].style.display === "none") {
      event.target.children[1].style.display = "inline";
    } else {
      event.target.children[1].style.display = "none";
    }
    if (event.target.children[2].style.display === "none") {
      event.target.children[2].style.display = "inline";
      // event.target.children[2].children[0].fill = "rgb(138,43,226)";
    } else {
      event.target.children[2].style.display = "none";
      event.target.children[2].children[0].fill = "rgb(152,152,152)";
    }
  };

  //--------------------------------------------------CRUD------------------------------------------------------//
  //--------------------------------------------------CRUD------------------------------------------------------//
  //CREATE(addBtn)
  async function handleAddTasktoDb() {
    try {
      // let newTaskID = Date.now().toString();
      const docRef = await addDoc(collection(db, "jx-tasks"), {
        balanced: true,
        cat: "work",
        content: inputText,
        end: Timestamp.fromDate(new Date(clickDate + 1000 * 60 * 60 * 24 * 7)),
        note: "",
        projectID: "3uNnaOyYZQnAdO0oB5jQ",
        start: Timestamp.fromDate(new Date(clickDate)),
        taskID: Date.now().toString(),
      });
      setClickPosition(null);
      setInputText("");

      console.log("Document written with ID: ", docRef.id);
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  }

  // UPDATE(editBtn)

  // DELETE(deleteBtn)
  async function handleDeleteTask(event) {
    // console.log(Tasks[2].taskID);
    // console.log(event.target.parentNode.parentNode.value);
    // console.log(event.target.value === "t-1652972288422");
    const q = query(
      collection(db, "jx-tasks"),
      where("taskID", "===", event.target.parentElement.parentElement.value)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (docItem) => {
      await deleteDoc(doc(db, "jx-tasks", docItem.id));
    });
  }

  //--------------------------------------------------if else statement -----------------------------------------//
  //--------------------------------------------------if else statement -----------------------------------------//

  if (clickPosition) {
    tempNewTask = (
      <div
        style={{
          top: Tasks.length * 22,
          left: clickPosition + XPosition + 150,
          borderStyle: "none",
          borderRadius: 5,
          backgroundColor: "buleviolet",
          objectFit: "scaleDown",
        }}
      >
        <input
          className="Task TextS"
          autoFocus
          type="text"
          placeholder="New task"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          style={{
            width: 140,
            top: Tasks.length * 22,
            left: clickPosition + XPosition,
            padding: 0,
            border: 1,
            borderStyle: "solid",
            borderColor: "blueviolet",
          }}
        ></input>
        <svg
          className="addBtn"
          onClick={handleAddTasktoDb}
          style={{
            height: 22,
            position: "absolute",
            left: clickPosition + XPosition + 145,
            top: Tasks.length * 22 + 2,
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
            d="m9.02975 3.3437c1.95365-.45827 3.98685-.45827 5.94055 0 2.8213.66179 5.0242 2.86472 5.686 5.68605.4583 1.95365.4583 3.98685 0 5.94055-.6618 2.8213-2.8647 5.0242-5.686 5.686-1.9537.4583-3.9869.4583-5.94055 0-2.82133-.6618-5.02425-2.8647-5.68605-5.686-.45827-1.9537-.45827-3.9869 0-5.94056.6618-2.82133 2.86472-5.02425 5.68605-5.68604zm6.02265 7.1336c.2165-.2319.2039-.59535-.028-.8118-.2319-.21644-.5953-.20391-.8118.028l-2.9448 3.1552-1.49422-1.4942c-.22431-.2243-.58798-.2243-.81228 0-.22431.2243-.22431.588 0 .8123l1.9146 1.9146c.1101.1101.2603.1708.416.1681.1558-.0027.3037-.0685.41-.1824z"
            fill="rgb(152, 152, 152)"
            fillRule="evenodd"
          />
        </svg>
      </div>
    );
  }

  //--------------------------------------------------RENDER------------------------------------------------------//
  //--------------------------------------------------RENDER------------------------------------------------------//

  const taskItems = Tasks.map((item) => (
    <li
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleDeleteTask}
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
        className="TextS"
        style={{
          position: "absolute",
          top: 18,
          left: 0,
          display: "none",
          // display: "none",
        }}
      >
        {item.note}
      </span>
      <svg
        className="editBtn"
        onClick={handleDeleteTask}
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
      <svg
        className="deleteBtn"
        onClick={handleDeleteTask}
        style={{
          display: "none",
          height: 22,
          position: "absolute",
          left: ((item.end - item.start) / (60 * 60 * 24)) * 20 + 2,
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
          d="m9.02975 3.3437c1.95365-.45827 3.98685-.45827 5.94055 0 2.8213.66179 5.0242 2.86472 5.686 5.68605.4583 1.95365.4583 3.98685 0 5.94055-.6618 2.8213-2.8647 5.0242-5.686 5.686-1.9537.4583-3.9869.4583-5.94055 0-2.82133-.6618-5.02425-2.8647-5.68605-5.686-.45827-1.9537-.45827-3.9869 0-5.94056.6618-2.82133 2.86472-5.02425 5.68605-5.68604zm1.68415 6.55788c-.2243-.22431-.588-.22431-.81232 0-.22431.22432-.22431.58802 0 .81232l1.28612 1.2861-1.28612 1.2861c-.22431.2243-.22431.588 0 .8123.22432.2243.58802.2243.81232 0l1.2861-1.2861 1.2861 1.2861c.2243.2243.588.2243.8123 0s.2243-.588 0-.8123l-1.2861-1.2861 1.2861-1.2861c.2243-.2243.2243-.588 0-.81232-.2243-.22431-.588-.22431-.8123 0l-1.2861 1.28612z"
          fill="rgb(152,152,152)"
          fillRule="evenodd"
        />
      </svg>
    </li>
  ));

  let taskStyle = {
    width: 140,
    top: 20,
    left: 1220,
  };
  return (
    <ul onClick={handleChildClick} className="TaskList TextS">
      {taskItems}
      {tempNewTask}
    </ul>
  );
}

export default TaskList;
