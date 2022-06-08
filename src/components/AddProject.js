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
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase.js";

function AddProject({ userID }) {
  const [isAddProject, setIsAddProject] = useState(false);
  const [category, setCategory] = useState("work");
  const [nameInput, setNameInput] = useState("");
  const [startDateInput, setStartDateInput] = useState(Date.now().toString());

  function RenderNewProjectModal() {
    setIsAddProject(true);
  }

  async function handleAddProject() {
    let col = userID.uid;
    let docID = "P-" + Date.now().toString();
    let data = {
      balanced: false,
      cat: category,
      end: Timestamp.fromDate(new Date(Date.now() + 86400000 * 7)),
      hashtag: ["hashtag"],
      name: nameInput,
      projectID: docID,
      // start: Timestamp.fromDate(new Date(Date.now())),
      start: Timestamp.fromDate(new Date(startDateInput)),
    };
    try {
      // const docRef = await addDoc(collection(db, col), data);
      await setDoc(doc(db, col, docID), data);
      console.log("Document written with ID: ", docID); //docRef.id if use addDoc with unknown doc id
      setNameInput("");
      setCategory("");
      setStartDateInput("");
      setIsAddProject(false);
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  }
  return (
    <div className="AddProject">
      <button
        onClick={RenderNewProjectModal}
        type="button"
        className="TextL"
        style={{ color: "blueviolet" }}
      >
        + New Project
      </button>
      <div
        style={{
          width: 300,
          backgroundColor: "white",
          boxShadow: "1px 3px 8px #cccccc",
          position: "absolute",
          top: 400,
          display: isAddProject === true ? "grid" : "none",
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#cccccc",
          borderRadius: 5,
          padding: 15,
          gridTemplateColumns: "35% 65%",
        }}
        className="TextM Modal"
      >
        <label>Category</label>
        <select
          style={{ borderStyle: "none", width: "87%" }}
          name="catInput"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="work">work project</option>
          <option value="life">life project</option>
        </select>
        <label>Project</label>
        <input
          onChange={(event) => setNameInput(event.target.value)}
          value={nameInput}
          placeholder="Project Name"
          className="nameInput"
        ></input>

        <label>Start from</label>
        <input
          onChange={(event) => setStartDateInput(event.target.value)}
          value={startDateInput}
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
          onClick={handleAddProject}
          type="button"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default AddProject;
