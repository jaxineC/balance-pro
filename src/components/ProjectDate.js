import React, { useState, useEffect } from "react";
import UpdatedMsg from "./UpdatedMsg.js";
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
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase.js";
import { StyledProjectDate } from "../styles/SharedStyled.js";

function ProjectDate({ userID, col, docID, projectInfo }) {
  const [startDateInput, setStartDateInput] = useState();
  const [endDateInput, setEndDateInput] = useState({});
  const [updateAlert, setUpdateAlert] = useState("");

  let options = { month: "short" };

  useEffect(() => {
    if (projectInfo.start) {
      setStartDateInput(
        projectInfo.start.toDate().toISOString(undefined, options).split("T")[0]
      );
      setEndDateInput(
        projectInfo.end.toDate().toISOString(undefined, options).split("T")[0]
      );
    }
  }, [projectInfo]);

  //--------------------------------------------------CRUD-------------------------------------------------------// 2
  //--------------------------------------------------CRUD-------------------------------------------------------//
  // UPDATE(editBtn)
  async function handleDateUpdate() {
    let data = {
      end: Timestamp.fromDate(new Date(endDateInput)),
      start: Timestamp.fromDate(new Date(startDateInput)),
    };
    updateData(col, docID, data);
  }

  async function updateData(col, docID, data) {
    console.log("userID", userID);
    console.log("col", col);
    console.log("docID", docID);
    console.log("data", data);
    console.log("projectInfo", projectInfo);
    const queryRef = doc(db, col, docID);
    try {
      await updateDoc(queryRef, data);
      setUpdateAlert("ok");
      setTimeout(() => {
        setUpdateAlert("");
      }, 1000);
    } catch (event) {
      setUpdateAlert("fail");
      setTimeout(() => {
        setUpdateAlert("");
      }, 1000);
    }
  }

  return (
    <StyledProjectDate>
      <input
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleDateUpdate();
          }
        }}
        onChange={(event) => setStartDateInput(event.target.value)}
        value={startDateInput}
        style={{ height: 20 }}
        // value={Date.now().strftime("%Y-%m-%d")}
        type="date"
        className="startInput"
        selected={
          projectInfo.start
            ? projectInfo.start
                .toDate()
                .toISOString(undefined, options)
                .split("T")[0]
            : ""
        }
      ></input>
      <span>~</span>
      <input
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleDateUpdate();
          }
        }}
        onChange={(event) => setEndDateInput(event.target.value)}
        value={endDateInput}
        type="date"
        className="endInput"
        selected={
          projectInfo.end
            ? projectInfo.end
                .toDate()
                .toISOString(undefined, options)
                .split("T")[0]
            : ""
        }
        style={{ height: 20 }}
      ></input>
      <UpdatedMsg updateAlert={updateAlert} />
    </StyledProjectDate>
  );
}

export default ProjectDate;
