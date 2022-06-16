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
import {
  AddProjectBtn,
  StyledAddProjectModal,
  ModalButton,
} from "../styles/SharedStyled";
import { StyledAddProjectSection } from "../styles/styledComponents.js";

function AddProject({ userID, isDesktop }) {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const [isAddProject, setIsAddProject] = useState(false);
  const [category, setCategory] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [startDateInput, setStartDateInput] = useState(
    new Date(Date.now()).toISOString(undefined, options).split("T")[0]
  );
  const [errorMessage, setErrorMessage] = useState("");

  function RenderNewProjectModal() {
    setIsAddProject(true);
  }

  async function handleAddProject() {
    if (category === "") {
      setErrorMessage("Oops! you need to descide it's category");
    } else if (nameInput === "") {
      setErrorMessage("Oops! you need to give the project a name");
    } else {
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
        setStartDateInput(
          new Date(Date.now()).toISOString(undefined, options).split("T")[0]
        );
        setErrorMessage("");
        setIsAddProject(false);
      } catch (event) {
        console.error("Error adding document: ", event);
        setErrorMessage("Oops! something's wrong, try again.");
      }
    }
  }

  function closeModal() {
    setIsAddProject(false);
  }

  return (
    <StyledAddProjectSection className="AddProject">
      <AddProjectBtn onClick={RenderNewProjectModal} type="button">
        + New Project
      </AddProjectBtn>
      <StyledAddProjectModal
        isAddProject={isAddProject}
        size={{ height: "auto", width: "320px" }}
      >
        <label>Category</label>
        <select
          // style={{ borderStyle: "none", width: "87%" }}
          name="catInput"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option
            value=""
            disabled
            selected="selected"
            hidden
            style={{ color: "#888888" }}
          >
            Select a category
          </option>
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
        <div className="errorMessage">{errorMessage}</div>

        <ModalButton attr="primary" onClick={handleAddProject} type="button">
          Confirm
        </ModalButton>
        <svg
          onClick={closeModal}
          className="closeBtn"
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
      </StyledAddProjectModal>
    </StyledAddProjectSection>
  );
}

export default AddProject;
