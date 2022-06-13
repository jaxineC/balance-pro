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

function AddProject({ userID, isDesktop }) {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const [isAddProject, setIsAddProject] = useState(false);
  const [category, setCategory] = useState("work");
  const [nameInput, setNameInput] = useState("");
  const [startDateInput, setStartDateInput] = useState(
    new Date(Date.now()).toISOString(undefined, options).split("T")[0]
  );

  function RenderNewProjectModal() {
    setIsAddProject(true);
  }

  async function handleAddProject() {
    let col = userID.uid;
    let docID = "P-" + Date.now().toString();
    let data = {
      balanced: false,
      cat: category,
      end: Timestamp.fromDate(new Date(Date.now() + 86400000 * 30)),
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

  function closeModal() {
    setIsAddProject(false);
  }

  return (
    <div className="AddProject">
      <button
        onClick={RenderNewProjectModal}
        type="button"
        className="TextL"
        style={{
          fontSize: isDesktop ? "auto" : "16px",
          color: "blueviolet",
          border: isDesktop ? "none" : "1px solid blueviolet",
          borderRadius: isDesktop ? "none" : "25px",
          padding: isDesktop ? "0px" : "5px 125px",
        }}
      >
        + New Project
      </button>
      <div
        style={{
          color: "black",
          width: 320,
          backgroundColor: "white",
          boxShadow: "1px 3px 8px #cccccc",
          position: "absolute",
          top: isDesktop ? "60vh" : "auto",
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
        <svg
          onClick={closeModal}
          className="closeBtn"
          style={{
            height: 20,
            position: "absolute",
            top: 15,
            right: 15,
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
    </div>
  );
}

export default AddProject;
