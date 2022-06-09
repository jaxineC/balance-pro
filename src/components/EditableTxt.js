import React, { useState, useEffect, useRef } from "react";
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
} from "firebase/firestore";
import { db } from "../firebase.js";

function EditableTxt({
  col,
  docID,
  projectInfo,
  editableBoxStyle,
  editableTxtStyle,
}) {
  const refInput = useRef(projectInfo.name);
  const [txtInput, setTxtInput] = useState(refInput);
  const [updateAlert, setUpdateAlert] = useState("");

  useEffect(() => {
    setTxtInput(projectInfo.name);
  }, [projectInfo]);

  function handleTxtUpdate() {
    let data = { name: txtInput };
    updateData(col, docID, data);
  }
  async function updateData(col, docID, data) {
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
    <div style={editableBoxStyle}>
      <input
        style={editableTxtStyle}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleTxtUpdate();
          }
        }}
        onChange={(event) => {
          setTxtInput(event.target.value);
        }}
        value={txtInput}
        ref={refInput}
      ></input>
      <span
        style={{
          height: 6,
          display: updateAlert === "ok" ? "block" : "none",
          position: "absolute",
          left: 0,
          top: -12,
          padding: "0px 4px",
          backgroundColor: "#fae6ff",
        }}
      >
        <span
          style={{
            fontSize: 14,
            color: "blueviolet",
            position: "relative",
            top: -10,
          }}
        >
          updated!
        </span>
      </span>
      <span
        style={{
          display: updateAlert === "fail" ? "block" : "none",
          position: "absolute",
          left: 0,
          top: -12,
          padding: "0px 4px",
          backgroundColor: "#fae6ff",
        }}
      >
        Oops, try again!
      </span>
    </div>
  );
}

export default EditableTxt;
