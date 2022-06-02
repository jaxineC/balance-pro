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
  targetTask,
  projectID,
}) {
  //--------------------------------------------------useState & variables---------------------------------------// 0
  //--------------------------------------------------useState & variables---------------------------------------//
  const [contentInput, setContentInput] = useState("");
  const [noteInput, setNoteInput] = useState("");
  const [startDateInput, setStartDateInput] = useState(Date.now());
  const [endDateInput, setEndDateInput] = useState(
    Date.now() + 60 * 60 * 24 * 1000
  );
  let col = `${userID.uid}/${projectID}/tasks`;

  //--------------------------------------------------handle event-----------------------------------------------// 1
  //--------------------------------------------------handle event-----------------------------------------------//
  function closeModal() {
    setIsEditTask(false);
  }
  //--------------------------------------------------CRUD-------------------------------------------------------// 2
  //--------------------------------------------------CRUD-------------------------------------------------------//
  // UPDATE(editBtn)
  async function handleEdit(event) {
    const queryRef = doc(db, col, targetTask);
    await updateDoc(queryRef, {
      content: contentInput,
      end: new Date(endDateInput),
      note: noteInput,
      start: new Date(startDateInput),
    });
    console.log("confirmed");
    setIsEditTask(false);
    setContentInput();
    setNoteInput();
    setStartDateInput();
    setEndDateInput();
  }

  //--------------------------------------------------RENDER-----------------------------------------------------// 3
  //--------------------------------------------------RENDER-----------------------------------------------------//

  return (
    <div
      className="EditTaskModal TextM Modal"
      style={{
        width: 300,
        backgroundColor: "rgb(240, 240, 240, 0.8)",
        boxShadow: "1px 3px 8px #cccccc",
        position: "fixed",
        top: 160,
        display: isEditTask === true ? "grid" : "none",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 5,
        padding: 15,
        paddingTop: 40,
        gridTemplateColumns: "35% 65%",
      }}
    >
      <label>Task</label>
      <input
        onChange={(event) => setContentInput(event.target.value)}
        value={contentInput}
        placeholder="Content"
        className="contentInput"
      ></input>

      <label>Note</label>
      <input
        onChange={(event) => setNoteInput(event.target.value)}
        value={noteInput}
        placeholder="Add notes"
        className="startInput"
      ></input>

      <label>Start from</label>
      <input
        onChange={(event) => setStartDateInput(event.target.value)}
        value={startDateInput}
        // value={Date.now().strftime("%Y-%m-%d")}
        type="date"
        className="startInput"
      ></input>

      <label>End on</label>
      <input
        onChange={(event) => setEndDateInput(event.target.value)}
        value={endDateInput}
        // value={Date.now().strftime("%Y-%m-%d")}
        type="date"
        className="startInput"
      ></input>
      <button
        style={{
          height: 25,
          width: 80,
          border: "1px solid #cccccc",
          borderRadius: 5,
          backgroundColor: "blueviolet",
          color: "white",
        }}
        onClick={handleEdit}
        type="button"
      >
        Confirm
      </button>
      <svg
        onClick={closeModal}
        className="closeBtn"
        style={{
          height: 20,
          position: "absolute",
          top: 10,
          right: 10,
        }}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 298.667 298.667"
        fill="rgb(152,152,152)"
      >
        <polygon points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667     149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333   " />
      </svg>
    </div>
  );
}

export default EditTaskModal;
