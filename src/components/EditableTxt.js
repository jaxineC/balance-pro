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
} from "firebase/firestore";
import { db } from "../firebase.js";
import { updateData } from "../module/manageDB.js";

function EditableTxt({ col, docID, projectInfo, editableTxtStyle }) {
  const refInput = useRef(projectInfo.name);
  const [txtInput, setTxtInput] = useState(refInput);

  useEffect(() => {
    setTxtInput(projectInfo.name);
  }, [projectInfo]);

  function handleTxtUpdate() {
    let data = { name: txtInput };
    updateData(col, docID, data);
  }

  return (
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
  );
}

export default EditableTxt;
