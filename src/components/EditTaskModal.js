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

function EditTaskModal({
  userID,
  isEditTask,
  setIsEditTask,
  projectID,
  targetTask,
  setTargetTask,
  editTaskItem,
  setEditTaskItem,
  XPosition,
  refContainer,
  currentZero,
  setCurrentZero,
}) {
  //--------------------------------------------------useState & variables---------------------------------------// 0
  //--------------------------------------------------useState & variables---------------------------------------//
  const [contentInput, setContentInput] = useState("");
  const [noteInput, setNoteInput] = useState("");
  const [startDateInput, setStartDateInput] = useState();
  const [endDateInput, setEndDateInput] = useState({});

  let col = `${userID.uid}/${projectID}/tasks`;

  useEffect(() => {
    if (editTaskItem) {
      setContentInput(editTaskItem.content);
      setNoteInput(editTaskItem.note);
      setStartDateInput(
        editTaskItem.start
          .toDate()
          .toISOString(undefined, options)
          .split("T")[0]
      );
      setEndDateInput(
        editTaskItem.end.toDate().toISOString(undefined, options).split("T")[0]
      );
    }
  }, [isEditTask]);
  //--------------------------------------------------handle event-----------------------------------------------// 1
  //--------------------------------------------------handle event-----------------------------------------------//
  function closeModal() {
    setIsEditTask(false);
  }
  //--------------------------------------------------CRUD-------------------------------------------------------// 2
  //--------------------------------------------------CRUD-------------------------------------------------------//
  // UPDATE(editBtn)
  async function handleEdit() {
    const queryRef = doc(db, col, targetTask);
    await updateDoc(queryRef, {
      content: contentInput,
      end: Timestamp.fromDate(new Date(endDateInput)),
      note: noteInput,
      start: Timestamp.fromDate(new Date(startDateInput)),
    });
    setIsEditTask(false);
    setContentInput("");
    setNoteInput("");
    setStartDateInput({});
    setEndDateInput({});
  }
  //set default date
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  let defaultStartDate;

  //--------------------------------------------------RENDER-----------------------------------------------------// 3
  //--------------------------------------------------RENDER-----------------------------------------------------//

  return (
    <div
      className="EditTaskModal TextM Modal"
      style={{
        boxSizing: "border-box",
        width: 320,
        height: "100%",
        backgroundColor: "rgb(240, 240, 240, 0.8)",
        boxShadow: "1px 3px 8px #cccccc",
        position: "absolute",
        left: currentZero,
        display: isEditTask === true ? "grid" : "none",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#cccccc",
        gridTemplateColumns: "30% 60%",
        justifyContent: "center",
        alignContent: "start",
      }}
    >
      <div
        style={{
          width: "100%",
          gridColumn: "1/3",
          textAlign: "center",
          color: "blueviolet",
          fontWeight: "bold",
          padding: "4px",
          marginTop: 10,
        }}
      >
        Editing task
      </div>
      <label style={{ height: 20, marginTop: 10 }}>Task</label>
      <input
        onChange={(event) => setContentInput(event.target.value)}
        value={contentInput}
        placeholder="Content"
        className="contentInput"
        style={{ height: 20, marginTop: 10, borderRadius: 5 }}
      ></input>

      <label style={{ height: 20, marginTop: 10 }}>Note</label>
      <input
        onChange={(event) => setNoteInput(event.target.value)}
        value={noteInput}
        placeholder="Add notes"
        className="startInput"
        style={{ height: 20, marginTop: 10, borderRadius: 5 }}
      ></input>

      <label style={{ height: 20, marginTop: 10 }}>Start from</label>
      <input
        onChange={(event) => setStartDateInput(event.target.value)}
        value={startDateInput}
        style={{ height: 20, marginTop: 10, borderRadius: 5 }}
        // value={Date.now().strftime("%Y-%m-%d")}
        type="date"
        className="startInput"
        selected={
          startDateInput
            ? editTaskItem.start
                .toDate()
                .toISOString(undefined, options)
                .split("T")[0]
            : ""
        }
      ></input>

      <label style={{ height: 20, marginTop: 10 }}>End on</label>
      <input
        onChange={(event) => setEndDateInput(event.target.value)}
        value={endDateInput}
        // value={Date.now().strftime("%Y-%m-%d")}
        type="date"
        className="startInput"
        style={{ height: 20, marginTop: 10, borderRadius: 5 }}
      ></input>
      <svg
        className="DeleteBtn"
        onClick={closeModal}
        style={{
          height: 30,
          position: "absolute",
          bottom: 35,
          right: -40,
        }}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          clipRule="evenodd"
          d="m9.02975 3.3437c1.95365-.45827 3.98685-.45827 5.94055 0 2.8213.66179 5.0242 2.86472 5.686 5.68605.4583 1.95365.4583 3.98685 0 5.94055-.6618 2.8213-2.8647 5.0242-5.686 5.686-1.9537.4583-3.9869.4583-5.94055 0-2.82133-.6618-5.02425-2.8647-5.68605-5.686-.45827-1.9537-.45827-3.9869 0-5.94056.6618-2.82133 2.86472-5.02425 5.68605-5.68604zm1.68415 6.55788c-.2243-.22431-.588-.22431-.81232 0-.22431.22432-.22431.58802 0 .81232l1.28612 1.2861-1.28612 1.2861c-.22431.2243-.22431.588 0 .8123.22432.2243.58802.2243.81232 0l1.2861-1.2861 1.2861 1.2861c.2243.2243.588.2243.8123 0s.2243-.588 0-.8123l-1.2861-1.2861 1.2861-1.2861c.2243-.2243.2243-.588 0-.81232-.2243-.22431-.588-.22431-.8123 0l-1.2861 1.28612z"
          fill="rgb(152,152,152)"
          fillRule="evenodd"
        />
      </svg>
      <svg
        className="ComfirmBtn"
        onClick={handleEdit}
        style={{
          height: 30,
          position: "absolute",
          bottom: 5,
          right: -40,
        }}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          clipRule="evenodd"
          d="m9.02975 3.3437c1.95365-.45827 3.98685-.45827 5.94055 0 2.8213.66179 5.0242 2.86472 5.686 5.68605.4583 1.95365.4583 3.98685 0 5.94055-.6618 2.8213-2.8647 5.0242-5.686 5.686-1.9537.4583-3.9869.4583-5.94055 0-2.82133-.6618-5.02425-2.8647-5.68605-5.686-.45827-1.9537-.45827-3.9869 0-5.94056.6618-2.82133 2.86472-5.02425 5.68605-5.68604zm6.02265 7.1336c.2165-.2319.2039-.59535-.028-.8118-.2319-.21644-.5953-.20391-.8118.028l-2.9448 3.1552-1.49422-1.4942c-.22431-.2243-.58798-.2243-.81228 0-.22431.2243-.22431.588 0 .8123l1.9146 1.9146c.1101.1101.2603.1708.416.1681.1558-.0027.3037-.0685.41-.1824z"
          fill="rgb(152,152,152)"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default EditTaskModal;
