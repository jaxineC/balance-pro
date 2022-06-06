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

function Hashtag({ userID, projectID, item, i }) {
  //--------------------------------------------------useState & variables---------------------------------------// 0
  //--------------------------------------------------useState & variables---------------------------------------//
  const [hashtagInput, setHashtagInput] = useState("");
  let col = userID.uid;
  let docID = projectID;
  //--------------------------------------------------handle event-----------------------------------------------// 1
  //--------------------------------------------------handle event-----------------------------------------------//
  // setHashtagInput(item);
  function handleHashtagUpdate() {
    let data = { hashtag: [hashtagInput] };
    updateData(col, docID, data);
  }

  //--------------------------------------------------CRUD-------------------------------------------------------// 2
  //--------------------------------------------------CRUD-------------------------------------------------------//
  //--------------------------------------------------RENDER-----------------------------------------------------// 3
  //--------------------------------------------------RENDER-----------------------------------------------------//
  return (
    <li>
      <input
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleHashtagUpdate();
          }
        }}
        className="TextXL bold txt1Input"
        onChange={(event) => {
          setHashtagInput(event.target.value);
        }}
        value={hashtagInput}
        style={{
          borderStyle: "none",
        }}
      ></input>
    </li>
  );
}

export default Hashtag;
