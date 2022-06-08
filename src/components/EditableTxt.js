import React, { useState, useEffect } from "react";
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

function EditableTxt({ db, col, docID, defaultTxt }) {
  const [txtInput, setTxtInput] = useState(defaultTxt);

  function handleTxtUpdate() {
    let data = txtInput;
    updateData(col, docID, data);
  }

  return (
    <div className={componentName}>
      <input
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleTxtUpdate();
          }
        }}
        onChange={(event) => {
          setTxtInput(event.target.value);
        }}
        value={txtInput}
      ></input>
    </div>
  );
}

export default EditableTxt;
